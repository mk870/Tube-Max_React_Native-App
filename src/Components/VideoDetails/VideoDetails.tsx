import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import YoutubeIframe from "react-native-youtube-iframe";

import HttpError from "../HttpError/HttpError";
import ScreenSpinner from "../Spinner/ScreenSpinner";
import { small, appTheme, white, darkGray } from "~/src/Theme/Apptheme";
import { IYoutubVideo } from "~/src/Types/Apis/Youtube/Types";
import { youtubeKey, regular } from "~/src/Utils/Constants";
import { shortenString } from "~/src/Utils/Funcs";

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
  const { width } = useWindowDimensions();
  const [isLoading, setIsLoading] = useState(true);
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${videoQueryString} ${type}&key=${youtubeKey}`;
  // useEffect(() => {
  //   if (!videoPlayingNow) {
  //     axios
  //       .get(url)
  //       .then((data) => {
  //         setAllVideos(data.data.items);
  //         setVideoPlayingNow(data.data.items[0]);
  //         setIsLoading(false);
  //       })
  //       .catch((e) => {
  //         setError(
  //           "something went wrong, please check your network connection"
  //         );
  //         setIsLoading(false);
  //       });
  //   }
  // }, []);
  const getDate = (date: string) => {
    return date.split("T")[0];
  };
  const videoList = () => {
    return allVideos.filter(
      (value) => value.id.videoId !== videoPlayingNow?.id.videoId
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {isLoading && <ScreenSpinner />}
      {error && <HttpError />}
      {allVideos.length > 0 && videoPlayingNow && (
        <ScrollView contentContainerStyle={styles.subContainer}>
          <View style={[styles.videoContainer]}>
            {/* <YoutubeIframe
              videoId={`${videoPlayingNow.id.videoId}`}
              height={width / 1.8}
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
            {videoList().map((video, index) => (
              <View
                key={index}
                style={styles.unplayedVideoContainer}
                onTouchEnd={() => setVideoPlayingNow(video)}
              >
                <Image
                  source={{ uri: video.snippet.thumbnails.medium.url }}
                  style={[styles.thumbnailStyles, { height: 120, width: 190 }]}
                  resizeMode="cover"
                />
                <Text style={styles.unPlayedVideoTitleText}>
                  {width > 500
                    ? video.snippet.title
                    : shortenString(video.snippet.title, 40)}
                </Text>
                <Text style={styles.regularText}>
                  {video.snippet.channelTitle}
                </Text>
                <Text style={styles.regularText}>
                  {getDate(video.snippet.publishedAt)}
                </Text>
              </View>
            ))}
          </View>
        </ScrollView>
      )}
    </ScrollView>
  );
};

export default VideoDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  subContainer: {
    flexDirection: "column",
    justifyContent: "center",
    gap: 10,
  },
  videoContainer: {
    flexDirection: "column",
    gap: 10,
  },
  videoDetails: {
    flexDirection: "column",
    gap: 5,
    paddingHorizontal: 10,
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
    gap: 10,
    paddingHorizontal: 10,
  },
  unplayedVideoContainer: {
    flexDirection: "column",
    gap: 1,
    borderBottomColor: darkGray,
    borderBottomWidth: 1,
    paddingBottom: 3,
  },
  thumbnailStyles: {
    borderRadius: 10,
    marginBottom:2
  },
  unPlayedVideoTitleText: {
    fontFamily: regular,
    fontSize: appTheme.font.small,
    color: white,
  },
});
