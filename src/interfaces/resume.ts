import { JsonFile } from '@lib/jsonFile';
import PdfMake from '@lib/pdfMake';

export interface IResume {
  id: number;
  attributes: {
    joinDate: string;
    leaveDate: string;
    institution: string;
    location: string;
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
  parseObject2Json(data: IResume[]): any {
    const result: any = []
    data.forEach((item) => {
      const startDateYear = new Date(item.attributes.joinDate).getFullYear()
      let endDateYear = 'Present'
      if (item.attributes.leaveDate) {
        endDateYear = new Date(item.attributes.leaveDate).getFullYear().toString()
      }
      result.push({
        columns: [
          {
            text: item.attributes.institution,
            fontSize: 10,
          },
          {
            text: item.attributes.location,
            alignment: 'right',
            lineHeight: 1.2,
            fontSize: 10,
          },
        ]
      })
      result.push({
        columns: [
          {
            text: item.attributes.position,
            color: '#000000',
            fontSize: 10,
          },
          {
            text: `${startDateYear} - ${endDateYear}`,
            alignment: 'right',
            fontSize: 10,
          },
        ]
      })
      result.push("\n")
      result.push(...PdfMake.parseMdString2List(item.attributes.description))
      result.push("\n\n")
    })
    return result
  }
}