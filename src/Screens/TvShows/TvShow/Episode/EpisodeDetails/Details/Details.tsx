import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import React from "react";
import { AntDesign, Feather, FontAwesome } from "@expo/vector-icons";

import { IEpisode } from "~/src/Types/Apis/TvShows/Episode";
import { appTheme, white, small, primary } from "~/src/Theme/Apptheme";
import { bold, regular, notAvailable } from "~/src/Utils/Constants";
import PlayContentButtons from "~/src/Screens/Shared/Buttons/PlayContentButtons/PlayContentButtons";

type Props = {
  episode: IEpisode;
  showName: string;
};

const Details: React.FC<Props> = ({
  episode: {
    name,
    vote_average,
    season_number,
    runtime,
    air_date,
    overview,
    episode_number,
  },
  showName,
}) => {
  const iconSize = 22;
  const ratingsStarList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const iconRatingSize = () => {
    if (width > 600) return 22;
    else if (width > 355) return 17;
    else return 13;
  };
  const iconColor = (rating: number | undefined | null, iconNumber: number) => {
    if (rating) {
      if (rating >= iconNumber) return "gold";
      else return "gray";
    } else return "gray";
  };
  const episodeRunTime = () => {
    if (runtime) return `${runtime} mins`;
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
            {air_date ? air_date : "date unkown"}
          </Text>
        </View>
        <View style={styles.smallRow}>
          <Feather name="clock" size={iconSize} color={white} />
          <Text style={styles.regularText}>{episodeRunTime()}</Text>
        </View>
        {width > 345 && (
          <View style={styles.smallRow}>
            <FontAwesome name="tv" size={iconSize} color={white} />
            <Text style={styles.regularText}>
              {season_number ? `Season ${season_number}` : notAvailable}
            </Text>
          </View>
        )}
      </View>
      {width < 345 && (
        <View style={styles.smallRow}>
          <FontAwesome name="tv" size={iconSize} color={white} />
          <Text style={styles.regularText}>
            {season_number ? `Season ${season_number}` : notAvailable}
          </Text>
        </View>
      )}
      <View style={styles.smallRow}>
        <Text style={styles.headerText}>Ratings:</Text>
        <View style={styles.iconContainer}>
          {vote_average ? (
            ratingsStarList.map((iconNumber) => (
              <AntDesign
                name="star"
                key={iconNumber}
                size={iconRatingSize()}
                color={iconColor(vote_average, iconNumber)}
              />
            ))
          ) : (
            <Text style={styles.regularText}>No Rating</Text>
          )}
        </View>
      </View>
      <PlayContentButtons
        type="episode"
        queryString={`${showName} season${season_number} episode${episode_number}`}
      />
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
    fontSize: appTheme.font.medium,
    color: white,
  },
  creatorHeaderText: {
    fontFamily: regular,
    fontSize: appTheme.font.medium,
    color: primary,
  },
  detailsContainer: {
    flexDirection: "column",
    gap: 10,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
});
