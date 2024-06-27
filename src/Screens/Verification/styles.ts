import { StyleSheet } from "react-native";
import {
  background,
  appTheme,
  white,
  lightPrimary,
} from "~/src/Theme/Apptheme";
import { bold, regular } from "~/src/Utils/Constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
  },
  inputWrapper: {
    alignItems: "flex-start",
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 15,
    gap: 12,
    backgroundColor: background,
    borderRadius: 10,
    marginTop: 30,
  },
  title: {
    fontFamily: bold,
    fontSize: appTheme.font.large,
    color: appTheme.colors.white,
    marginBottom: 10,
  },
  resendCodeText: {
    color: white,
    fontFamily: regular,
    fontSize: appTheme.font.small,
  },
  errorText: {
    color: appTheme.colors.red,
    fontFamily: regular,
    fontSize: appTheme.font.small,
    marginTop: -5,
  },
  linkContainer: {
    backgroundColor: lightPrimary,
    paddingVertical: 8,
    width: 90,
    borderRadius: 5,
    alignItems:"center",
    justifyContent:"center"
  },
});
