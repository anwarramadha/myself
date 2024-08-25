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
        text: item.attributes.school,
        bold: true,
      });
      result.push(`${item.attributes.major} (${item.attributes.start}-${endYear}) ${gpa}`);
      result.push("\n");
    });
    return result;
  }
}
