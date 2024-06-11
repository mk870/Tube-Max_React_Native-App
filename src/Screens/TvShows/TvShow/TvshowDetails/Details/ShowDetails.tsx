import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import React from "react";
import { AntDesign, Feather, FontAwesome } from "@expo/vector-icons";

import { appTheme, medium, primary, small, white } from "~/src/Theme/Apptheme";
import ContentButton from "~/src/Screens/Shared/Buttons/ContentButton";
import { IShow } from "~/src/Types/Apis/TvShows/Show";
import { notAvailable, bold, regular } from "~/src/Utils/Constants";
import { getYear } from "~/src/Utils/Funcs";
import Genres from "~/src/Screens/Movies/Movie/MovieDetails/Genres/Genres";

type Props = {
  show: IShow;
  screenBreakPoint: number;
};

const ShowDetails: React.FC<Props> = ({
  show: {
    name,
    number_of_seasons,
    vote_average,
    episode_run_time,
    first_air_date,
  },
  show,
  screenBreakPoint,
}) => {
  const iconSize = 22;

  const episodeRunTime = () => {
    if (episode_run_time && episode_run_time.length > 0)
      return `${episode_run_time[0]} mins`;
    else return notAvailable;
  };
  const { width } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{name}</Text>
      <View style={styles.row}>
        <View style={styles.smallRow}>
          <AntDesign name="calendar" size={iconSize} color={white} />
          <Text style={styles.regularText}>
            {first_air_date ? getYear(first_air_date) : "date unkown"}
          </Text>
        </View>
        <View style={styles.smallRow}>
          <Feather name="clock" size={iconSize} color={white} />
          <Text style={styles.regularText}>{episodeRunTime()}</Text>
        </View>
        {width > screenBreakPoint && (
          <View style={styles.smallRow}>
            <FontAwesome name="tv" size={iconSize} color={white} />
            <Text style={styles.regularText}>
              {number_of_seasons
                ? number_of_seasons > 1
                  ? `${number_of_seasons} Seasons`
                  : `${number_of_seasons} Season`
                : notAvailable}
            </Text>
          </View>
        )}
        <View style={styles.smallRow}>
          <AntDesign name="star" size={iconSize} color="gold" />
          <Text style={styles.regularText}>
            {vote_average ? `${vote_average.toFixed(2)} (IMDB)` : "no rating"}
          </Text>
        </View>
      </View>
      {width < screenBreakPoint && (
        <View style={styles.smallRow}>
          <FontAwesome name="tv" size={iconSize} color={white} />
          <Text style={styles.regularText}>
            {number_of_seasons
              ? number_of_seasons > 1
                ? `${number_of_seasons} Seasons`
                : `${number_of_seasons} Season`
              : notAvailable}
          </Text>
        </View>
      )}
      <View style={styles.detailsContainer}>
        {show.genres && <Genres list={show.genres} />}
        {show.tagline && (
          <Text style={[styles.regularText, { flex: 1 }]}>{show.tagline}</Text>
        )}
        {show.overview && (
          <Text style={[styles.regularText, { textAlign: "left" }]}>
            {show.overview}
          </Text>
        )}
        <ContentButton
          title="add to favorites"
          onPressFunc={() => console.log("hie")}
          type="add"
        />
      </View>
    </View>
  );
};

export default ShowDetails;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 10,
    paddingHorizontal: 10,
  },
  titleText: {
    fontFamily: bold,
    fontSize: appTheme.font.large,
    color: white,
  },
  row: {
    flexDirection: "row",
    gap: 15,
  },
  smallRow: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  regularText: {
    fontFamily: regular,
    fontSize: small,
    color: "gray",
  },
  headerText: {
    fontFamily: regular,
    fontSize: medium,
    color: white,
  },
  creatorHeaderText: {
    fontFamily: regular,
    fontSize: medium,
    color: primary,
  },
  detailsContainer: {
    flexDirection: "column",
    gap: 10,
  },
});
