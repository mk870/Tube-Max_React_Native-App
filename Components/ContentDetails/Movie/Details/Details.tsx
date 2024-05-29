import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign, Feather } from "@expo/vector-icons";
import millify from "millify";

import { appTheme, medium, small, white } from "~/Theme/Apptheme";
import { bold, regular } from "~/Utils/Constants";
import { timeConverter } from "~/Utils/Funcs";
import { IMovie } from "~/Types/Apis/Movies/SingleMovie";
import ContentButton from "../../Shared/Buttons/ContentButton";
import Genres from "../Genres/Genres";
import PlayContentButtons from "../../Shared/Buttons/PlayContentButtons/PlayContentButtons";

type Props = {
  movie: IMovie;
};

const Details: React.FC<Props> = ({
  movie: { release_date, vote_average, runtime, budget, revenue, title },
  movie,
}) => {
  const iconSize = 22;
  const getYear = (releaseDate: string) => {
    return releaseDate.split("-")[0];
  };
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{title}</Text>
      <View style={styles.row}>
        <View style={styles.smallRow}>
          <AntDesign name="calendar" size={iconSize} color={white} />
          <Text style={styles.regularText}>
            {release_date ? getYear(release_date) : "date unkown"}
          </Text>
        </View>
        <View style={styles.smallRow}>
          <Feather name="clock" size={iconSize} color={white} />
          <Text style={styles.regularText}>
            {runtime ? `${timeConverter(runtime)}` : "no runtime"}
          </Text>
        </View>
        <View style={styles.smallRow}>
          <AntDesign name="star" size={iconSize} color="gold" />
          <Text style={styles.regularText}>
            {vote_average ? `${vote_average.toFixed(2)} (IMDB)` : "no rating"}
          </Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.smallRow}>
          <Text style={styles.headerText}>Budget:</Text>
          <Text style={styles.regularText}>
            {budget ? `$${millify(budget)}` : "$--"}
          </Text>
        </View>
        <View style={styles.smallRow}>
          <Text style={styles.headerText}>Revenue:</Text>
          <Text style={styles.regularText}>
            {revenue ? `$${millify(revenue)}` : "$--"}
          </Text>
        </View>
      </View>
      <View style={styles.detailsContainer}>
        {movie.genres && <Genres list={movie.genres} />}
        {movie.tagline && (
          <Text style={[styles.regularText, { flex: 1 }]}>{movie.tagline}</Text>
        )}
        {movie.overview && (
          <Text style={[styles.regularText, { textAlign: "left" }]}>
            {movie.overview}
          </Text>
        )}
        <ContentButton
          title="add to favorites"
          onPressFunc={() => console.log("hie")}
          type="add"
        />
        <PlayContentButtons type="movie" />
      </View>
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
    fontFamily: bold,
    fontSize: medium,
    color: white,
  },
  detailsContainer: {
    flexDirection: "column",
    gap: 10,
  },
});
