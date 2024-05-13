import { IMovieSummary } from "../Apis/Movies/SummaryMovieInfo";

export type IUser = {
  emailAddress: string;
  firstName: string;
  userTheme: string;
};

export type IGenreList = IGenre[];
export type IGenre ={
  id: string;
  name: string;
  selected: boolean;
}
export type IMovieSummaryDispatchAction = {
  payload: IMovieSummary[];
  type: string;
}
