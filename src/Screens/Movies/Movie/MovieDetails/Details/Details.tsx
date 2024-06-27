import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { AntDesign, Feather } from "@expo/vector-icons";
import millify from "millify";
import axios from "axios";

import ContentButton from "../../../../Shared/Buttons/ContentButton";
import Genres from "../Genres/Genres";
import PlayContentButtons from "../../../../Shared/Buttons/PlayContentButtons/PlayContentButtons";
import { white, appTheme, small, medium } from "~/src/Theme/Apptheme";
import { IMovie } from "~/src/Types/Apis/Movies/SingleMovie";
import { backendUrl, bold, regular } from "~/src/Utils/Constants";
import { numberToString, timeConverter } from "~/src/Utils/Funcs";
import { useAppSelector } from "~/src/Redux/Hooks/Hooks";
import ToasterNotification from "~/src/Components/ToasterNotification/ToasterNotification";
import ServerError from "~/src/Components/HttpError/ServerError";

type Props = {
  movie: IMovie;
};

const Details: React.FC<Props> = ({
  movie: { release_date, vote_average, runtime, budget, revenue, title },
  movie,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [serverError, setServerError] = useState<string>("");
  const [response, setResponse] = useState<string | null>(null);
  const accessToken = useAppSelector((state) => state.accessToken);
  const iconSize = 22;
  const getYear = (releaseDate: string) => {
    return releaseDate.split("-")[0];
  };
  const handleAddToFavorites = () => {
    setIsLoading(true);
    const data = {
      Title: title ? title : "",
      Release_date: release_date ? release_date : "",
      Tmdb_id: movie.id,
      Poster: movie.poster_path ? movie.poster_path : "",
      Rating: vote_average ? numberToString(vote_average) : "",
    };
    axios
      .post(`${backendUrl}movie`, data, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => setResponse(res.data))
      .catch((e) => {
        console.log(e);
        if (e.response?.data?.error !== "") {
          setServerError(e.response?.data?.error);
        } else setServerError("oops something went wrong");
      })
      .finally(() => {
        setIsLoading(false);
      });
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
          title={isLoading ? "" : "Add to favorites"}
          onPressFunc={handleAddToFavorites}
          type={isLoading ? "loading" : "add"}
          disabled={isLoading ? true : false}
        />
        <PlayContentButtons type="movie" queryString={title ? title : ""} />
        <ToasterNotification
          isVisible={response ? true : false}
          message={response ? response : ""}
        />
        {serverError && (
          <ServerError
            isModalVisible={serverError ? true : false}
            message={serverError}
            handleCancel={() => setServerError("")}
          />
        )}
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
