import {
  IExternalUrl,
  IImage,
  INumberOrNull,
  IStringOrNull,
} from "~/Types/Shared/Types";

export type IAlbumArtist = {
  external_urls: IExternalUrl;
  followers: { href: IStringOrNull; total: INumberOrNull };
  genres: string[] | null;
  href: IStringOrNull;
  id: string;
  images: IImage[] | null;
  name: string;
  popularity: INumberOrNull;
  type: IStringOrNull;
  uri: IStringOrNull;
};
