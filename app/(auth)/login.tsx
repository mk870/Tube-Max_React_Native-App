import { StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from "react-native";
import React, { useState } from "react";
import ScreenWrapper from "../../HOCs/ScreenWrapper";
import { useRouter } from "expo-router";
import InputField from "../../Components/InputField/InputField";
import { appTheme } from "../../Theme/Apptheme";
import CustomButton from "../../Components/CustomButton/CustomButton";

type Props = {};

const login = (props: Props) => {
  const {width} = useWindowDimensions()
  const [userDetails, setUserDetails] = useState<{
    email: undefined | string;
    passWord: undefined | string;
  }>({
    email: undefined,
    passWord: undefined,
  });
  const router = useRouter();
  const { container,inputWrapper } = styles;
  return (
    <View style={container}>
      <View style={inputWrapper}>
      <InputField
        textValue={userDetails.email}
        placeHolder="email"
        width={"100%"}
        handleOnChangeText={(e) => setUserDetails({ ...userDetails, email: e })}
        height={50}
      />
      <InputField
        textValue={userDetails.passWord}
        placeHolder="password"
        width={"100%"}
        handleOnChangeText={(e) => setUserDetails({ ...userDetails, passWord: e })}
        height={50}
      />
      <CustomButton title="login" onPressFunc={()=>console.log(userDetails)}/>
      </View>
    </View>
  );
};

export default ScreenWrapper(login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:"center",
    justifyContent:"center"
  },
  inputWrapper:{
    alignItems: "flex-start",
    justifyContent:"center",
    padding:10,
    borderColor:"red",
    borderWidth:1,
    width:"95%",
    gap:20
  }
});
