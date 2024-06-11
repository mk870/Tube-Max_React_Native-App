import {
  IBooleanOrNull,
  INumberOrNull,
  IStringOrNull,
} from "~/Types/Shared/Types";

export type IShowRecommendation = {
  adult: IBooleanOrNull;
  genre_ids: number[] | null;
  backdrop_path: IStringOrNull;
  first_air_date: IStringOrNull;
  id: number;
  media_type: IStringOrNull;
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
