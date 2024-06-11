import { FlatList, StyleSheet, View } from "react-native";
import React from "react";

import Category from "./Category/Category";
import { INewsCategory } from "~/src/Types/Shared/Types";
import {
  entertainmentNewsCategory,
  moviesNewsCategory,
  tvShowsNewsCategory,
  artistsNewsCategory,
  songsNewsCategory,
  albumsNewsCategory,
  actorsNewsCategory,
} from "~/src/Utils/Constants";

type Props = {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<INewsCategory>>;
};

const Categories: React.FC<Props> = ({ setCategory, category }) => {
  const newsCategories: INewsCategory[] = [
    entertainmentNewsCategory,
    moviesNewsCategory,
    tvShowsNewsCategory,
    artistsNewsCategory,
    songsNewsCategory,
    albumsNewsCategory,
    actorsNewsCategory,
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={newsCategories}
        renderItem={({ item }) => (
          <Category
            setCategory={setCategory}
            category={item}
            selectedCategory={category}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
});
