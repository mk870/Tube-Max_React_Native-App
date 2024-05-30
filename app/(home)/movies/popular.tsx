import { ScrollView, View } from "react-native";
import React from "react";
import HttpError from "~/Components/HttpError/HttpError";
import VerticalSwipeable from "~/Components/Swipeables/Vertical/VerticalSwipeable";
import useFetchMoreMovies from "~/Hooks/Movies/useFetchMoreMovies";
import ScreenWrapper from "~/HOCs/ScreenWrapper";
import ScreenSpinner from "~/Components/Spinner/ScreenSpinner";

const popular = () => {
  const { data, error, isLoading } = useFetchMoreMovies("popular");
  return (
    <View style={{ alignItems: "center",flex:1 }}>
      {isLoading && <ScreenSpinner />}
      {error && <HttpError />}
      {data && <VerticalSwipeable type="movie" content={data} />}
    </View>
  );
};

export default ScreenWrapper(popular);
