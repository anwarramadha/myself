import type Image from './image/image';
import { BASE_URL } from '@consts';

export interface IIcon {
  icon: Image;
  darkIcon: Image;
}

export class Icon {
  icon: Image;
  darkIcon: Image;

  constructor(icon: IIcon) {
    console.log('const', icon);
    this.icon = icon?.icon;
    this.darkIcon = icon?.darkIcon;
  }

  getIcon(): Image {
    console.log('getIcon', this.icon);
    return this.icon;
  }

  getDarkIcon(): Image {
    if (!this.darkIcon) {
      return this.icon;
    }
    return this.darkIcon;
  }

  getIconUrl(): string {
    if (!this.getIcon()) {
      console.log('no icon');
      return '';
    }
    console.log('icon', this.getIcon()?.data?.attributes?.url);
    return this.getIcon()?.data?.attributes?.url;
  }

  getDarkIconUrl(): string {
    if (!this.getDarkIcon()?.data) {
      return this.getIconUrl();
    }
    return this.getDarkIcon()?.data?.attributes?.url;
  }

  getFullIconUrl(): string {
    return `${BASE_URL}${this.getIconUrl()}`;
  }

  getFullDarkIconUrl(): string {
    return `${BASE_URL}${this.getDarkIconUrl()}`;
  }

  isSvg(): boolean {
    if (!this.getIcon()) {
      return false;
    }
    return this.getIcon().data.attributes.mime === 'image/svg+xml';
  }
}