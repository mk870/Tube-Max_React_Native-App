import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

import { appTheme, white } from "~/src/Theme/Apptheme";
import { medium } from "~/src/Utils/Constants";
import ShowDetails from "./Details/ShowDetails";
import VerticalSwipeable from "~/src/Components/Swipeables/Vertical/VerticalSwipeable";
import ContentImage from "~/src/Screens/Shared/ContentImage/ContentImage";
import Reviews from "~/src/Screens/Shared/Reviews/Reviews";
import { IShow } from "~/src/Types/Apis/TvShows/Show";
import { IShowRecommendation } from "~/src/Types/Apis/TvShows/ShowRecommendation";
import { IShowReview } from "~/src/Types/Apis/TvShows/ShowReviews";
import Swipeable from "~/src/Components/Swipeables/Horizontal/Swipeable";

type Props = {
  show: IShow | null;
  recommendations: IShowRecommendation[];
  reviews: IShowReview[];
};

const TvShowDetails: React.FC<Props> = ({ show, recommendations, reviews }) => {
  const screenBreakpoint = 500;
  return (
    <>
      {show && (
        <ScrollView
          contentContainerStyle={styles.container}
          showsVerticalScrollIndicator={false}
        >
          <ContentImage imagePath={show.poster_path} source="tmdb" />
          <ShowDetails show={show} screenBreakPoint={screenBreakpoint} />
          {show.created_by && show.created_by.length > 0 && (
            <Swipeable
              type="creators"
              content={show.created_by}
              headerTitle="Show Creators"
            />
          )}
          <Swipeable
            type="tvShowSeason"
            content={show.seasons ? show.seasons : []}
            id={show.id}
            showName={show.name ? show.name : ""}
            headerTitle="Seasons"
          />
          {reviews.length > 0 && <Reviews type="tvShow" content={reviews} />}
          {recommendations.length > 0 && (
            <View style={styles.recommsContainer}>
              <Text style={styles.recommsText}>Show Recommendations</Text>
              <VerticalSwipeable type="showRecomms" content={recommendations} />
            </View>
          )}
        </ScrollView>
      )}
    </>
  );
};

export default TvShowDetails;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 5,
  },
  recommsContainer: {
    flexDirection: "column",
    marginTop: 15,
  },
  recommsText: {
    fontFamily: medium,
    fontSize: appTheme.font.large,
    color: white,
    marginLeft: 15,
  },
});
