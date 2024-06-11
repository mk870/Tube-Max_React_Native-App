import {
  ScrollView,
} from "react-native";
import React from "react";

import Details from "./Details/Details";
import Swipeable from "~/src/Components/Swipeables/Horizontal/Swipeable";
import ContentImage from "../ContentImage/ContentImage";
import { IMovieSummary } from "~/src/Types/Apis/Movies/SummaryMovieInfo";
import { IShowSummary } from "~/src/Types/Apis/TvShows/ShowSummary";
import { IActorProfile } from "~/src/Types/Shared/Types";

type Props = {
  actor: IActorProfile | null;
  movies: IMovieSummary[];
  shows: IShowSummary[];
};

const ActorDetails: React.FC<Props> = ({ actor, movies, shows }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {actor && (
        <>
          <ContentImage imagePath={actor.profile_path} source="tmdb"/>
          <Details actor={actor} />
          <Swipeable
            content={movies}
            type="movie"
            headerTitle="Featured Movies"
          />
          <Swipeable
            content={shows}
            type="tvShow"
            headerTitle="Featured Shows"
          />
        </>
      )}
    </ScrollView>
  );
};

export default ActorDetails;

