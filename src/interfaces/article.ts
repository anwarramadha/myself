import type Tag from "./tag";
import type Stack from "./stack";

export default interface Article {
  attributes: {
    title: string;
    summary: string;
    content: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    tags: {
      data: [
        {
          id: number;
          attributes: Tag;
        }
      ]
    }
    stacks: {
      data: [
        {
          id: number;
          attributes: Stack;
        }
      ]
    }
  };
}