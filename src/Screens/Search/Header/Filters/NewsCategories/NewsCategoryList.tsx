import {
  FlatList,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";

import { large, white } from "~/src/Theme/Apptheme";
import { medium } from "~/src/Utils/Constants";
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
  const { headertext, container, row } = styles;
  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
  };
  const { width } = useWindowDimensions();
  return (
    <View style={container}>
      <Text
        style={[
          headertext,
          {
            marginLeft: width < 600 ? 10 : 0,
            textAlign: width < 600 ? "left" : "center",
          },
        ]}
      >
        News Categories
      </Text>
      {width < 600 ? (
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
      ) : (
        <View style={row}>
          {newsCategories.map((category) => (
            <Category
              key={category}
              category={category}
              selectedCategory={selectedCategory}
              onPressFunc={() => handleSelectCategory(category)}
            />
          ))}
        </View>
      )}
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
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
