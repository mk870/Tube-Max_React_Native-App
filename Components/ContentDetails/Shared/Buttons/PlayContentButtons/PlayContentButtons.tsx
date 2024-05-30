import { StyleSheet, View } from "react-native";
import React from "react";
import ContentButton from "../ContentButton";
import { useRouter } from "expo-router";
import { IVideoType } from "~/Types/Shared/Types";

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
        queryString,
      },
    });
  };
  return (
    <View style={styles.btnContainer}>
      {type === "track" ? (
        <ContentButton
          title="Watch Video"
          type="play"
          onPressFunc={() => console.log("hie")}
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
