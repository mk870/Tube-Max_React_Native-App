import { IStringOrNull } from "~/Types/Shared/Types";

export type INews = {
  author: IStringOrNull;
  content: string;
  description: string;
  publishedAt: string;
  source: ISource;
  title: string;
  url: string;
  urlToImage: string;
};
type ISource = {
  id: IStringOrNull;
  name: IStringOrNull;
};
