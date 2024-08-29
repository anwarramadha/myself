import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import fs from "fs"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date) {
  return Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric"
  }).format(date)
}

export function readingTime(html: string) {
  const textOnly = html.replace(/<[^>]+>/g, "")
  const wordCount = textOnly.split(/\s+/).length
  const readingTimeMinutes = ((wordCount / 200) + 1).toFixed()
  return `${readingTimeMinutes} min read`
}

export async function download(filePath: string,) {
  if (!filePath) {
    return null
  }
  try {
    const path = "public"
    // download file as array buffer
    const fileUrl = import.meta.env.STRAPI_URL + filePath
    console.log("Downloading file from", fileUrl)
    const res = await fetch(fileUrl)
    const buffer = await res.arrayBuffer()

    // write buffer to file
    const filename = filePath.split("/").pop() || "download"
    // write file to public/uploads
    // create uploads directory if it doesn't exist
    if (!fs.existsSync(`${path}/uploads`)) {
      console.log("Creating uploads directory")
      fs.mkdirSync(`${path}/uploads`)
    }
    
    // check if file already exists
    // if (fs.existsSync(`${path}/uploads/${filename}`)) {
    //   console.log(`File ${filename} already exists`)
    //   return filename
    // }
    fs.writeFileSync(`${path}/uploads/${filename}`, Buffer.from(buffer))

    return filename
  } catch (error) {
    console.error(error)
    return null
  }
}
