import { ScrollView, StyleSheet } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import ScreenWrapper from "~/HOCs/ScreenWrapper";
import useFetchShowById from "~/Hooks/TvShows/useFetchShowById";
import useFetchShowRecommendations from "~/Hooks/TvShows/useFetchShowRecommendations";
import useFetchShowReviews from "~/Hooks/TvShows/useFetchShowReviews";
import HttpError from "~/Components/HttpError/HttpError";
import ScreenSpinner from "~/Components/Spinner/ScreenSpinner";
import TvShowDetails from "~/Components/ContentDetails/TvShow/TvShowDetails";

const TvShow = () => {
  const { id } = useLocalSearchParams();
  const show = useFetchShowById(id ? +id : 0);
  const showRecomms = useFetchShowRecommendations(id ? +id : 0);
  const showReviews = useFetchShowReviews(id ? +id : 0);
  const hasError = () => {
    if (show.error || showRecomms.error || showReviews.error) return true;
    else return false;
  };
  const isLoading = () => {
    if (show.isLoading || showRecomms.isLoading || showReviews.isLoading)
      return true;
    else return false;
  };
  const hasLoadedData = () => {
    if (show.show && showRecomms.recommendations && showReviews.reviews)
      return true;
    else return false;
  };
  const { container, subContainer } = styles;
  return (
    <SafeAreaView style={container}>
      <ScrollView contentContainerStyle={subContainer}>
        {isLoading() && <ScreenSpinner />}
        {hasError() && <HttpError />}
        {hasLoadedData() && (
          <TvShowDetails
            show={show.show}
            recommendations={
              showRecomms.recommendations ? showRecomms.recommendations : []
            }
            reviews={showReviews.reviews}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ScreenWrapper(TvShow);

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    flexDirection: "column",
    flex: 1,
  },
  subContainer: {
    flex: 1,
  },
});
