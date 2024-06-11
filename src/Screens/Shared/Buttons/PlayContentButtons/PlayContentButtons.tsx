import { StyleSheet, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

import ContentButton from "../ContentButton";
import { IVideoType } from "~/src/Types/Shared/Types";

type Props = {
  type: "movie" | "episode" | "track";
  queryString: string;
};

const PlayContentButtons: React.FC<Props> = ({ type, queryString }) => {
  const router = useRouter();
  const tvMovieNavigate = (typeOfVideos: IVideoType) => {
    router.push({
      pathname:
        type === "episode"
          ? `tvshow/video/${typeOfVideos}`
          : `movie/video/${typeOfVideos}`,
      params: {
        queryString: queryString.replace(/[{}()\[\]]/g, ""),
      },
    });
  };
  return (
    <View style={styles.btnContainer}>
      {type === "track" ? (
        <ContentButton
          title="Play"
          type="play"
          onPressFunc={() =>
            router.push({
              pathname: "music/video/song",
              params: { queryString: queryString.replace(/[{}()\[\]]/g, "") },
            })
          }
        />
      ) : (
        <>
          <ContentButton
            title="Trailers"
            onPressFunc={() => tvMovieNavigate("trailer")}
            type="play"
          />
          <ContentButton
            title="Reviews"
            onPressFunc={() => tvMovieNavigate("reviews")}
            type="play"
          />
          <ContentButton
            title="Clips"
            onPressFunc={() => tvMovieNavigate("clips")}
            type="play"
          />
        </>
      )}
    </View>
  );
};

export default PlayContentButtons;

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: "row",
    gap: 10,
  },
});
