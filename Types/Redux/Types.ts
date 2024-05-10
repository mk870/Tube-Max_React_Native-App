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

