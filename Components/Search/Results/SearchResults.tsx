import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { ISearchResultsProps } from "./types";
import { regular } from "~/Utils/Constants";
import { medium, white } from "~/Theme/Apptheme";
import { IContentType } from "~/Types/Shared/Types";
import useFetchTvShowSearch from "~/Hooks/TvShows/useFetchTvShowSearch";
import useFetchMovieSearch from "~/Hooks/Movies/useFetchMovieSearch";
import useSearchSpotify from "~/Hooks/Music/useSearchSpotify";
import useFetchSearchNews from "~/Hooks/News/useFetchSearchNews";
import ScreenSpinner from "~/Components/Spinner/ScreenSpinner";

type Props = {
  contentType: IContentType;
  searchParams: ISearchResultsProps;
};
const SearchResults: React.FC<Props> = ({
  contentType,
  searchParams: { searchFilters, searchInput },
}) => {
  //const searchedShows = useFetchTvShowSearch(searchInput,searchFilters,contentType)
  // const searchedMovies = useFetchMovieSearch(searchInput,searchFilters,contentType)
  // const searchedMusic = useSearchSpotify(searchFilters,searchInput,contentType)
  //const searchNews = useFetchSearchNews(searchFilters,contentType)
  const { text, container } = styles;
  return <View style={container}>{<ScreenSpinner />}</View>;
};

export default SearchResults;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  text: {
    fontFamily: regular,
    fontSize: medium,
    color: white,
  },
});
