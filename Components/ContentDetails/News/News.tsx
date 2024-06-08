import { StyleSheet, View } from "react-native";
import React, { useState } from "react";

import { INewsCategory } from "~/Types/Shared/Types";
import Categories from "./Categories/Categories";
import useFetchNews from "~/Hooks/News/useFetchNews";
import ScreenSpinner from "~/Components/Spinner/ScreenSpinner";
import HttpError from "~/Components/HttpError/HttpError";
import VerticalSwipeable from "~/Components/Swipeables/Vertical/VerticalSwipeable";

const News = () => {
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

export default News;

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
