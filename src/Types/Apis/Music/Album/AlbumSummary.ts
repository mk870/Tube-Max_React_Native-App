import {
  IArtist,
  IExternalUrl,
  IImage,
  INumberOrNull,
  IStringOrNull,
} from "~/Types/Shared/Types";

export type IAlbumSummary = {
  album_type: IStringOrNull;
  artists: IArtist[];
  available_markets: string[] | null;
  external_urls: IExternalUrl;
  href: IStringOrNull;
  id: string;
  images: IImage[] | null;
  name: string;
  release_date: IStringOrNull;
  release_date_precision: IStringOrNull;
  total_tracks: INumberOrNull;
  type: IStringOrNull;
  uri: IStringOrNull;
};
