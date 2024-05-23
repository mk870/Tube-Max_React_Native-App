import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { IVoidFunc } from "~/Types/Shared/Types";
import { darkGray, white } from "~/Theme/Apptheme";
import { sharedStyles } from "../Styles/styles";

type Props = {
  title: string;
  type: "play" | "add";
  onPressFunc: IVoidFunc;
};

const ContentButton: React.FC<Props> = ({ title, type, onPressFunc }) => {
  const iconSize = 22;
  return (
    <TouchableOpacity
      onPress={onPressFunc}
      style={[styles.container, { width: type === "add" ? 150 : 90 }]}
    >
      {type === "add" ? (
        <AntDesign name="plus" size={iconSize} color={white} />
      ) : (
        <Ionicons name="play-outline" size={iconSize} color={white} />
      )}
      <Text style={sharedStyles.regularText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ContentButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingVertical: 8,
    paddingHorizontal: 5,
    backgroundColor: darkGray,
    borderRadius: 5,
  },
});
