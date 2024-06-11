import {
  IBooleanOrNull,
  ICreator,
  INumberOrNull,
  ISeasonSummary,
  IStringOrNull,
} from "~/Types/Shared/Types";

export type IShow = {
  adult: IBooleanOrNull;
  backdrop_path: IStringOrNull;
  created_by: ICreator[] | null;
  episode_run_time: number[] | null;
  first_air_date: IStringOrNull;
  genres: IGenre[] | null;
  homepage: IStringOrNull;
  id: number;
  in_production: IBooleanOrNull;
  languages: string[] | null;
  last_air_date: IStringOrNull;
  last_episode_to_air: IEpisode;
  name: IStringOrNull;
  networks: INetwork[] | null;
  next_episode_to_air: IEpisode;
  number_of_episodes: INumberOrNull;
  number_of_seasons: INumberOrNull;
  origin_country: string[] | null;
  original_language: IStringOrNull;
  original_name: IStringOrNull;
  overview: IStringOrNull;
  popularity: INumberOrNull;
  poster_path: IStringOrNull;
  production_companies: IProductionCompany[] | null;
  production_countries: IProductionCountry[] | null;
  seasons: ISeasonSummary[]|null;
  spoken_languages: ISpokenLanguages[] | null;
  status: IStringOrNull;
  tagline: IStringOrNull;
  type: IStringOrNull;
  vote_average: INumberOrNull;
  vote_count: INumberOrNull;
};
type IGenre = {
  id: number;
  name: IStringOrNull;
};
type INetwork = {
  id: number;
  logo_path: IStringOrNull;
  name: IStringOrNull;
  origin_country: IStringOrNull;
};
type IEpisode = {
  air_date: IStringOrNull;
  episode_number: INumberOrNull;
  episode_type: IStringOrNull;
  id: number;
  name: IStringOrNull;
  overview: IStringOrNull;
  production_code: IStringOrNull;
  runtime: IStringOrNull;
  season_number: INumberOrNull;
  show_id: number;
  still_path: IStringOrNull;
  vote_average: INumberOrNull;
  vote_count: INumberOrNull;
};
type IProductionCompany = {
  id: number;
  logo_path: IStringOrNull;
  name: IStringOrNull;
  origin_country: IStringOrNull;
};
type ISpokenLanguages = {
  english_name: IStringOrNull;
  iso_639_1: IStringOrNull;
  name: IStringOrNull;
};

type IProductionCountry = {
  iso_3166_1: IStringOrNull;
  name: IStringOrNull;
};
