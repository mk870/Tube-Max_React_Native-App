import { StyleSheet, View } from "react-native";
import React, { useState } from "react";

import HttpError from "~/src/Components/HttpError/HttpError";
import ScreenSpinner from "~/src/Components/Spinner/ScreenSpinner";
import VerticalSwipeable from "~/src/Components/Swipeables/Vertical/VerticalSwipeable";
import useFetchNews from "~/src/Hooks/News/useFetchNews";
import { INewsCategory } from "~/src/Types/Shared/Types";
import Categories from "../Categories/Categories";

const NewsDetails = () => {
  const [category, setCategory] = useState<INewsCategory>("entertainment");
  const { data, error, isLoading } = useFetchNews(category);
  return (
    <View style={styles.container}>
      <Categories category={category} setCategory={setCategory} />
      <View style={styles.subContainer}>
        {isLoading && <ScreenSpinner />}
        {error && <HttpError />}
        {data.length > 1 && (
          <VerticalSwipeable
            type="news"
            content={data}
            newsCategory={category}
          />
        )}
      </View>
    </View>
  );
};

export default NewsDetails;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 5,
  },
  subContainer: {
    flexDirection: "column",
    gap: 5,
    flex: 1,
  },
});
