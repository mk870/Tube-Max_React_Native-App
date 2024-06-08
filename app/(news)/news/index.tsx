import { StyleSheet, View } from "react-native";
import React from "react";

import ScreenWrapper from "../../../HOCs/ScreenWrapper";
import News from "~/Components/ContentDetails/News/News";

const news = () => {
  return (
    <View style={styles.container}>
      <News />
    </View>
  );
};

export default ScreenWrapper(news);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});
