import { download } from "./utils";

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
    urls.forEach(async (url) => {
      //remove ) from the end of the url
      if (url.endsWith(')')) {
        url = url.slice(0, -1);
      }
      try {
        const urlInstance = new URL(url);
        await download(urlInstance.pathname);
        // if file is downloaded, replace the url with the local path
        const host = import.meta.env.ASTRO_SITE_URL;
        this.text = this.text.replace(url, `${host}/${process.env.ASTRO_BASE_PATH}/uploads/${url.split("/").pop()}`);
      } catch (error) {
        console.error(error);
      }
    });
  }
}