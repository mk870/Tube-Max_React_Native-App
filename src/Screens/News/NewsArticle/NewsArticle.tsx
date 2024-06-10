import { ScrollView, StyleSheet} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";

import ScreenWrapper from "~/src/HOCs/ScreenWrapper";
import { useAppSelector } from "~/src/Redux/Hooks/Hooks";
import ContentImage from "../../Shared/ContentImage/ContentImage";
import Article from "./Article/Article";

const NewsArticle = () => {
  const { id, category } = useLocalSearchParams();
  const processedId = id ? (Array.isArray(id) ? 0 : Number(id)) : 0;
  const processedCategory = category
    ? Array.isArray(category)
      ? "entertainment"
      : category
    : "entertainment";
  const actorNews = useAppSelector((state) => state.actorsNews.value);
  const songNews = useAppSelector((state) => state.songsNews.value);
  const artistsNews = useAppSelector((state) => state.artistsNews.value);
  const entertainmentNews = useAppSelector(
    (state) => state.entertainmentNews.value
  );
  const tvShowNews = useAppSelector((state) => state.tvShowsNews.value);
  const movieNews = useAppSelector((state) => state.moviesNews.value);
  const albumNews = useAppSelector((state) => state.albumsNews.value);
  const getArticle = () => {
    if (processedCategory === "musicians") {
      return artistsNews.filter((article) => article.id === processedId)[0];
    } else if (processedCategory === "movies") {
      return movieNews.filter((article) => article.id === processedId)[0];
    } else if (processedCategory === "tv shows") {
      return tvShowNews.filter((article) => article.id === processedId)[0];
    } else if (processedCategory === "albums") {
      return albumNews.filter((article) => article.id === processedId)[0];
    } else if (processedCategory === "songs") {
      return songNews.filter((article) => article.id === processedId)[0];
    } else if (processedCategory === "hollywood actors") {
      return actorNews.filter((article) => article.id === processedId)[0];
    } else {
      return entertainmentNews.filter(
        (article) => article.id === processedId
      )[0];
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.subContainer}
        showsVerticalScrollIndicator={false}
      >
        <ContentImage source="news" imagePath={getArticle().urlToImage}/>
        <Article article={getArticle()}/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ScreenWrapper(NewsArticle);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  subContainer: {
    flexDirection: "column",
    gap: 10,
  },
});
