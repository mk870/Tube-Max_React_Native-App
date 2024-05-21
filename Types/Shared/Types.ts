export type ITextInputType = undefined | string;
export type IVoidFunc = () => void;
export type IStringOrNull = string | null;
export type IBooleanOrNull = boolean | null;
export type INumberOrNull = number | null;
export type IExternalUrl = {
    spotify: IStringOrNull;
  };
export  type IOwner = {
    display_name: IStringOrNull;
    external_urls: IExternalUrl;
    href: IStringOrNull;
    id: IStringOrNull;
    type: IStringOrNull;
    uri: IStringOrNull;
  };
  export type IImage = {
    url: INumberOrNull;
    height: IStringOrNull;
    width: INumberOrNull;
  };
  