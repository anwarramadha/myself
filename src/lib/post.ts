import type Post from "@interfaces/post"
import type Project from "@interfaces/project"

export function generatePrevAndNextPost(posts: Post[] | Project[], slug: string) {
  const index = posts.findIndex(x => x.attributes.slug === slug)
  const prev = posts[(index - 1 + posts.length) % posts.length]
  const next = posts[(index + 1) % posts.length]
  return { prev, next }
}