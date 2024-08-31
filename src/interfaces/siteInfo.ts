import type Image from './image/image'

export default interface SiteInfo {
  id: number;
  attributes: {
    title: string;
    description: string;
    image: Image;
    createdAt: string;
    updatedAt: string;
  }
}