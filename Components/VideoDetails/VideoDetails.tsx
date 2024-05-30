import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

import { medium, regular, youtubeKey } from "~/Utils/Constants";
import { IYoutubVideo } from "~/Types/Apis/Youtube/Types";
import YoutubeIframe from "react-native-youtube-iframe";
import HttpError from "../HttpError/HttpError";
import ScreenSpinner from "../Spinner/ScreenSpinner";
import { WebView } from "react-native-webview";
import { appTheme, small, white } from "~/Theme/Apptheme";

type Props = {
  videoQueryString: string;
  type: string;
};
const VideoDetails: React.FC<Props> = ({ type, videoQueryString }) => {
  const [error, setError] = useState("");
  const [allVideos, setAllVideos] = useState<IYoutubVideo[]>([]);
  const [videoPlayingNow, setVideoPlayingNow] = useState<IYoutubVideo | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${videoQueryString} ${type}&key=${youtubeKey}`;
  useEffect(() => {
    if(!videoPlayingNow){
        axios
      .get(url)
      .then((data) => {
        setAllVideos(data.data.items);
        setVideoPlayingNow(data.data.items[0]);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e.message);
        setError("something went wrong, please check your network connection");
        setIsLoading(false);
      });
    }
  }, []);
  const getDate = (date: string) => {
    return date.split("T")[0];
  };
  const videoList = () => {
    return allVideos.filter(
      (value) => value.id.videoId !== videoPlayingNow?.id.videoId
    );
  };
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {isLoading && <ScreenSpinner />}
      {error && <HttpError />}
      {allVideos.length > 0 && videoPlayingNow && (
        <View style={styles.container}>
          <View style={[styles.videoContainer, { height: 205 }]}>
            {/* <YoutubeIframe
              videoId={`${videoPlayingNow.id.videoId}`}
              height={500}
            /> */}
          </View>
          <View style={styles.videoDetails}>
            <Text style={styles.headerText}>
              {videoPlayingNow.snippet.title}
            </Text>
            <Text style={styles.regularText}>
              {videoPlayingNow.snippet.channelTitle}
            </Text>
            <Text style={styles.regularText}>
              {videoPlayingNow.snippet.description}
            </Text>
          </View>
          <View style={styles.videosContainer}>
            {videoList().map((video,index) => (
              <View
                key={index}
                style={styles.unplayedVideoContainer}
              >
                <Image
                  source={{ uri: video.snippet.thumbnails.medium.url }}
                  style={[styles.thumbnailStyles,{height:120,width:190}]}
                  resizeMode="cover"
                />
                <Text style={styles.unPlayedVideoTitleText}>{video.snippet.title}</Text>
                <Text style={styles.regularText}>{video.snippet.channelTitle}</Text>
                <Text style={styles.regularText}>{getDate(video.snippet.publishedAt)}</Text>
              </View>
            ))}
          </View>
        </View>
      )}
    </ScrollView>
  );
};

export default VideoDetails;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 5,
    flex: 1,
  },
  videoContainer: {
    flexDirection: "column",
    gap: 10,
    borderColor: "red",
    borderWidth: 1,
  },
  videoDetails: {
    flexDirection: "column",
    gap: 5,
    paddingHorizontal: 5,
  },
  regularText: {
    fontFamily: regular,
    fontSize: small,
    color: "gray",
  },
  headerText: {
    fontFamily: regular,
    fontSize: appTheme.font.medium,
    color: white,
  },
  videosContainer: {
    flexDirection: "column",
    gap: 5,
  },
  unplayedVideoContainer: {
    flexDirection: "column",
    gap: 5,
  },
  thumbnailStyles: {
    borderRadius: 10,
  },
  unPlayedVideoTitleText: {
    fontFamily: regular,
    fontSize: appTheme.font.small,
    color: white,
  },
});
