import { StyleSheet } from "react-native";
import { appTheme } from "../Theme/Apptheme";

export const screenStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: appTheme.colors.white,
    fontSize: appTheme.font.small,
    fontFamily: "Roboto-regular",
  },
});
