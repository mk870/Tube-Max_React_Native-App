import {
  IArtistSummary,
  IExternalUrl,
  IImage,
  INumberOrNull,
  IStringOrNull,
} from "~/Types/Shared/Types";

export type IArtistAlbum = {
  album_group: IStringOrNull;
  album_type: IStringOrNull;
  artists: IArtistSummary[];
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
