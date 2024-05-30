export type IYoutubVideo = {
  etag: string;
  id: IVideoId;
  kind: string;
  snippet: ISnippet;
};
type IVideoId = {
  kind: string;
  videoId: string;
};
type ISnippet = {
  channelId: string;
  channelTitle: string;
  description: string;
  liveBroadcastContent: string;
  publishTime: string;
  publishedAt: string;
  title: string;
  thumbnails: IThumbNails;
};

type IThumbNails = {
  default: IImage;
  medium: IImage;
  high: IImage;
};
type IImage = {
  url: string;
  height: number;
  width: number;
};
