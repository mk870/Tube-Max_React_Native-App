import { StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

import { appTheme } from "../../Theme/Apptheme";

type Props = {
  onPressFunc: () => void;
  iconName: keyof typeof Ionicons.glyphMap;
  iconSize?: number;
};

const HeaderIcon: React.FC<Props> = ({ onPressFunc, iconName, iconSize }) => {
  const { iconContainer, icon } = styles;
  return (
    <TouchableOpacity style={iconContainer} onPress={onPressFunc}>
      <Ionicons
        name={iconName}
        size={iconSize ? iconSize : 20}
        color={appTheme.colors.white}
        style={icon}
      />
    </TouchableOpacity>
  );
};

export default HeaderIcon;

const styles = StyleSheet.create({
  iconContainer: {
    width: 35,
    height: 35,
    borderRadius: 10,
    alignContent: "center",
    justifyContent: "center",
    display: "flex",
  },
  icon: {
    alignSelf: "center",
  },
});
