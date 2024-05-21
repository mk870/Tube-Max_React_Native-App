import {
  IArtist,
  IBooleanOrNull,
  IExternalUrl,
  IImage,
  INumberOrNull,
  IStringOrNull,
} from "~/Types/Shared/Types";

export type IAlbum = {
  album_type: IStringOrNull;
  artists: IArtist[];
  available_markets: string[] | null;
  copyrights: ICopyright[] | null;
  genres: string[];
  external_ids: { upc: IStringOrNull };
  external_urls: IExternalUrl;
  href: IStringOrNull;
  id: string;
  images: IImage[] | null;
  label: IStringOrNull;
  name: IStringOrNull;
  popularity: INumberOrNull;
  release_date: IStringOrNull;
  release_date_precision: IStringOrNull;
  total_tracks: INumberOrNull;
  tracks: ITracks;
  type: IStringOrNull;
  uri: IStringOrNull;
};
type ICopyright = {
  text: IStringOrNull;
  type: IStringOrNull;
};
type ITracks = {
  href: IStringOrNull;
  items: ITracksItem[] | null;
  limit: INumberOrNull;
  next: IStringOrNull;
  offset: INumberOrNull;
  previous: IStringOrNull;
  total: INumberOrNull;
};
type ITracksItem = {
  artists: IArtist[];
  available_markets: string[] | null;
  disc_number: INumberOrNull;
  duration_ms: INumberOrNull;
  explicit: IBooleanOrNull;
  external_urls: IExternalUrl;
  href: IStringOrNull;
  id: string;
  is_local: IBooleanOrNull;
  name: IStringOrNull;
  preview_url: IStringOrNull;
  track_number: number;
  type: IStringOrNull;
  uri: IStringOrNull;
};


