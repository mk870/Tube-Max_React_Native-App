import { StyleSheet, Text, View } from "react-native";
import React from "react";
import VideoDetails from "~/Components/VideoDetails/VideoDetails";
import { useLocalSearchParams } from "expo-router";
import ScreenWrapper from "~/HOCs/ScreenWrapper";
import { SafeAreaView } from "react-native-safe-area-context";


const Video = () => {
  const { queryString, type } = useLocalSearchParams();
  console.log(queryString, type);
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
