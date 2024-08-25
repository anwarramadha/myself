import { JsonFile } from '@lib/jsonFile';
import PdfMake from '@lib/pdfMake';

export interface IResume {
  id: number;
  attributes: {
    joinDate: string;
    leaveDate: string;
    institution: string;
    position: string;
    description: string;
    createdAt: string;
    updatedAt: string;
  };
}

export class Resume extends JsonFile {
  constructor(path: string, data: IResume[]) {
    super(path, data)
  }
  parseObject2Json(data: IResume[]): string[] {
    const result: string[] = []
    data.forEach((item) => {
      const startDateYear = new Date(item.attributes.joinDate).getFullYear()
      let endDateYear = 'Present'
      if (item.attributes.leaveDate) {
        endDateYear = new Date(item.attributes.leaveDate).getFullYear().toString()
      }
      result.push(`${startDateYear} - ${endDateYear} | ${item.attributes.institution} | ${item.attributes.position}\n`)
      result.push("\n")
      result.push(...PdfMake.parseMdString2List(item.attributes.description))
      result.push("\n")
    })
    return result
  }
}