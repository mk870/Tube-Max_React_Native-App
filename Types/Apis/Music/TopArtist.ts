import {
  IExternalUrl,
  IImage,
  INumberOrNull,
  IStringOrNull,
} from "~/Types/Shared/Types";

export type ITopArtist = {
  followers: IFollowers | null;
  genres: string[] | null;
  href: IStringOrNull;
  id: string;
  external_urls: IExternalUrl | null;
  images: IImage[] | null;
  name: IStringOrNull;
  popularity: INumberOrNull;
  type: IStringOrNull;
  uri: IStringOrNull;
};

export type IFollowers = {
  href: IStringOrNull;
  total: INumberOrNull;
};
