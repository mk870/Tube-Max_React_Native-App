import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { large, white } from "~/Theme/Apptheme";
import { medium } from "~/Utils/Constants";
import Category from "./CategoryCard/Category";

type Props = {
  newsCategories: string[];
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  selectedCategory: string;
};
const NewsCategoryList: React.FC<Props> = ({
  newsCategories,
  selectedCategory,
  setSelectedCategory,
}) => {
  const { headertext, container } = styles;

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
  };
  return (
    <View style={container}>
      <Text style={headertext}>News Categories</Text>
      <FlatList
        data={newsCategories}
        renderItem={({ item }) => (
          <Category
            category={item}
            onPressFunc={() => handleSelectCategory(item)}
            selectedCategory={selectedCategory}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default NewsCategoryList;

const styles = StyleSheet.create({
  container: {
    gap: 5,
  },
  headertext: {
    fontFamily: medium,
    fontSize: large,
    color: white,
    marginLeft: 10,
  },
});
