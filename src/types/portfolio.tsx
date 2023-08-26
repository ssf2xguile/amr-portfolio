import type { MicroCMSListContent } from 'microcms-js-sdk';

export type PostTag = {
  name: string;
} & MicroCMSListContent;

type ImageElement = {
  url: string;
  height: number;
  width: number;
};

export type WorkImage = {
  workImage: ImageElement;
  title: string;
  description: string;
  tag: PostTag[];
  created_at: string;
} & MicroCMSListContent;

export type MainImage = {
  mainImage: ImageElement;
} & MicroCMSListContent;
