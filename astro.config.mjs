import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import solidJs from "@astrojs/solid-js"
import dotenv from 'dotenv'

dotenv.config()

export default defineConfig({
  site: process.env.ASTRO_SITE_URL,
  base: process.env.ASTRO_BASE_PATH,
  integrations: [mdx(), sitemap(), solidJs(), tailwind({ applyBaseStyles: false })],
})