import { StyleSheet } from "react-native";
import {
  appTheme,
  white,
  darkGray,
  small,
  primary,
  background,
} from "~/src/Theme/Apptheme";
import { medium, regular } from "~/src/Utils/Constants";

export const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  titleText: {
    fontFamily: medium,
    fontSize: appTheme.font.large,
    color: white,
  },
  linkContainer: {
    backgroundColor: darkGray,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  linkText: {
    fontFamily: regular,
    fontSize: small,
    color: white,
  },
  readMoreText: {
    fontFamily: regular,
    fontSize: small,
    color: primary,
  },
  reviewsContainer: {
    flexDirection: "column",
    paddingHorizontal: 10,
    marginTop: 15,
  },
  reviewContainer: {
    flexDirection: "column",
    justifyContent: "center",
    gap: 10,
    marginBottom: 10,
    borderBottomColor: background,
    borderWidth: 1,
    paddingBottom: 3,
  },
  reviewHeader: {
    flexDirection: "row",
    gap: 10,
  },
  nameText: {
    fontFamily: medium,
    fontSize: appTheme.font.medium,
    color: white,
  },
  dateText: {
    fontFamily: regular,
    fontSize: appTheme.font.small,
    color: white,
  },
  reviwerImage: {
    borderRadius: 10,
  },
  reviewDetails: {
    flexDirection: "column",
    gap: 5,
  },
  reviewText: {
    fontFamily: regular,
    fontSize: appTheme.font.small,
    color: "gray",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  readMoreContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingBottom: 5,
  },
});
