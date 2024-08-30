import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import solidJs from "@astrojs/solid-js"
import dotenv from 'dotenv'

dotenv.config()

const getBasePath = () => {
  if (process.env.ASTRO_BASE_URL) {
    const url = new URL(process.env.ASTRO_BASE_URL)
    return url.pathname.replace(/^\/|\/$/g, '')
  }
  return ''
}

const getOrigin = () => {
  if (process.env.ASTRO_BASE_URL) {
    const url = new URL(process.env.ASTRO_BASE_URL)
    return url.origin
  }
  return ''
}

export default defineConfig({
  site: getOrigin(),
  base: getBasePath(),
  integrations: [mdx(), sitemap(), solidJs(), tailwind({ applyBaseStyles: false })],
})