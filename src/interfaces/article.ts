import type Tag from "./tag";
import type Stack from "./stack";
import type Image from "./image/image";

export default interface Article {
  heroImage: Image;
  summary: string;
  content: string;
  readingTime: number;
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
}