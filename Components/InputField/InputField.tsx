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

type Props = {
  width: DimensionValue;
  height: DimensionValue;
  placeHolder: string;
  handleOnChangeText: (text: string) => void;
  textValue: string;
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
      borderRadius:5,
      borderColor:"white",
      color:"white",
      borderWidth:1
    },
  });
