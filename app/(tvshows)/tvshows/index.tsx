import { ScrollView, StyleSheet } from "react-native";
import React from "react";
import ScreenWrapper from "../../../HOCs/ScreenWrapper";
import useFetchPopularShows from "~/Hooks/TvShows/useFetchPopularShows";
import useFetchTopRatedShows from "~/Hooks/TvShows/useFetchTopRatedShows";
import useFetchShowsOnAir from "~/Hooks/TvShows/useFetchShowsOnAir";
import { useRouter } from "expo-router";
import HttpError from "~/Components/HttpError/HttpError";
import ScreenSpinner from "~/Components/Spinner/ScreenSpinner";
import Swipeable from "~/Components/Swipeables/Horizontal/Swipeable";

const tv = () => {
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

export default ScreenWrapper(tv);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 10,
  },
});
