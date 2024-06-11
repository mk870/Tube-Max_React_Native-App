import { StyleSheet } from "react-native";
import { medium, white, small, darkGray, primary } from "~/src/Theme/Apptheme";
import { bold, regular } from "~/src/Utils/Constants";

export const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 10,
    },
    actorDetails: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
    },
    subRow: {
      flexDirection: "row",
      alignItems: "center",
      gap: 3,
    },
    nameText: {
      fontFamily: bold,
      fontSize: medium,
      color: white,
    },
    mediumText: {
      fontFamily: bold,
      fontSize: medium,
      color: white,
    },
    regularText: {
      fontFamily: regular,
      fontSize: 13,
      color: white,
    },
    bioText: {
      fontFamily: regular,
      fontSize: small,
      color: "gray",
    },
    bioContainer: {
      flexDirection: "column",
      gap: 5,
    },
    bioRow: {
      flexDirection: "row",
      alignItems: "flex-end",
    },
    linkContainer: {
      backgroundColor: darkGray,
      paddingVertical: 5,
      paddingHorizontal: 10,
      borderRadius: 5,
    },
    readMoreText: {
      fontFamily: regular,
      fontSize: small,
      color: primary,
    },
  });