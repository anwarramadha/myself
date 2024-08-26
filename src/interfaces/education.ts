import { JsonFile } from '@lib/jsonFile';

export interface IEducation {
  attributes: {
    title: string;
    school: string;
    major: string;
    start: number;
    end: number;
    gpa: number;
  };
}

export class Education extends JsonFile {
  constructor(path: string, data: IEducation[]) {
    super(path, data);
  }

  parseObject2Json(data: IEducation[]): any {
    const result: any = [];
    data.forEach((item) => {
      const endYear = item.attributes.end ? item.attributes.end : "Present";
      const gpa = item.attributes.gpa ? `GPA: ${item.attributes.gpa}/4.0` : "";
      result.push({
        columns: [
          {
            text: item.attributes.school,
            fontSize: 10,
          },
          {
            text: `${item.attributes.start} - ${endYear}`,
            alignment: 'right',
            lineHeight: 1.2,
            fontSize: 10,
          }
        ]
      })
      result.push({
        columns: [
          {
            text: item.attributes.major,
            color: '#000000',
            fontSize: 10,
          },
          {
            text: gpa,
            alignment: 'right',
            fontSize: 10,
          }
        ]
      })
      result.push("\n");
    });
    return result;
  }
}
