import {
  IBooleanOrNull,
  INumberOrNull,
  IStringOrNull,
} from "~/Types/Shared/Types";

export type IMovie = {
  adult: IBooleanOrNull;
  backdrop_path:IStringOrNull;
  belongs_to_collection: ICollection | null;
  budget: INumberOrNull;
  genres: IGenre[] | null;
  homepage: IStringOrNull;
  id: number;
  imdb_id: string;
  origin_country: string[] | null;
  original_language: IStringOrNull;
  original_title: IStringOrNull;
  overview: IStringOrNull;
  popularity: INumberOrNull;
  poster_path: IStringOrNull;
  production_companies: IProductionCompany[] | null;
  production_countries: IProductionCountry[] | null;
  release_date: IStringOrNull;
  revenue: INumberOrNull;
  runtime: INumberOrNull;
  spoken_languages: ILanguage[] | null;
  status: IStringOrNull;
  tagline: IStringOrNull;
  title: IStringOrNull;
  video: IBooleanOrNull;
  vote_average: INumberOrNull;
  vote_count: INumberOrNull;
};
type ICollection = {
  backdrop_path: IStringOrNull;
  id: number;
  name: IStringOrNull;
  poster_path: IStringOrNull;
};
type IGenre = {
  id: INumberOrNull;
  name: IStringOrNull;
};
type IProductionCompany = {
  id: number;
  logo_path: IStringOrNull;
  name: string;
  origin_country: IStringOrNull;
};
type IProductionCountry = {
  iso_3166_1: IStringOrNull;
  name: IStringOrNull;
};
type ILanguage = {
  english_name: IStringOrNull;
  iso_639_1: IStringOrNull;
  name: string;
};
