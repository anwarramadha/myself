import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Astro Sphere",
  DESCRIPTION: "Welcome to Astro Sphere, a portfolio and blog for designers and developers.",
  AUTHOR: "Mark Horn",
}

// Work Page
export const RESUME: Page = {
  TITLE: "MY RESUME",
  DESCRIPTION: "Places I have learned & worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Certification Page
export const CERTIFICATION: Page = {
  TITLE: "Certifications",
  DESCRIPTION: "Certifications I have earned.",
}

export const BASE_URL = `${import.meta.env.SITE}${import.meta.env.BASE_URL}`.replace(/\/$/, '')

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: `${BASE_URL}`, 
  },
  {
    TEXT: "Certifications",
    HREF: `${BASE_URL}/certifications`,
  },
  { 
    TEXT: "Resume", 
    HREF: `${BASE_URL}/resume`, 
  },
  { 
    TEXT: "Blog", 
    HREF: `${BASE_URL}/blog`, 
  },
  { 
    TEXT: "Projects", 
    HREF: `${BASE_URL}/projects`, 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "markhorn.dev@gmail.com",
    HREF: "mailto:markhorn.dev@gmail.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "markhorn-dev",
    HREF: "https://github.com/markhorn-dev/astro-sphere"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "markhorn-dev",
    HREF: "https://www.linkedin.com/in/markhorn-dev/",
  },
  { 
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "markhorn_dev",
    HREF: "https://twitter.com/markhorn_dev",
  },
]

export const POST_TYPE_ENUM = {
  POST: 'blog',
  PROJECT: 'projects',
}
