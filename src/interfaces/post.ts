import type Article from "./article";

export default interface Post {
  id: number;
  attributes: {
    title: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    article: Article;
  }
}