import {
  IArtist,
  IBooleanOrNull,
  IExternalUrl,
  INumberOrNull,
  IStringOrNull,
  ITrack,
} from "~/Types/Shared/Types";

export type IAlbumTracks = {
  href: IStringOrNull;
  items: ITrack[] | null;
  limit: INumberOrNull;
  next: IStringOrNull;
  offset: INumberOrNull;
  previous: IStringOrNull;
  total: INumberOrNull;
};

