import { JsonFile } from "@lib/jsonFile";

export interface ICertification {
  attributes: {
    name: string;
    date: string;
    organizer: string;
    description: string;
  }
}

export class Certification extends JsonFile {
  constructor(path: string, data: ICertification[]) {
    super(path, data)
  }
  parseObject2Json(data: ICertification[]): string[] {
    const result: string[] = []
    data.forEach((item) => {
      result.push(`${item.attributes.name} - ${item.attributes.organizer}, ${new Date(item.attributes.date).getFullYear()}`)
      result.push("\n")
    })
    return result
  }
}