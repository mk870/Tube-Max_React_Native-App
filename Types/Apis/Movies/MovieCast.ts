import {
  IBooleanOrNull,
  INumberOrNull,
  IStringOrNull,
} from "~/Types/Shared/Types";

export type IMovieCast = {
  id: number;
  cast: ICast[] | null;
  crew: ICrew[] | null;
};

type ICast = {
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
