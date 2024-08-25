import type Article from "./article";

export default interface Post {
  id: number;
  type: string;
  attributes: {
    title: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    article: Article;
  }
}