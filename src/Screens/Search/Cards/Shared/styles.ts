import { StyleSheet } from "react-native";

import { appTheme, white, small } from "~/src/Theme/Apptheme";
import { medium, regular } from "~/src/Utils/Constants";

export const styles = StyleSheet.create({
    container: {
      flexDirection: "column",
      gap: 5,
    },
    imageStyles: {
      borderRadius: 10,
    },
    titleText: {
      fontFamily: medium,
      fontSize: appTheme.font.medium,
      color: white,
    },
    textStyles: {
      fontFamily: regular,
      fontSize: small,
      color: "gray",
      marginBottom:2
    },
  });