import { ScrollView, StyleSheet } from "react-native";
import React from "react";

import { IEpisode } from "~/Types/Apis/TvShows/Episode";
import ContentImage from "../../Shared/ContentImage/ContentImage";
import Details from "./Details/Details";
import Swipeable from "~/Components/Swipeables/Horizontal/Swipeable";

type Props = {
  episode: IEpisode;
};

const EpisodeDetails: React.FC<Props> = ({ episode }) => {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <ContentImage source="tmdb" imagePath={episode.still_path} />
      <Details episode={episode} />
      {episode.crew && episode.crew.length > 0 && (
        <Swipeable headerTitle="Crew" type="tvCrew" content={episode.crew} />
      )}
      {episode.guest_stars && episode.guest_stars.length > 0 && (
        <Swipeable
          headerTitle="Guest Stars"
          type="guestStars"
          content={episode.guest_stars}
        />
      )}
    </ScrollView>
  );
};

export default EpisodeDetails;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 5,
  },
  episodesContainer: {
    flexDirection: "column",
    padding: 10,
    gap: 10,
  },
});
