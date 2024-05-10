import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Feather, AntDesign } from "@expo/vector-icons";
import { IGenre } from "~/Types/Redux/Types";
import { darkGray, primary, small, white } from "~/Theme/Apptheme";
import { regular } from "~/Utils/Constants";

type Props = {
  genre: IGenre;
  onPressFunc:()=>void
};

const Genre: React.FC<Props> = ({ onPressFunc,genre: { id, selected, name } }) => {
  const iconSize = 18;
  const iconColor = selected? white:"gray";
  const { container, text } = styles;
  return (
    <TouchableOpacity
      style={[container, { backgroundColor: selected ? primary : darkGray }]}
      onPress={onPressFunc}
    >
      <Text style={[text, { color: selected ? white : "gray" }]}>{name}</Text>
      {selected ? (
        <Feather name="check" color={iconColor} size={iconSize} />
      ) : (
        <AntDesign name="plus" color={iconColor} size={iconSize} />
      )}
    </TouchableOpacity>
  );
};

export default Genre;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 7,
    paddingHorizontal: 5,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal:5,
    gap:5
  },
  text: {
    fontFamily: regular,
    fontSize: small,
  },
});
