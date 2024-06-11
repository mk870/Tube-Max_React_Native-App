import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

import Genre from "./GenreCard/Genre";
import { medium } from "~/src/Utils/Constants";
import { useAppSelector, useAppDispatch } from "~/src/Redux/Hooks/Hooks";
import { toggleMovieGenre } from "~/src/Redux/Slices/Genres/Movies";
import { toggleMusicGenres } from "~/src/Redux/Slices/Genres/Music";
import { toggleTvShowGenre } from "~/src/Redux/Slices/Genres/TvShows";
import { large, white } from "~/src/Theme/Apptheme";
import { IGenreList, IGenre } from "~/src/Types/Redux/Types";

type Props = {
  contentType: string;
};

const Genres: React.FC<Props> = ({ contentType }) => {
  const moviesGenres = useAppSelector((state) => state.movieGenres.value);
  const musicGenres = useAppSelector((state) => state.musicGenres.value);
  const tvShowGenres = useAppSelector((state) => state.tvShowGenres.value);
  const dispatch = useAppDispatch();
  const dataList: () => IGenreList = () => {
    if (contentType === "movies") return moviesGenres;
    else if (contentType === "tvshows") return tvShowGenres;
    else return musicGenres;
  };
  const handleSelect = (genre: IGenre) => {
    if (contentType === "movies") {
      dispatch(toggleMovieGenre(genre.id));
    } else if (contentType === "tvshows") {
      dispatch(toggleTvShowGenre(genre.id));
    } else {
      dispatch(toggleMusicGenres(genre.id));
    }
  };
  const { headertext, container } = styles;
  return (
    <View style={container}>
      <Text style={headertext}>
        {"Genres"}
      </Text>
      <FlatList
        data={dataList()}
        renderItem={({ item }) => (
          <Genre genre={item} onPressFunc={() => handleSelect(item)} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Genres;

const styles = StyleSheet.create({
  container: {
    gap: 5,
  },
  headertext: {
    fontFamily: medium,
    fontSize: large,
    color: white,
    marginLeft: 10,
  },
});
