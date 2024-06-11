import { StyleSheet, Text } from "react-native";
import React from "react";

import { appTheme } from "~/src/Theme/Apptheme";
import { bold, regular } from "~/src/Utils/Constants";

type Props = {
  focused: boolean;
  textItem: string;
};

const Label: React.FC<Props> = ({ focused, textItem }) => {
  return (
    <Text
      style={{
        fontFamily: focused ? bold : regular,
        fontSize: 13,
        color: appTheme.colors.white,
      }}
    >
      {textItem}
    </Text>
  );
};

export default Label;

const styles = StyleSheet.create({});
