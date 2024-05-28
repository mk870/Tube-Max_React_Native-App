import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Details from "../Details/Details";
import { IMovie } from "~/Types/Apis/Movies/SingleMovie";
import Genres from "../Genres/Genres";
import { regular } from "~/Utils/Constants";
import { small, white } from "~/Theme/Apptheme";
import ContentButton from "../../Shared/Buttons/ContentButton";
import { getTMDBImage } from "~/Utils/Funcs";

type Props = {
  movie: IMovie;
};

const TabletView: React.FC<Props> = ({ movie }) => {
  return (
    <View style={styles.tabletContainer}>
      <Image
        source={getTMDBImage(movie.poster_path)}
        style={styles.imageStyle}
      />
      <View style={styles.detailsContainer}>
        <Details
          date={movie.release_date}
          runtime={movie.runtime}
          ratings={movie.vote_average}
          revenue={movie.revenue}
          budget={movie.budget}
          title={movie.title}
        />
        {movie.genres && <Genres list={movie.genres} />}
        <Text style={[styles.regularText, { flex: 1 }]}>{movie.tagline}</Text>
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
    </View>
  );
};

export default TabletView;

const styles = StyleSheet.create({
  tabletContainer: {
    flexDirection: "column",
    gap: 10,
    padding: 20,
  },
  imageStyle: {
    width: 300,
    height: 430,
    borderRadius: 10,
  },
  detailsContainer: {
    flexDirection: "column",
    gap: 10,
  },
  regularText: {
    fontFamily: regular,
    fontSize: small,
    color: white,
  },
  btnContainer: {
    flexDirection: "row",
    gap: 20,
  },
});
