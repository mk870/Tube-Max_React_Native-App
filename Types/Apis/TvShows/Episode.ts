import {
  IBooleanOrNull,
  INumberOrNull,
  IStringOrNull,
} from "~/Types/Shared/Types";

export type IEpisode = {
  air_date: IStringOrNull;
  crew: ICrew[] | null;
  guest_stars: IGuestStar[] | null;
  episode_number: number;
  id: number;
  name: IStringOrNull;
  overview: IStringOrNull;
  production_code: IStringOrNull;
  runtime: INumberOrNull;
  season_number: INumberOrNull;
  still_path: IStringOrNull;
  vote_average: INumberOrNull;
  vote_count: INumberOrNull;
};
type ICrew = {
  adult: IBooleanOrNull;
  credit_id: IStringOrNull;
  department: IStringOrNull;
  gender: INumberOrNull;
  id: number;
  job: IStringOrNull;
  known_for_department: IStringOrNull;
  name: IStringOrNull;
  original_name: IStringOrNull;
  popularity: INumberOrNull;
  profile_path: IStringOrNull;
};
type IGuestStar = {
  adult: IBooleanOrNull;
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
