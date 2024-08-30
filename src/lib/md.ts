import { download } from "./utils";
import { BASE_URL } from "@consts";

export class Md {
  text: string;
  constructor(text: string) {
    this.text = text;
  }

  extractUrls(): string[] {
    const urlRegex = /(http?:\/\/[^\s]+)/g;
    return this.text.match(urlRegex) || [];
  }

  downloadUrlAndReplaceUrls(): void {
    const urls = this.extractUrls();
    urls.forEach((url) => {
      //remove ) from the end of the url
      if (url.endsWith(')')) {
        url = url.slice(0, -1);
      }
      try {
        const urlInstance = new URL(url);
        download(urlInstance.pathname);
        // if file is downloaded, replace the url with the local path
        this.text = this.text.replace(url, `${BASE_URL}/uploads/${url.split("/").pop()}`);
      } catch (error) {
        console.error(error);
      }
    });
  }
}