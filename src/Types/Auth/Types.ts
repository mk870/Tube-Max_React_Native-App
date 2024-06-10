import { ITextInputType } from "../Shared/Types";

export type IUserLogin = {
  email: ITextInputType;
  password: ITextInputType;
};

export type IUserRegister = {
    firstName: ITextInputType;
    lastName: ITextInputType;
    email: ITextInputType;
    password: ITextInputType;
}
