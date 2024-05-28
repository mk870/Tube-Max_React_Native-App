import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React from "react";
import { appTheme, darkGray } from "../../Theme/Apptheme";

const ScreenSpinner = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={"large"} color={appTheme.colors.primary} />
    </View>
  );
};

export default ScreenSpinner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: 5,
  },
  text: {
    fontFamily: "Roboto-medium",
    fontSize: appTheme.font.medium,
    textAlign: "center",
    color: "gray",
  },
});
