import PdfPrinter from 'pdfmake';
import fs from 'fs';

// create printer with Times New Roman font
const printer = new PdfPrinter({
  Roboto: {
    normal: 'fonts/Roboto/Roboto-Regular.ttf',
    bold: 'fonts/Roboto/Roboto-Bold.ttf',
    italics: 'fonts/Roboto/Roboto-Italic.ttf',
    bolditalics: 'fonts/Roboto/Roboto-BoldItalic.ttf'
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
const Skills = readJsonFile("data/skills.json")
const certifications = readJsonFile("data/certifications.json")

const contents = [
  biodata,
  "\n",
  { text: 'About Me', color: '#000000', lineHeight: 0.5, alignment: 'center', fontSize: 11 },
  { text: "________________________________________________________________________________________________________________________________", bold: true },
  "\n",
  ...about,
  "\n",
  { text: 'Educational Background', color: '#000000', lineHeight: 0.5, alignment: 'center', fontSize: 11 },
  { text: "________________________________________________________________________________________________________________________________", bold: true },
  "\n",
  ...educations,
  "\n",
]

if (certifications) {
  contents.push(
    { text: 'Certifications / Courses', color: '#000000', lineHeight: 0.5, alignment: 'center', fontSize: 11 },
    { text: "________________________________________________________________________________________________________________________________", bold: true },
    "\n",
    ...certifications,
    "\n",
  )
}

contents.push(
  { text: 'Skills', color: '#000000', lineHeight: 0.5, alignment: 'center', fontSize: 11 },
  { text: "________________________________________________________________________________________________________________________________", bold: true },
  "\n",
  ...Skills,
  "\n",
)

if (resume) {
  contents.push(
    { text: 'Experiences', color: '#000000', lineHeight: 0.5, alignment: 'center', fontSize: 11 },
    { text: "________________________________________________________________________________________________________________________________", bold: true },
    "\n",
    ...resume
  )
}

const docDefinition = {
  defaultStyle: {
    fontSize: 9,
    color: '#7f7f7f',
  },
  content: contents,
}

var pdfDoc = printer.createPdfKitDocument(docDefinition, {});
pdfDoc.pipe(fs.createWriteStream('dist/cv.pdf'));
pdfDoc.end();
