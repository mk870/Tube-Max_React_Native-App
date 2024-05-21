import {
  IArtistSummary,
  IBooleanOrNull,
  IExternalUrl,
  INumberOrNull,
  IStringOrNull,
} from "~/Types/Shared/Types";
import { IAlbumSummary } from "../Album/AlbumSummary";

export type ITrack = {
  album: IAlbumSummary;
  artists: IArtistSummary[] | null;
  available_markets: string[] | null;
  external_urls: IExternalUrl;
  disc_number: INumberOrNull;
  duration_ms: INumberOrNull;
  explicit: IBooleanOrNull;
  href: IStringOrNull;
  id: string;
  is_local: IBooleanOrNull;
  name: string;
  popularity: INumberOrNull;
  preview_url: IStringOrNull;
  track_number: INumberOrNull;
  type: IStringOrNull;
  uri: IStringOrNull;
};
