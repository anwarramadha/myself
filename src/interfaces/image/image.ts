import type Format from './format';
import { type IFile } from '../file';

export default interface Image extends IFile {
  data: {
    id: number;
    attributes: {
      name: string;
      alternativeText: string;
      caption: string;
      width: number;
      height: number;
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      previewUrl: string;
      provider: string;
      provider_metadata: string;
      createdAt: string;
      updatedAt: string;
      formats: {
        thumbnail: Format;
        large: Format;
        medium: Format;
        small: Format;
      };
    };
  };
}