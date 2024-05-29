import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

import { IShow } from "~/Types/Apis/TvShows/Show";
import { IShowRecommendation } from "~/Types/Apis/TvShows/ShowRecommendation";
import { IShowReview } from "~/Types/Apis/TvShows/ShowReviews";
import { appTheme, white } from "~/Theme/Apptheme";
import { medium } from "~/Utils/Constants";
import VerticalSwipeable from "~/Components/Swipeables/Vertical/VerticalSwipeable";
import Reviews from "../Shared/Reviews/Reviews";
import Swipeable from "~/Components/Swipeables/Horizontal/Swipeable";
import ShowDetails from "./Details/ShowDetails";
import ContentImage from "../Shared/ContentImage/ContentImage";

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
          <ContentImage imagePath={show.poster_path} source="tmdb"/>
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
            headerTitle="Seasons"
          />
          {reviews.length > 0 && <Reviews type="tvShow" content={reviews} />}
          <View style={styles.recommsContainer}>
            <Text style={styles.recommsText}>Show Recommendations</Text>
            <VerticalSwipeable type="showRecomms" content={recommendations} />
          </View>
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
