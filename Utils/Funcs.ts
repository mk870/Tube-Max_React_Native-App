import * as SecureStore from "expo-secure-store";
import { IArtistSummary, ITrackSummary } from "~/Types/Shared/Types";

export const saveSecureValue = async (key: string, value: string) => {
  await SecureStore.setItemAsync(key, value);
};

export const getSecureValue = async (key: string) => {
  let result = await SecureStore.getItemAsync(key);
  return result;
};

export const passwordValidator: (
  setIsPasswordValidationError: React.Dispatch<React.SetStateAction<boolean>>,
  passwordValue: string | undefined
) => void = (setIsPasswordValidationError, passwordValue) => {
  if (passwordValue) {
    const regexPasswordValidator = new RegExp(
      "^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );
    if (regexPasswordValidator.test(passwordValue)) {
      setIsPasswordValidationError(false);
    } else {
      setIsPasswordValidationError(true);
    }
  }
};

export const emailValidator: (
  setIsEmailValidationError: React.Dispatch<React.SetStateAction<boolean>>,
  emailValue: string | undefined
) => void = (setIsEmailValidationError, emailValue) => {
  if (emailValue) {
    if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        emailValue
      )
    ) {
      setIsEmailValidationError(true);
    } else {
      setIsEmailValidationError(false);
    }
  }
};

export const passwordGuideLines = [
  "longer than 8 characters",
  "have atleast 1 special character",
  "have atleast 1 number",
  "have atleast 1 capital letter",
];
export const getAlbumArtistIds = (tracksList: ITrackSummary[] | null) => {
  if (tracksList === null) return null;
  else {
    const ids: string[] = [];
    const albumArtistsObj: { [index: string]: string } = {};
    for (let i = 0; i < tracksList.length; i++) {
      for (let j = 0; j < tracksList[i].artists.length; j++) {
        if (tracksList[i].artists[j].name in albumArtistsObj === false) {
          albumArtistsObj[tracksList[i].artists[j].name] =
            tracksList[i].artists[j].id;
        }
      }
    }
    for (const key in albumArtistsObj) {
      ids.push(albumArtistsObj[key]);
    }
    const processedIds = [];
    for (let i = 0; i < ids.length; i++) {
      if (i === ids.length - 1) {
        processedIds.push(ids[i]);
      } else {
        processedIds.push(`${ids[i]},`);
      }
    }
    const idsInString = "".concat(...processedIds);
    return idsInString;
  }
};

export const getTrackArtistsIds = (artistList: IArtistSummary[] | null) => {
  if (artistList) {
    const idsList = [];
    for (let i = 0; i < artistList.length; i++) {
      if (i === artistList.length - 1) idsList.push(artistList[i].id);
      else idsList.push(`${artistList[i].id},`);
    }
    const ids = "".concat(...idsList);
    return ids;
  } else return null;
};
export const timeConverter = (totalMinutes:number) => {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${hours}h ${minutes}m`;
}
export const getTMDBImage = (imageUrl: string | null) => {
  if (imageUrl) return { uri: `https://image.tmdb.org/t/p/w500/${imageUrl}` };
  else return require("assets/images/poster.jpg")
};
export const shortenString = (text:string, maxNumberOfWords:number) => {
  const maxWords = maxNumberOfWords + 1;
  if (text.length > maxNumberOfWords)
    return `${text.substring(0, maxWords)}...`;
  else return text;
};

export const cleanTextSnippets = (snippet:string) => {
  if (snippet) return snippet.replace(/(https?|ftp):\/\/[.[a-zA-Z0-9/-]+/, " ");
  else return "";
};
export const numberToString = (value:number)=>{
  if(typeof value === "number") return value.toString();
  else return value
}
export const stringToNumber = (value:string)=>{
  if(typeof value === "string") return Number(value);
  else return value
}

