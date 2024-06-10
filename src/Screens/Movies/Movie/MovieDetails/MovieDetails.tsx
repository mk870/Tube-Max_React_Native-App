import { ScrollView, Text, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

import Reviews from "../../../Shared/Reviews/Reviews";
import Details from "./Details/Details";
import ContentImage from "../../../Shared/ContentImage/ContentImage";
import VerticalSwipeable from "~/src/Components/Swipeables/Vertical/VerticalSwipeable";
import { IMovieCast } from "~/src/Types/Apis/Movies/MovieCast";
import { IMovieRecommendations } from "~/src/Types/Apis/Movies/MovieRecommandations";
import { IMovieReview } from "~/src/Types/Apis/Movies/MovieReviews";
import { IMovie } from "~/src/Types/Apis/Movies/SingleMovie";
import { styles } from "./styles";
import Swipeable from "~/src/Components/Swipeables/Horizontal/Swipeable";

type Props = {
  movie: IMovie;
  cast: IMovieCast;
  recommandations: IMovieRecommendations[];
  reviews: IMovieReview[];
};

const MovieDetails: React.FC<Props> = ({
  movie: { poster_path },
  movie,
  cast: { cast, crew },
  recommandations,
  reviews,
}) => {
  const route = useRouter();
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <ContentImage source="tmdb" imagePath={poster_path} />
      <Details movie={movie} />
      <View style={styles.castNcrewContainer}>
        <Swipeable
          type="movieCast"
          content={cast ? cast : []}
          headerTitle="Cast"
          seeAllRouteFunc={() =>
            route.push({
              pathname: "movie/actors/actors",
              params: { movieId: movie.id, name: movie.title },
            })
          }
        />
        <Swipeable
          type="movieCrew"
          content={crew ? crew : []}
          headerTitle="Crew"
          seeAllRouteFunc={() =>
            route.push({
              pathname: "movie/actors/crew",
              params: { movieId: movie.id, name: movie.title },
            })
          }
        />
      </View>
      {reviews.length > 0 && <Reviews type="movie" content={reviews} />}
      {recommandations.length > 0 && (
        <View style={styles.recommsContainer}>
          <Text style={styles.recommsText}>Movie Recommendations</Text>
          <VerticalSwipeable type="movieRecomms" content={recommandations} />
        </View>
      )}
    </ScrollView>
  );
};

export default MovieDetails;
