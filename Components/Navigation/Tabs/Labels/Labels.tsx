import { StyleSheet, Text, useWindowDimensions } from "react-native";
import React from "react";
import { bold, regular } from "../../../../Utils/Constants";
import { appTheme } from "../../../../Theme/Apptheme";

type Props = {
  focused: boolean;
  textItem: string;
};

const Label: React.FC<Props> = ({ focused, textItem }) => {
  const size = useWindowDimensions();
  const width = size.width;
  const margin = () => {
    if (width > 828) return -18;
    else if (width > 735) return -10;
    else return 0;
  };
  const marginBottom = () => {
    if (width > 828) return 0;
    else if (width > 745) return 15;
    else return 0;
  };
  return (
    <Text
      style={{
        fontFamily: focused ? bold : regular,
        fontSize: 13,
        marginTop: margin(),
        marginBottom: marginBottom(),
        color: appTheme.colors.white,
      }}
    >
      {textItem}
    </Text>
  );
};

export default Label;

const styles = StyleSheet.create({});
