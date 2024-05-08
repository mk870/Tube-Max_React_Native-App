import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const ScreenWrapper = (Screen: React.FC) => {
  const useScreenWrapper = (props: any) => {
    return (
      <View style={styles.container}>
        <Screen {...props} />
      </View>
    );
  };
  return useScreenWrapper;
};

export default ScreenWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "black",
  },
});
