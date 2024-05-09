import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { appTheme } from "../../Theme/Apptheme";
import { bold, medium } from "../../Utils/Constants";
import ButtonSpinner from "../Spinner/ButtonSpinner";

type Props = {
  onPressFunc: () => void;
  title: string;
  width?: number;
  color?: string;
  isDisabled?: boolean;
};

const CustomButton: React.FC<Props> = ({
  onPressFunc,
  title,
  width,
  color,
  isDisabled,
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
          backgroundColor: color ? color : appTheme.colors.lightPrimary,
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
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  textStyles: {
    color: appTheme.colors.white,
    fontFamily: bold,
    fontSize: appTheme.font.medium,
  },
});
