import type Image from "./image/image";
import { JsonFile } from '@lib/jsonFile';
export interface IAbout {
  attributes: {
    title: string;
    content: string;
    name: string;
    expertise: string;
    photo: Image;
    email: string;
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

export class Biodata extends JsonFile {
  constructor(path: string, data: IAbout) {
    super(path, data)
  }
  parseObject2Json(data: IAbout): any[] {
    const result: any[] = []
    result.push({
      text: data.attributes.name,
      bold: true,
      fontSize: 18,
      lineHeight: 1.5,
      margin: [20, 15, 0, 0]
    })
    result.push({
      text: data.attributes.email,
      margin: [20, 0, 0, 0]
    })
    result.push("\n")
    return result
  }
}
