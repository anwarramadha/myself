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

const docDefinition = {
  defaultStyle: {
    fontSize: 10,
  },
  content: [
    biodata,
    "\n",
    { text: 'About Me', bold: true, lineHeight: 0.5, alignment: 'center', fontSize: 11 },
    { text: "___________________________________________________________________________________________________________________", bold: true },
    "\n",
    ...about,
    "\n",
    { text: 'Educational Background', bold: true, lineHeight: 0.5, alignment: 'center', fontSize: 11 },
    { text: "___________________________________________________________________________________________________________________", bold: true },
    "\n",
    ...educations,
    "\n",
    { text: 'Skills', bold: true, lineHeight: 0.5, alignment: 'center', fontSize: 11 },
    { text: "___________________________________________________________________________________________________________________", bold: true },
    "\n",
    ...Skills,
    "\n",
    { text: 'Experiences', bold: true, lineHeight: 0.5, alignment: 'center', fontSize: 11 },
    { text: "___________________________________________________________________________________________________________________", bold: true },
    "\n",
    ...resume
  ]
}

var pdfDoc = printer.createPdfKitDocument(docDefinition, {});
pdfDoc.pipe(fs.createWriteStream('dist/cv.pdf'));
pdfDoc.end();
