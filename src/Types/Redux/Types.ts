import { IMovieSummary } from "../Apis/Movies/SummaryMovieInfo";
import { IPlayListSummary } from "../Apis/Music/PlayListSummary";
import { INews } from "../Apis/News/News";
import { IShowSummary } from "../Apis/TvShows/ShowSummary";
import { IArtist } from "../Shared/Types";

export type IUser = {
  emailAddress: string;
  firstName: string;
  userTheme: string;
};

export type IGenreList = IGenre[];
export type IGenre = {
  id: string;
  name: string;
  selected: boolean;
};
export type IMovieSummaryDispatchAction = {
  payload: IMovieSummary[];
  type: string;
};
export type IShowSummaryDispatchAction = {
  payload: IShowSummary[];
  type: string;
};

export type IMusicPlayListDispatchAction = {
  payload: IPlayListSummary[];
  type: string;
};
export type INewsDispatchAction = {
  payload: INews[];
  type: string;
};
export type ITopArtistDispatchAction = {
  payload: IArtist[];
  type: string;
};
