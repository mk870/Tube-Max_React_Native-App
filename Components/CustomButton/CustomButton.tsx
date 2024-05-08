import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { appTheme } from "../../Theme/Apptheme";
import { bold, medium } from "../../Utils/Constants";

type Props = {
  onPressFunc: () => void;
  title: string;
  width?: number;
  color?: string;
};

const CustomButton: React.FC<Props> = ({
  onPressFunc,
  title,
  width,
  color,
}) => {
  const { container, textStyles } = styles;
  return (
    <TouchableOpacity
      onPress={onPressFunc}
      style={[
        container,
        {
          width: width ? width : "100%",
          backgroundColor: color ? color : appTheme.colors.primary,
        },
      ]}
    >
      <Text style={textStyles}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    height: 50,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:20
  },
  textStyles: {
    color: appTheme.colors.white,
    fontFamily:bold,
    fontSize:appTheme.font.medium
  },
});
