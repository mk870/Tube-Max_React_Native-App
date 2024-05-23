import { StyleSheet } from "react-native";
import { appTheme, large, white } from "~/Theme/Apptheme";
import { bold, medium, regular } from "~/Utils/Constants";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  poster: {
    position: "relative",
  },
  gradientOverlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  regularText: {
    fontFamily: regular,
    fontSize: 13,
    color: white,
  },
  smallRow: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
});
