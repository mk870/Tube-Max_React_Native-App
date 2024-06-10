import { ScrollView, StyleSheet } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

import Swipeable from "~/src/Components/Swipeables/Horizontal/Swipeable";
import HttpError from "~/src/Components/HttpError/HttpError";
import ScreenSpinner from "~/src/Components/Spinner/ScreenSpinner";
import ScreenWrapper from "~/src/HOCs/ScreenWrapper";
import useFetchPopularShows from "~/src/Hooks/TvShows/useFetchPopularShows";
import useFetchShowsOnAir from "~/src/Hooks/TvShows/useFetchShowsOnAir";
import useFetchTopRatedShows from "~/src/Hooks/TvShows/useFetchTopRatedShows";

const TvShows = () => {
  const showsOnAir = useFetchShowsOnAir();
  const popularShows = useFetchPopularShows();
  const topRatedShows = useFetchTopRatedShows();
  const { container } = styles;
  const hasError = () => {
    if (showsOnAir.error || popularShows.error || topRatedShows.error) {
      return true;
    } else return false;
  };
  const isLoading = () => {
    if (
      showsOnAir.isLoading ||
      popularShows.isLoading ||
      topRatedShows.isLoading
    )
      return true;
    else return false;
  };
  const hasDataLoaded = () => {
    if (
      showsOnAir.data.length > 0 &&
      popularShows.data.length > 0 &&
      topRatedShows.data.length > 0
    )
      return true;
    else return false;
  };
  const router = useRouter();
  return (
    <ScrollView
      contentContainerStyle={container}
      showsVerticalScrollIndicator={false}
    >
      {hasError() ? (
        <HttpError />
      ) : (
        <>
          {isLoading() && <ScreenSpinner />}
          {hasDataLoaded() && (
            <ScrollView showsVerticalScrollIndicator={false}>
              <Swipeable
                type="tvShow"
                content={showsOnAir.data}
                headerTitle={"On Air"}
                seeAllRouteFunc={() => router.push("tvshows/onair")}
              />
              <Swipeable
                type="tvShow"
                content={topRatedShows.data}
                headerTitle={"Top Rated"}
                seeAllRouteFunc={() => router.push("tvshows/toprated")}
              />
              <Swipeable
                type="tvShow"
                content={popularShows.data}
                headerTitle={"Most Popular"}
                seeAllRouteFunc={() => router.push("tvshows/popular")}
              />
            </ScrollView>
          )}
        </>
      )}
    </ScrollView>
  );
};

export default ScreenWrapper(TvShows);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 10,
  },
});
