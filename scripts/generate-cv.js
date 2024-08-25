import PdfPrinter from 'pdfmake';
import fs, { link } from 'fs';

// create printer with Times New Roman font
const printer = new PdfPrinter({
  Roboto: {
    normal: 'fonts/Roboto/roboto-regular.ttf',
    bold: 'fonts/Roboto/roboto-bold.ttf',
    italics: 'fonts/Roboto/roboto-italic.ttf',
    bolditalics: 'fonts/Roboto/roboto-bolditalic.ttf'
  }
});

function readJsonFile(path) {
  // check if the file exists
  if (!fs.existsSync(path)) {
    return
  }
  return JSON.parse(fs.readFileSync(path, "utf-8"))
}

const biodata = readJsonFile("data/biodata.json")
const about = readJsonFile("data/about.json")
const resume = readJsonFile("data/resume.json")
const educations = readJsonFile("data/education.json")

// download image from url
const download = async (url, path) => {
  const response = await fetch(url)
  // get image type
  const contentType = response.headers.get("content-type")
  const extension = contentType.split("/")[1]
  path = `${path}.${extension}`
  const buffer = await response.arrayBuffer()
  fs.writeFileSync(path, Buffer.from(buffer))
  return extension
}

const imageExt = await download("https://my-strapi-media.s3.ap-southeast-2.amazonaws.com/thumbnail_images_8d279f5671.png", "public/profile")

const image2base64 = (path, imageExt) => {
  return `data:image/${imageExt};base64,${fs.readFileSync(`${path}.${imageExt}`).toString('base64')}`
}
// convert image from a url to base64
const base64 = image2base64("public/profile", imageExt)
const bgImage = image2base64("public/cv-bg", "png")

const docDefinition = {
  background: [
    {
      image: bgImage,
      width: 600,
    }
  ],
  content: [
    {
      columns: [
        {
          svg: `<svg width="80" height="80"> <defs> <clipPath id="circleView"> <rect id="rect"  width="100%" height="100%" rx="100"/> </clipPath> </defs> <image  width="80"  height="80"  xlink:href="${base64}"  clip-path="url(#circleView)" /> </svg>`, width: 80,
        },
        
        biodata,
      ]
    },
    "\n\n\n\n",
    { text: 'About Me', bold: true, lineHeight: 0.5 },
    { text: "______________________________________________________________________________________________", bold: true },
    "\n",
    ...about,
    "\n",
    { text: 'Educational Background', bold: true, lineHeight: 0.5 },
    { text: "______________________________________________________________________________________________", bold: true },
    "\n",
    ...educations,
    "\n",
    { text: 'Experiences', bold: true, lineHeight: 0.5 },
    { text: "______________________________________________________________________________________________", bold: true },
    "\n",
    ...resume
  ]
}

var pdfDoc = printer.createPdfKitDocument(docDefinition, {});
pdfDoc.pipe(fs.createWriteStream('dist/cv.pdf'));
pdfDoc.end();
