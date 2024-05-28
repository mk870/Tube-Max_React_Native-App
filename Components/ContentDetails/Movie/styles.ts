import { StyleSheet } from "react-native";
import { appTheme, white } from "~/Theme/Apptheme";
import { medium, regular } from "~/Utils/Constants";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap:5
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  poster: {
    position: "relative",
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
  castNcrewContainer:{
    marginLeft:5,
    marginTop:15
  },
  recommsContainer:{
    flexDirection:"column",
    marginTop:15
  },
  recommsText: {
    fontFamily: medium,
    fontSize: appTheme.font.large,
    color: white,
    marginLeft:15
  },
});
