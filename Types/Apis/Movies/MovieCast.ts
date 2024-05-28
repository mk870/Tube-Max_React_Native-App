import {
  ICast,
  IMovieCrew,
} from "~/Types/Shared/Types";

export type IMovieCast = {
  id: number;
  cast: ICast[] | null;
  crew: IMovieCrew[] | null;
};


