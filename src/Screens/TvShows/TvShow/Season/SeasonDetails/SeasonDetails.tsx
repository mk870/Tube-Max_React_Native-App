import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";

import Details from "./Details/Details";
import Episode from "../Episode/Episode";
import ContentImage from "~/src/Screens/Shared/ContentImage/ContentImage";
import { ISeason } from "~/src/Types/Apis/TvShows/Season";

type Props = {
  season: ISeason;
  showId: number;
  showName: string;
};

const SeasonDetails: React.FC<Props> = ({
  season: { poster_path, episodes },
  showId,
  season,
  showName,
}) => {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <ContentImage source="tmdb" imagePath={poster_path} />
      <Details season={season} />
      {episodes && episodes.length > 0 && (
        <View style={styles.episodesContainer}>
          {episodes.map((episode) => (
            <Episode
              episode={episode}
              key={episode.id}
              showId={showId}
              showName={showName}
            />
          ))}
        </View>
      )}
    </ScrollView>
  );
};

export default SeasonDetails;

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
