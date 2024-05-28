import { ScrollView, StyleSheet } from "react-native";
import React from "react";
import ScreenWrapper from "~/HOCs/ScreenWrapper";
import useFetchMoreMovies from "~/Hooks/Movies/useFetchMoreMovies";
import HttpError from "~/Components/HttpError/HttpError";
import VerticalSwipeable from "~/Components/Swipeables/Vertical/VerticalSwipeable";
import ScreenSpinner from "~/Components/Spinner/ScreenSpinner";

const inTheatres = () => {
  const { data, error, isLoading } = useFetchMoreMovies("now_playing");
  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      {isLoading && <ScreenSpinner />}
      {error && <HttpError />}
      {data && <VerticalSwipeable type="movie" content={data} />}
    </ScrollView>
  );
};

export default ScreenWrapper(inTheatres);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
