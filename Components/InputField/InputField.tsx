import {
  DimensionValue,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInput,
  TextInputFocusEventData,
  View,
} from "react-native";
import React, { useState } from "react";
import { appTheme } from "../../Theme/Apptheme";

type Props = {
  width: DimensionValue;
  height: DimensionValue;
  placeHolder: string;
  handleOnChangeText: (text: string) => void;
  textValue: string|undefined;
  //contentType:ContentType;
};

const InputField: React.FC<Props> = ({
  width,
  height,
  placeHolder,
  handleOnChangeText,
  textValue,
  //contentType
}) => {
    const[changeColor,setChangeColor] = useState<boolean>(false)
  return (
    <TextInput
      style={styles(width, height).container}
      value={textValue}
      onChangeText={handleOnChangeText}
      placeholder={placeHolder}
      textContentType="none"
      placeholderTextColor={"gray"}
    //   onFocus={(e:NativeSyntheticEvent<TextInputFocusEventData>)=>console.log(e)}
    />
  );
};

export default InputField;

const styles = (width: DimensionValue, height: DimensionValue) =>
  StyleSheet.create({
    container: {
      width: width,
      height: height,
      borderRadius:10,
      backgroundColor: appTheme.colors.background,
      padding:10,
      color: appTheme.colors.white
    },
  });
