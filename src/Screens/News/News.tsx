import { StyleSheet, View } from "react-native";
import React from "react";

import NewsDetails from "./NewsArticle/NewsDetails/NewsDetails";
import ScreenWrapper from "~/src/HOCs/ScreenWrapper";

const News = () => {
  return (
    <View style={styles.container}>
      <NewsDetails />
    </View>
  );
};

export default ScreenWrapper(News);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});