import { StyleSheet } from "react-native";
import { appTheme, primary, white } from "~/Theme/Apptheme";
import { medium } from "~/Utils/Constants";

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
    backgroundColor: "rgba(26, 24, 29, 0.4)",
    flex: 1,
    borderRadius: 15,
    position: "relative",
  },
  detailsContainer: {
    position: "absolute",
    bottom: 10,
    marginHorizontal: 10,
    gap:10
  },
  details: {
    flexDirection: "column",
    gap: 5,
  },
  detailsTwo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    width:"100%"
  },
  subDetails: {
    display:"flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    gap:10,
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
    textAlign:"center",
    alignSelf:"center"
  },
  addMovieContainer:{
    backgroundColor:"#575958",
    height:30,
    width:30,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:30
  },
  btn:{
    backgroundColor:primary,
    height:30,
    borderRadius:5,
    width:70,
    alignItems:"center",
    justifyContent:"center"
  }
});
