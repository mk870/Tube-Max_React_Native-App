import {
  IGuestStar,
  INumberOrNull,
  IStringOrNull,
  ITvCrew,
} from "~/Types/Shared/Types";

export type IEpisode = {
  air_date: IStringOrNull;
  crew: ITvCrew[] | null;
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


