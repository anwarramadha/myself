import { JsonFile } from "./jsonFile"

export default class PdfMake {
  static parseMdString2List(data: string): any {
    // parse a markdown string into a list
    const splittedData = data.split("\n")
    // console.log(splittedData)

    const result: any = []
    let ul: string[] = []
    for (let i = 0; i < splittedData.length; i++) {
      splittedData[i] = splittedData[i].trim()
      // check if the string prefixed with "- "z
      if (splittedData[i][0] === "-" && splittedData[i][1] === " ") {
        // remove the first & second element
        splittedData[i] = splittedData[i].slice(2)
        if (splittedData[i]) {
          ul.push(splittedData[i])
        }
      } else {
        if (ul.length > 0) {
          result.push({ ul })
          ul = []
        }
        result.push(splittedData[i])
      }
    }

    
    if (ul.length > 0) {
      result.push({ ul })
    }

    return result
  }
}