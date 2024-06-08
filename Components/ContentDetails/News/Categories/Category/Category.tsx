import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { INewsCategory } from "~/Types/Shared/Types";
import { medium } from "~/Utils/Constants";
import { appTheme, primary } from "~/Theme/Apptheme";
import { capitalizeFirstLetter } from "~/Utils/Funcs";

type Props = {
  selectedCategory: string;
  category: INewsCategory;
  setCategory: React.Dispatch<React.SetStateAction<INewsCategory>>;
};

const Category: React.FC<Props> = ({
  setCategory,
  category,
  selectedCategory,
}) => {
  return (
    <View
      onTouchEnd={() => setCategory(category)}
      style={[
        styles.container,
        {
          borderBottomColor: selectedCategory === category ? primary : "none",
          borderWidth: selectedCategory === category ? 1 : 0,
        },
      ]}
    >
      <Text
        style={[
          styles.text,
          { color: selectedCategory === category ? primary : "gray" },
        ]}
      >
        {capitalizeFirstLetter(category)}
      </Text>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 5,
    marginRight: 8,
    marginLeft:3
  },
  text: {
    fontFamily: medium,
    fontSize: appTheme.font.medium,
  },
});
