import { StyleSheet } from "react-native";

import { small, white } from "~/src/Theme/Apptheme";
import { regular } from "~/src/Utils/Constants";

export const sharedStyles = StyleSheet.create({
  regularText: {
    fontFamily: regular,
    fontSize: small,
    color: white,
  },
});
