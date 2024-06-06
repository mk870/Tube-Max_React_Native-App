import {
  IBooleanOrNull,
  IExternalUrl,
  IImage,
  INumberOrNull,
  IOwner,
  IPlaylistTracksItem,
  IStringOrNull,
} from "~/Types/Shared/Types";

export type IPlayList = {
  collaborative: IBooleanOrNull;
  external_urls: IExternalUrl | null;
  description: IStringOrNull;
  followers: { href: IStringOrNull; total: INumberOrNull } | null;
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
  items: IPlaylistTracksItem[] | null;
  limit: INumberOrNull;
  next: IStringOrNull;
  offset: INumberOrNull;
  previous: IStringOrNull;
  total: INumberOrNull;
};

