import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

import { medium } from "~/src/Utils/Constants";
import { appTheme, darkGray, primary, white } from "~/src/Theme/Apptheme";

const HttpError = () => {
  const router = useRouter()
  return (
    <View style={styles.container}>
      <Image
        source={require("assets/images/error.png")}
        style={styles.imageStyles}
      />
      <Text style={[styles.textStyles,{color:white}]}>
        Oops Something went wrong, please refresh page!!!
      </Text>
      <Pressable style={styles.pressableStyles} onPress={()=>router.back()}>
        <Text style={[styles.textStyles,{color:primary}]}>Go Back</Text>
      </Pressable>
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
    textAlign:"center"
  },
  imageStyles: {
    height: 250,
    width: 180,
  },
  pressableStyles:{
    marginTop: 10,
    width:90,
    height:40,
    backgroundColor:darkGray,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:5
  }
});
