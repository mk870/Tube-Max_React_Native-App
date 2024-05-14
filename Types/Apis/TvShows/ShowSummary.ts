import {
  IBooleanOrNull,
  INumberOrNull,
  IStringOrNull,
} from "~/Types/Shared/Types";

export type IShowSummary = {
  adult: IBooleanOrNull;
  backdrop_path: IStringOrNull;
  first_air_date: IStringOrNull;
  genre_ids: number[] | null;
  id: number;
  name: IStringOrNull;
  origin_country: string[] | null;
  original_language: IStringOrNull;
  original_name: IStringOrNull;
  overview: IStringOrNull;
  popularity: INumberOrNull;
  poster_path: IStringOrNull;
  vote_average: INumberOrNull;
  vote_count: INumberOrNull;
};
