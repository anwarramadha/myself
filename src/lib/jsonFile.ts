
import fs from "fs"

export interface IJsonFile {
  parseObject2Json(data: any): any;
}

export class JsonFile implements IJsonFile {
  path: string;
  data: any;

  constructor(path: string, data: any) {
    this.path = path
    this.data = data
  }

  parseObject2Json(data: any): any {
    return data
  }

  createJsonFileFromObject() {
    // save projects data into a json file into data folder using fs module
    // data is an array of postjson objects
    const objectResult = this.parseObject2Json(this.data)

    this.writeJsonFile(objectResult)
  }

  writeJsonFile(data: any) {
    fs.writeFileSync(this.path, JSON.stringify(data, null, 2))
  }

  static readJsonFile(path: string) {
    // check if the file exists
    if (!fs.existsSync(path)) {
      return
    }
    return JSON.parse(fs.readFileSync(path, "utf-8"))
  }
}
