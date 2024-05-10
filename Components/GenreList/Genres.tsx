import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAppDispatch, useAppSelector } from "~/Redux/Hooks/Hooks";
import { IGenre, IGenreList } from "~/Types/Redux/Types";
import Genre from "./GenreCard/Genre";
import { toggleMovieGenre } from "~/Redux/Slices/Genres/Movies";
import { toggleTvShowGenre } from "~/Redux/Slices/Genres/TvShows";
import { toggleMusicGenres } from "~/Redux/Slices/Genres/Music";
import { medium } from "~/Utils/Constants";
import { large, white } from "~/Theme/Apptheme";

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
  const { headertext } = styles;
  return (
    <FlatList
      data={dataList()}
      renderItem={({ item }) => (
        <Genre genre={item} onPressFunc={() => handleSelect(item)} />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      ListHeaderComponent={() => (
        <View>
          <Text style={headertext}>Genres</Text>
        </View>
      )}
    />
  );
};

export default Genres;

const styles = StyleSheet.create({
  headertext: {
    fontFamily: medium,
    fontSize: large,
    color: white,
  },
});
