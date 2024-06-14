import { StyleSheet } from "react-native";
import { appTheme, darkGray } from "~/src/Theme/Apptheme";
import { bold, medium, regular } from "~/src/Utils/Constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 70,
  },
  text: {
    fontFamily: bold,
    fontSize: appTheme.font.large,
    color: appTheme.colors.white,
    marginBottom: 10,
  },
  inputWrapper: {
    alignItems: "flex-start",
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 15,
    gap: 12,
    backgroundColor: appTheme.colors.background,
    borderRadius: 10,
  },
  errorContainer: {
    width: "100%",
    justifyContent: "center",
    flexDirection: "column",
    marginTop: -5,
  },
  guidelineHeaderText: {
    color: appTheme.colors.red,
    fontFamily: medium,
    fontSize: appTheme.font.medium,
    marginBottom: 5,
  },
  errorText: {
    color: appTheme.colors.red,
    fontFamily: regular,
    fontSize: appTheme.font.small,
  },
  registerContainer: {
    alignSelf: "flex-start",
    justifyContent: "center",
    flexDirection: "column",
    marginBottom: 20,
  },
  registerText: {
    color: appTheme.colors.white,
    fontFamily: regular,
    fontSize: appTheme.font.small,
  },
  linkContainer: {
    paddingVertical: 5,
    borderRadius: 5,
  },
  registerLink: {
    color: appTheme.colors.primary,
    fontFamily: medium,
    fontSize: appTheme.font.small,
    textDecorationLine: "underline",
  },
  btnWrapper: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
});
