import { StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";

import VideoDetails from "~/Components/VideoDetails/VideoDetails";
import ScreenWrapper from "~/HOCs/ScreenWrapper";

const Video = () => {
  const { queryString, type } = useLocalSearchParams();
  return (
    <SafeAreaView style={styles.container}>
      <VideoDetails
        type={type ? (Array.isArray(type) ? "" : type) : ""}
        videoQueryString={
          queryString ? (Array.isArray(queryString) ? "" : queryString) : ""
        }
      />
    </SafeAreaView>
  );
};

export default ScreenWrapper(Video);

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    flexDirection: "column",
    flex: 1,
  },
});
