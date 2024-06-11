import { StyleSheet, View } from "react-native";
import React from "react";

import HttpError from "~/src/Components/HttpError/HttpError";
import ScreenSpinner from "~/src/Components/Spinner/ScreenSpinner";
import VerticalSwipeable from "~/src/Components/Swipeables/Vertical/VerticalSwipeable";
import ScreenWrapper from "~/src/HOCs/ScreenWrapper";
import useFetchLatestAlbums from "~/src/Hooks/Music/Album/useFetchLatestAlbums";

const latest = () => {
  const { data, error, isLoading } = useFetchLatestAlbums();
  return (
    <View style={styles.container}>
      {isLoading && <ScreenSpinner />}
      {error && <HttpError />}
      {data && <VerticalSwipeable type="album" content={data} />}
    </View>
  );
};

export default ScreenWrapper(latest);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
});
