import { View } from "react-native";
import React from "react";

import HttpError from "~/src/Components/HttpError/HttpError";
import ScreenSpinner from "~/src/Components/Spinner/ScreenSpinner";
import VerticalSwipeable from "~/src/Components/Swipeables/Vertical/VerticalSwipeable";
import ScreenWrapper from "~/src/HOCs/ScreenWrapper";
import useFetchMoreMovies from "~/src/Hooks/Movies/useFetchMoreMovies";
import { IReactNoPropElement } from "~/src/Types/ReactComonents/Types";

const Popular: IReactNoPropElement = () => {
  const { data, error, isLoading } = useFetchMoreMovies("popular");
  return (
    <View style={{ alignItems: "center", flex: 1 }}>
      {isLoading && <ScreenSpinner />}
      {error && <HttpError />}
      {data && <VerticalSwipeable type="movie" content={data} />}
    </View>
  );
};

export default ScreenWrapper(Popular);
