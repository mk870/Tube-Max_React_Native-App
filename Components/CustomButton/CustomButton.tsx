import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { appTheme } from "../../Theme/Apptheme";
import { bold, medium } from "../../Utils/Constants";
import ButtonSpinner from "../Spinner/ButtonSpinner";

type Props = {
  onPressFunc: () => void;
  title: string;
  width?: number;
  height?: number;
  color?: string;
  borderRadius?: number;
  isDisabled?: boolean;
};

const CustomButton: React.FC<Props> = ({
  onPressFunc,
  title,
  width,
  color,
  isDisabled,
  height,
  borderRadius,
}) => {
  const { container, textStyles } = styles;
  return (
    <TouchableOpacity
      onPress={onPressFunc}
      disabled={isDisabled ? isDisabled : false}
      style={[
        container,
        {
          width: width ? width : "100%",
          height: height ? height : 50,
          backgroundColor: color ? color : appTheme.colors.lightPrimary,
          borderRadius: borderRadius ? borderRadius : 10,
        },
      ]}
    >
      {title === "loading" ? (
        <ButtonSpinner />
      ) : (
        <Text style={textStyles}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  textStyles: {
    color: appTheme.colors.white,
    fontFamily: bold,
    fontSize: appTheme.font.medium,
  },
});
