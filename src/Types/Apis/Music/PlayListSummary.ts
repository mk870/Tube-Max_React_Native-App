import {
  IBooleanOrNull,
  IExternalUrl,
  IImage,
  INumberOrNull,
  IOwner,
  IStringOrNull,
} from "~/Types/Shared/Types";

export type IPlayListSummary = {
  collaborative: IBooleanOrNull;
  external_urls: IExternalUrl | null;
  description: IStringOrNull;
  href: IStringOrNull;
  id: string;
  owner: IOwner | null;
  primary_color: IStringOrNull;
  public: IBooleanOrNull;
  images: IImage[] | null;
  name: IStringOrNull;
  tracks: ITracksSummary | null;
  snapshot_id: IStringOrNull;
  type: IStringOrNull;
  uri: IStringOrNull;
};

type ITracksSummary = {
  href: IStringOrNull;
  total: INumberOrNull;
};
