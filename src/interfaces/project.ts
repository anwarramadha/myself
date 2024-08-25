import type Article from "./article";

export default interface Project {
  id: number;
  type: string;
  attributes: {
    title: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    article: Article;
    demoUrl: string;
    repositoryUrl: string;
  }
}
