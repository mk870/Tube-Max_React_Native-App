import { shortenString } from "~/Utils/Funcs";

export const getHeight = (width: number) => {
  if (width > 700) return 220;
  else if (width > 358) return 160;
  else return 150;
};
export const getWidth = (width: number) => {
  if (width > 700) return 220;
  else if (width > 358) return 160;
  else return 140;
};

export const contentTitle = (title: string, width: number) => {
  if (width > 700) return shortenString(title, 30);
  else if (width > 358) return shortenString(title, 19);
  else return shortenString(title, 18);
};
