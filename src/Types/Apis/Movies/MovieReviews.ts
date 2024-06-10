import { INumberOrNull, IStringOrNull } from "~/Types/Shared/Types";

export type IMovieReview = {
  author: IStringOrNull;
  author_details: IAuthor | null;
  content: IStringOrNull;
  created_at: IStringOrNull;
  id: string;
  updated_at: IStringOrNull;
  url: IStringOrNull;
};

type IAuthor = {
  avatar_path: IStringOrNull;
  name: IStringOrNull;
  rating: INumberOrNull;
  username: IStringOrNull;
};
