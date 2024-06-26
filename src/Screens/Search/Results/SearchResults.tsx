import { StyleSheet, View } from "react-native";
import React from "react";

import { IMusicSearchType, ISearchResultsProps } from "./types";
import HttpError from "~/src/Components/HttpError/HttpError";
import ScreenSpinner from "~/src/Components/Spinner/ScreenSpinner";
import VerticalSwipeable from "~/src/Components/Swipeables/Vertical/VerticalSwipeable";
import useFetchMovieSearch from "~/src/Hooks/Movies/useFetchMovieSearch";
import useSearchAlbum from "~/src/Hooks/Music/Search/useSearchAlbum";
import useSearchArtist from "~/src/Hooks/Music/Search/useSearchArtist";
import useSearchPlaylist from "~/src/Hooks/Music/Search/useSearchPlaylist";
import useSearchTrack from "~/src/Hooks/Music/Search/useSearchTrack";
import useFetchSearchNews from "~/src/Hooks/News/useFetchSearchNews";
import useFetchTvShowSearch from "~/src/Hooks/TvShows/useFetchTvShowSearch";
import { medium, white } from "~/src/Theme/Apptheme";
import { IContentType } from "~/src/Types/Shared/Types";
import { regular } from "~/src/Utils/Constants";

type Props = {
  contentType: IContentType;
  searchParams: ISearchResultsProps;
  newsCategory?: string;
  musicSearchType?: IMusicSearchType;
};
const SearchResults: React.FC<Props> = ({
  contentType,
  newsCategory,
  musicSearchType,
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
  const searchedArtist = useSearchArtist(
    searchInput,
    contentType,
    musicSearchType ? musicSearchType : "artist"
  );
  const searchedPlaylist = useSearchPlaylist(
    searchInput,
    contentType,
    musicSearchType ? musicSearchType : "playlist"
  );
  const searchedTrack = useSearchTrack(
    searchInput,
    contentType,
    musicSearchType ? musicSearchType : "track"
  );
  const searchedAlbum = useSearchAlbum(
    searchInput,
    contentType,
    musicSearchType ? musicSearchType : "album"
  );
  const searchNews = useFetchSearchNews(searchFilters, contentType);
  const isLoading = () => {
    if (
      searchedShows.isLoading ||
      searchedMovies.isLoading ||
      searchNews.isLoading ||
      searchedArtist.isLoading ||
      searchedAlbum.isLoading ||
      searchedPlaylist.isLoading ||
      searchedTrack.isLoading
    )
      return true;
    else return false;
  };
  const hasError = () => {
    if (
      searchedShows.error ||
      searchedMovies.error ||
      searchNews.error ||
      searchedArtist.error ||
      searchedAlbum.error ||
      searchedPlaylist.error ||
      searchedTrack.error
    )
      return true;
    else return false;
  };
  const { text, container } = styles;
  return (
    <View style={container}>
      {isLoading() && <ScreenSpinner />}
      {hasError() && <HttpError />}
      {searchedShows.data && (
        <VerticalSwipeable
          type="tvShowSearchResults"
          content={searchedShows.data}
        />
      )}
      {searchedMovies.data && (
        <VerticalSwipeable
          type="movieSearchResults"
          content={searchedMovies.data}
        />
      )}
      {searchNews.data && (
        <VerticalSwipeable
          type="news"
          content={searchNews.data}
          newsCategory={newsCategory}
        />
      )}
      {searchedAlbum.data && musicSearchType === "album" && (
        <VerticalSwipeable
          type="albumSearchResults"
          content={searchedAlbum.data}
        />
      )}
      {searchedTrack.data && musicSearchType === "track" && (
        <VerticalSwipeable type="track" content={searchedTrack.data} />
      )}
      {searchedPlaylist.data && musicSearchType === "playlist" && (
        <VerticalSwipeable type="playlist" content={searchedPlaylist.data} />
      )}
      {searchedArtist.data && musicSearchType === "artist" && (
        <VerticalSwipeable
          type="artistSearchResults"
          content={searchedArtist.data}
        />
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
    paddingTop: 2,
    paddingBottom: 10,
  },
  text: {
    fontFamily: regular,
    fontSize: medium,
    color: white,
  },
});
