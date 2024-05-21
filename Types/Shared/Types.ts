export type ITextInputType = undefined | string;
export type IVoidFunc = () => void;
export type IStringOrNull = string | null;
export type IBooleanOrNull = boolean | null;
export type INumberOrNull = number | null;
export type IExternalUrl = {
  spotify: IStringOrNull;
};
export type IOwner = {
  display_name: IStringOrNull;
  external_urls: IExternalUrl;
  href: IStringOrNull;
  id: IStringOrNull;
  type: IStringOrNull;
  uri: IStringOrNull;
};
export type IImage = {
  url: INumberOrNull;
  height: IStringOrNull;
  width: INumberOrNull;
};
export type IArtist = {
  external_urls: IExternalUrl;
  href: IStringOrNull;
  id: string;
  name: string;
  type: IStringOrNull;
  uri: IStringOrNull;
};

export type ITrack = {
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
  track_number: INumberOrNull;
  type: IStringOrNull;
  uri: IStringOrNull;
};