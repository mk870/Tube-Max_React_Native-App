import {
  IBooleanOrNull,
  IExternalUrl,
  IImage,
  INumberOrNull,
  IOwner,
  IStringOrNull,
} from "~/Types/Shared/Types";
import { IFollowers } from "./TopArtist";
export type IPlayList = {
  collaborative: IBooleanOrNull;
  external_urls: IExternalUrl | null;
  description: IStringOrNull;
  followers: IFollowers | null;
  href: IStringOrNull;
  id: string;
  owner: IOwner | null;
  primary_color: IStringOrNull;
  public: IBooleanOrNull;
  images: IImage[] | null;
  name: IStringOrNull;
  tracks: ITracks | null;
  snapshot_id: IStringOrNull;
  type: IStringOrNull;
  uri: IStringOrNull;
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
  added_at: IStringOrNull;
  added_by: IAddedBy | null;
  is_local: IBooleanOrNull;
  primary_color: IStringOrNull;
  track: ITrack;
  video_thumbnail: { url: IStringOrNull };
};
type IArtist = {
  external_urls: IExternalUrl;
  href: IStringOrNull;
  id: IStringOrNull;
  name: IStringOrNull;
  type: IStringOrNull;
  uri: IStringOrNull;
};
type IAlbum = {
  album_type: IStringOrNull;
  artists: IArtist[] | null;
  available_markets: string[] | null;
  external_urls: IExternalUrl;
  href: IStringOrNull;
  id: IStringOrNull;
  images: IImage[] | null;
  name: IStringOrNull;
  release_date: IStringOrNull;
  release_date_precision: IStringOrNull;
  total_tracks: INumberOrNull;
  type: IStringOrNull;
  uri: IStringOrNull;
};
type ITrack = {
  album: IAlbum | null;
  artists: IArtist[] | null;
  available_markets: string[] | null;
  disc_number: INumberOrNull;
  duration_ms: INumberOrNull;
  episode: IBooleanOrNull;
  explicit: IBooleanOrNull;
  external_urls: IExternalUrl | null;
  external_ids: { isrc: IStringOrNull };
  href: IStringOrNull;
  id: string;
  is_local: IBooleanOrNull;
  name: IStringOrNull;
  popularity: INumberOrNull;
  preview_url: IStringOrNull;
  track: IBooleanOrNull;
  track_number: INumberOrNull;
  type: IStringOrNull;
  uri: IStringOrNull;
};
type IAddedBy = {
  href: IStringOrNull;
  id: IStringOrNull;
  type: IStringOrNull;
  uri: IStringOrNull;
  external_urls: IExternalUrl | null;
};
