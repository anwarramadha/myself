import { formatDate } from "@lib/utils"
import type Post from "@interfaces/post"
import type Project from "@interfaces/project"
import { POST_TYPE_ENUM, BASE_URL } from "@consts"

type Props = {
  // entry: CollectionEntry<"blog"> | CollectionEntry<"projects">
  entry: Post | Project,
  pill?: boolean,
  collection: string
}

export default function ArrowCard({entry, pill, collection=POST_TYPE_ENUM.POST}: Props) {
    return (
      <a href={`${BASE_URL}/${collection}/${entry.attributes.slug}`} class="group p-4 gap-3 flex items-center border rounded-lg hover:bg-black/5 hover:dark:bg-white/10 border-black/15 dark:border-white/20 transition-colors duration-300 ease-in-out">
      <div class="w-full group-hover:text-black group-hover:dark:text-white blend">
        <div class="flex flex-wrap items-center gap-2">
          {pill &&
            <div class="text-sm capitalize px-2 py-0.5 rounded-full border border-black/15 dark:border-white/25">
              {collection === POST_TYPE_ENUM.POST ? "post" : "project"}
            </div>
          }
          <div class="text-sm uppercase">
            {formatDate(new Date(entry.attributes.createdAt))}
          </div>
        </div>
        <div class="font-semibold mt-3 text-black dark:text-white">
          {entry.attributes.title}
        </div>

        <div class="text-sm line-clamp-2">
          {entry.attributes.article.summary}
        </div>
        <ul class="flex flex-wrap mt-2 gap-1">
          {entry.attributes.article.tags.data.map((tag) => (
            <li class="text-xs uppercase py-0.5 px-1 rounded bg-black/5 dark:bg-white/20 text-black/75 dark:text-white/75">
              {tag.attributes.text}
            </li>
          ))}
          {entry.attributes.article.stacks.data.map((tag) => (
            <li class="text-xs uppercase py-0.5 px-1 rounded bg-black/5 dark:bg-white/20 text-black/75 dark:text-white/75">
              {tag.attributes.name}
            </li>
          ))}
        </ul>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="stroke-current group-hover:stroke-black group-hover:dark:stroke-white">
        <line x1="5" y1="12" x2="19" y2="12" class="scale-x-0 group-hover:scale-x-100 translate-x-4 group-hover:translate-x-1 transition-all duration-300 ease-in-out" />
        <polyline points="12 5 19 12 12 19" class="translate-x-0 group-hover:translate-x-1 transition-all duration-300 ease-in-out" />
      </svg>
    </a>
   )
}