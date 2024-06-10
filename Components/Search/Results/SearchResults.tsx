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
import HttpError from "~/Components/HttpError/HttpError";
import VerticalSwipeable from "~/Components/Swipeables/Vertical/VerticalSwipeable";

type Props = {
  contentType: IContentType;
  searchParams: ISearchResultsProps;
};
const SearchResults: React.FC<Props> = ({
  contentType,
  searchParams: { searchFilters, searchInput },
}) => {
  const searchedShows = useFetchTvShowSearch(
    searchInput,
    searchFilters,
    contentType
  );
  const searchedMovies = useFetchMovieSearch(
    searchInput,
    searchFilters,
    contentType
  );
  const searchedMusic = useSearchSpotify(
    searchFilters,
    searchInput,
    contentType
  );
  const searchNews = useFetchSearchNews(searchFilters, contentType);
  const isLoading = () => {
    if (
      searchedShows.isLoading ||
      searchedMovies.isLoading ||
      searchNews.isLoading ||
      searchedMusic.isLoading
    )
      return true;
    else return false;
  };
  const hasData = () => {
    if (
      searchedShows.data ||
      searchedMovies.data ||
      searchNews.data ||
      searchedMusic.data
    )
      return true;
    else return false;
  };
  const hasError = () => {
    if (
      searchedShows.error ||
      searchedMovies.error ||
      searchNews.error ||
      searchedMusic.error
    )
      return true;
    else return false;
  };
  const { text, container } = styles;
  return (
    <View style={container}>
      {isLoading() && <ScreenSpinner />}
      {hasError() && <HttpError />}
      {hasData() && <Text style={text}>Results</Text>}
      {searchedShows.data && (
        <VerticalSwipeable type="tvShow" content={searchedShows.data} />
      )}
      {searchedMovies.data && (
        <VerticalSwipeable type="movie" content={searchedMovies.data} />
      )}
      {searchNews.data && (
        <VerticalSwipeable type="news" content={searchNews.data} />
      )}
    </View>
  );
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
