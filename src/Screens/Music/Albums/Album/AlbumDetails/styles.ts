import { StyleSheet } from "react-native";

import { medium } from "~/src/Utils/Constants";
import { large, white } from "~/src/Theme/Apptheme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 5,
  },
  subContainer: {
    gap: 5,
    marginVertical: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  headertext: {
    fontFamily: medium,
    fontSize: large,
    color: white,
  },
});
