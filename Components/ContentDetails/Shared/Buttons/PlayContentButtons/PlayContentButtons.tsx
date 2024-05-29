import { StyleSheet, View } from "react-native";
import React from "react";
import ContentButton from "../ContentButton";

type Props = {
  type: "movie" | "episode" | "track";
};

const PlayContentButtons: React.FC<Props> = ({ type }) => {
  return (
    <View style={styles.btnContainer}>
      <ContentButton
        title="Trailers"
        onPressFunc={() => console.log("hie")}
        type="play"
      />
      <ContentButton
        title="Reviews"
        onPressFunc={() => console.log("hie")}
        type="play"
      />
      <ContentButton
        title="Clips"
        onPressFunc={() => console.log("hie")}
        type="play"
      />
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
