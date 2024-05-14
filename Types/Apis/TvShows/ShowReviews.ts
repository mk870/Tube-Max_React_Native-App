import { INumberOrNull, IStringOrNull } from "~/Types/Shared/Types";

export type IShowReview = {
  author: IStringOrNull;
  author_details: IAuthor | null;
  content: IStringOrNull;
  created_at: IStringOrNull;
  id: IStringOrNull;
  updated_at: IStringOrNull;
  url: IStringOrNull;
};

type IAuthor = {
  avatar_path: IStringOrNull;
  name: IStringOrNull;
  rating: INumberOrNull;
  username: IStringOrNull;
};
