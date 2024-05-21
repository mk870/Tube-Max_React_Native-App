import { IMovieSummary } from "../Apis/Movies/SummaryMovieInfo";
import { IPlayListSummary } from "../Apis/Music/PlayListSummary";
import { ITopArtist } from "../Apis/Music/TopArtist";
import { IShowSummary } from "../Apis/TvShows/ShowSummary";

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
export type ITopArtistDispatchAction = {
  payload: ITopArtist[];
  type: string;
};
