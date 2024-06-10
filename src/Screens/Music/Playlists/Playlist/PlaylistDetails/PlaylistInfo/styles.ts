import { StyleSheet } from "react-native";

import {
  appTheme,
  darkGray,
  medium,
  primary,
  small,
  white,
} from "~/src/Theme/Apptheme";
import { bold, regular } from "~/src/Utils/Constants";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 10,
    paddingHorizontal: 10,
  },
  titleText: {
    fontFamily: bold,
    fontSize: appTheme.font.large,
    color: white,
  },
  artistsContainer: {
    flexDirection: "row",
    width: "100%",
    gap: 5,
    alignItems: "center",
    flexWrap: "wrap",
  },
  artist: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 5,
    gap: 5,
    backgroundColor: darkGray,
    paddingVertical: 5,
    borderRadius: 3,
    minWidth: 70,
  },
  row: {
    flexDirection: "row",
    gap: 15,
  },
  artistsWrapper: {
    flexDirection: "column",
    gap: 5,
  },
  smallRow: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  regularText: {
    fontFamily: regular,
    fontSize: small,
    color: "gray",
  },
  artistText: {
    fontFamily: regular,
    fontSize: small,
    color: white,
  },
  headerText: {
    fontFamily: regular,
    fontSize: medium,
    color: white,
  },
  creatorHeaderText: {
    fontFamily: regular,
    fontSize: medium,
    color: primary,
  },
  detailsContainer: {
    flexDirection: "column",
    gap: 10,
  },
});
