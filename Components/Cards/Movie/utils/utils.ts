export const getContentImage = (imageUrl: string | null) => {
  if (imageUrl) return { uri: `https://image.tmdb.org/t/p/w500/${imageUrl}` };
  else return require("assets/images/poster.jpg")
};
