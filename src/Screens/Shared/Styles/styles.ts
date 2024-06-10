import { StyleSheet } from "react-native";
import { small, white } from "~/Theme/Apptheme";
import { regular } from "~/Utils/Constants";

export const sharedStyles = StyleSheet.create({
  regularText: {
    fontFamily: regular,
    fontSize: small,
    color: white,
  },
});
