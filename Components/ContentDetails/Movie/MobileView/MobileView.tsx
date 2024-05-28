import { StyleSheet, Text, View } from "react-native";
import React from "react";

import Details from "../Details/Details";
import Genres from "../Genres/Genres";
import { IMovie } from "~/Types/Apis/Movies/SingleMovie";
import { regular } from "~/Utils/Constants";
import { small, white } from "~/Theme/Apptheme";
import ContentButton from "../../Shared/Buttons/ContentButton";

type Props = {
  movie: IMovie;
};

const MobileView: React.FC<Props> = ({ movie }) => {
  return (
    <View style={styles.container}>
      <Details
        ratings={movie.vote_average}
        runtime={movie.runtime}
        date={movie.release_date}
        budget={movie.budget}
        revenue={movie.revenue}
        title={movie.title}
      />
      {movie.genres && <Genres list={movie.genres} />}
      <Text style={[styles.regularText]}>{movie.tagline}</Text>
      <Text style={[styles.regularText, { textAlign: "left" }]}>
        {movie.overview}
      </Text>
      <ContentButton
        title="add to favorites"
        onPressFunc={() => console.log("hie")}
        type="add"
      />
      <View style={styles.btnContainer}>
        <ContentButton
          title="Trailers"
          onPressFunc={() => console.log("hie")}
          type="play"
        />
        <ContentButton
          title="Reviews"
          onPressFunc={() => console.log("hie")}
          type="play"
        />
        <ContentButton
          title="Clips"
          onPressFunc={() => console.log("hie")}
          type="play"
        />
      </View>
    </View>
  );
};

export default MobileView;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 14,
    gap: 15,
  },
  regularText: {
    fontFamily: regular,
    fontSize: small,
    color: white,
  },
  btnContainer: {
    flexDirection: "row",
    gap:10
  },
});
