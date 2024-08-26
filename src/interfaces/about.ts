import type Image from "./image/image";
import { type IFile } from "./file";
import { JsonFile } from '@lib/jsonFile';
export interface IAbout {
  attributes: {
    title: string;
    content: string;
    name: string;
    expertise: string;
    photo: Image;
    email: string;
    cv: IFile;
    portfolioWebsite: string;
    skills: string;
  };
}

export class About extends JsonFile {
  constructor(path: string, data: IAbout) {
    super(path, data)
  }
  parseObject2Json(data: IAbout): string[] {
    const result: string[] = []
    result.push(data.attributes.content)
    result.push("\n")
    return result
  }
}

export class Skills extends JsonFile {
  constructor(path: string, data: IAbout) {
    super(path, data)
  }
  parseObject2Json(data: IAbout): string[] {
    const result: string[] = []
    result.push(data.attributes.skills)
    result.push("\n")
    return result
  }
}

export class Biodata extends JsonFile {
  constructor(path: string, data: IAbout) {
    super(path, data)
  }
  parseObject2Json(data: IAbout): any[] {
    const result: any[] = []
    result.push({
      text: data.attributes.name,
      bold: true,
      fontSize: 14,
      lineHeight: 1.5,
      alignment: 'center'
    })
    result.push({
      columns: [
        {
          text: data.attributes.email,
          margin: [0, 0, 0, 0],
          alignment: 'right',
        },
        {
          text: "•",
          fontSize: 14,
          bold: true,
          alignment: 'center',
          margin: [10, -2, 10, 0],
          width: 'auto'
        },
        {
          text: data.attributes.portfolioWebsite,
          margin: [0, 0, 0, 0],
          alignment: 'left',
        }
      ]
    })
    result.push("\n")
    return result
  }
}
