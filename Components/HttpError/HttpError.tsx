import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { medium } from "~/Utils/Constants";
import { appTheme, white } from "~/Theme/Apptheme";

const HttpError = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("assets/images/error.png")}
        style={styles.imageStyles}
      />
      <Text style={styles.textStyles}>
        Oops Something went wrong, please refresh page!!!
      </Text>
    </View>
  );
};

export default HttpError;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:"center",
    justifyContent:"center",
    alignContent:"center",
    alignSelf:"center",
  },
  textStyles: {
    fontFamily: medium,
    fontSize: appTheme.font.small,
    color: white,
    textAlign:"center"
  },
  imageStyles: {
    height: 250,
    width: 180,
  },
});
