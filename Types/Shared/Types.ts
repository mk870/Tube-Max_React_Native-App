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
export type IArtistSummary = {
  external_urls: IExternalUrl;
  href: IStringOrNull;
  id: string;
  name: string;
  type: IStringOrNull;
  uri: IStringOrNull;
};

export type ITrackSummary = {
  artists: IArtistSummary[];
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
export type IMovieCrew = {
  adult: IBooleanOrNull;
  credit_id: IStringOrNull;
  department: IStringOrNull;
  gender: INumberOrNull;
  id: number;
  job: IStringOrNull;
  known_for_department: IStringOrNull;
  name: string;
  original_name: IStringOrNull;
  popularity: INumberOrNull;
  profile_path: IStringOrNull;
};
export type ICast = {
  adult: IBooleanOrNull;
  cast_id: INumberOrNull;
  character: IStringOrNull;
  credit_id: IStringOrNull;
  gender: INumberOrNull;
  id: number;
  known_for_department: IStringOrNull;
  name: IStringOrNull;
  order: INumberOrNull;
  original_name: IStringOrNull;
  popularity: INumberOrNull;
  profile_path: IStringOrNull;
};
export type IContentType = "movie"|"tvShow"|"music"
export type INewsCategory =
  | "musicians"
  | "movies"
  | "tv shows"
  | "albums"
  | "songs"
  | "hollywood actors"
  | "entertainment";
