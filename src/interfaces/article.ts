import type Tag from "./tag";
import type Stack from "./stack";

export default interface Article {
  summary: string;
  content: string;
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