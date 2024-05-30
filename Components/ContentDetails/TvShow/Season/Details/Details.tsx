import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import React from "react";
import { AntDesign, Feather, FontAwesome } from "@expo/vector-icons";

import { ISeason } from "~/Types/Apis/TvShows/Season";
import { appTheme, medium, primary, small, white } from "~/Theme/Apptheme";
import { bold, notAvailable, regular } from "~/Utils/Constants";
import { getYear } from "~/Utils/Funcs";

type Props = {
  season: ISeason;
};

const Details: React.FC<Props> = ({
  season,
  season: { name, air_date, vote_average, overview },
}) => {
  const iconSize = 22;
  const episodeRunTime = () => {
    if (season.episodes && season.episodes.length > 0)
      return `${season.episodes[0].runtime} mins`;
    else return notAvailable;
  };
  const { width } = useWindowDimensions();
  const screenBreakPoint = 500;
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{name}</Text>
      <View style={styles.row}>
        <View style={styles.smallRow}>
          <AntDesign name="calendar" size={iconSize} color={white} />
          <Text style={styles.regularText}>
            {air_date ? getYear(air_date) : "date unkown"}
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
              {season.episodes
                ? season.episodes.length > 1
                  ? `${season.episodes.length} Episodes`
                  : `${season.episodes.length} Episode`
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
            {season.episodes
              ? season.episodes.length > 1
                ? `${season.episodes.length} Episodes`
                : `${season.episodes.length} Episode`
              : notAvailable}
          </Text>
        </View>
      )}
      {overview && (
        <Text style={[styles.regularText, { textAlign: "left" }]}>
          {overview}
        </Text>
      )}
    </View>
  );
};

export default Details;

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
