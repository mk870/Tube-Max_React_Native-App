import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

import { IVoidFunc } from "~/src/Types/Shared/Types";
import { regular } from "~/src/Utils/Constants";
import { darkGray, primary, small, white } from "~/src/Theme/Apptheme";

type Props = {
  category: string;
  selectedCategory: string;
  onPressFunc: IVoidFunc;
};

const Category: React.FC<Props> = ({
  category,
  onPressFunc,
  selectedCategory,
}) => {
  const { container, text } = styles;
  return (
    <TouchableOpacity
      style={[
        container,
        { backgroundColor: selectedCategory === category ? primary : darkGray },
      ]}
      onPress={onPressFunc}
    >
      <Text
        style={[
          text,
          { color: selectedCategory === category ? white : "gray" },
        ]}
      >
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </Text>
    </TouchableOpacity>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 7,
    paddingHorizontal: 5,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 5,
    gap: 5,
  },
  text: {
    fontFamily: regular,
    fontSize: small,
  },
});
