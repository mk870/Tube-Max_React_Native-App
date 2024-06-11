import { StyleSheet } from "react-native";
import {
  appTheme,
  imageBackgroundColor,
  primary,
  white,
} from "~/src/Theme/Apptheme";
import { medium } from "~/src/Utils/Constants";

export const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    marginHorizontal: 5,
  },
  poster: {
    height: 320,
    width: 220,
    borderRadius: 15,
  },
  subContainer: {
    backgroundColor: imageBackgroundColor,
    flex: 1,
    borderRadius: 15,
    position: "relative",
  },
  detailsContainer: {
    position: "absolute",
    bottom: 10,
    paddingHorizontal: 10,
    gap: 10,
    width: "100%",
  },
  details: {
    flexDirection: "column",
    gap: 5,
  },
  detailsTwo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    width: "100%",
  },
  subDetails: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    gap: 10,
  },
  titleText: {
    fontFamily: medium,
    fontSize: appTheme.font.medium,
    color: white,
  },
  detailsText: {
    fontFamily: medium,
    fontSize: appTheme.font.small,
    color: white,
  },
  ratingsText: {
    fontFamily: medium,
    fontSize: appTheme.font.small,
    color: white,
    textAlign: "center",
    alignSelf: "center",
  },
  addMovieContainer: {
    backgroundColor: "#575958",
    height: 30,
    width: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  },
  btn: {
    backgroundColor: primary,
    height: 30,
    borderRadius: 5,
    width: 70,
    alignItems: "center",
    justifyContent: "center",
  },
});
