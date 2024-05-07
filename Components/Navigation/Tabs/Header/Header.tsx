import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

import { appTheme } from "../../../../Theme/Apptheme";
import { bold } from "../../../../Utils/Constants";
import InputField from "../../../InputField/InputField";
import { StatusBar } from "expo-status-bar";



const Header:React.FC = () => {
  const { container, title, iconContainer, icon,secondaryContainer } = styles;
  const [textValue, setTextValue] = useState("");
  return (
      <TouchableOpacity style={iconContainer}>
        <Ionicons
          name="person"
          size={20}
          color={appTheme.colors.white}
          style={icon}
        />
      </TouchableOpacity>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 120,
    backgroundColor: appTheme.colors.background,
    padding: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap:10
  },
  secondaryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap:10
  },
  title: {
    color: appTheme.colors.white,
    fontFamily: bold,
    fontSize: appTheme.font.large,
  },
  iconContainer: {
    width: 35,
    height: 35,
    backgroundColor: appTheme.colors.secondary,
    borderRadius: 10,
    alignContent: "center",
    justifyContent: "center",
    display: "flex",
  },
  icon: {
    alignSelf: "center",
  },
});
