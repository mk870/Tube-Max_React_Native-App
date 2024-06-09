import { StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { IReactNoPropElement } from "../../Types/ReactComonents/Types";
import ScreenWrapper from "../../HOCs/ScreenWrapper";
import { small, white } from "~/Theme/Apptheme";
import {
  actorsNewsCategory,
  albumsNewsCategory,
  artistsNewsCategory,
  entertainmentNewsCategory,
  moviesNewsCategory,
  regular,
  songsNewsCategory,
  tvShowsNewsCategory,
} from "~/Utils/Constants";
import SearchResults from "~/Components/Search/Results/SearchResults";
import Genres from "~/Components/Search/Header/Filters/GenreList/Genres";
import NewsCategoryList from "~/Components/Search/Header/Filters/NewsCategories/NewsCategoryList";
import {
  IMusicSearchType,
  ISearchResultsProps,
} from "~/Components/Search/Results/types";
import { useAppDispatch, useAppSelector } from "~/Redux/Hooks/Hooks";
import { clearTvShowGenres } from "~/Redux/Slices/Genres/TvShows";
import { clearMusicGenres } from "~/Redux/Slices/Genres/Music";
import { clearMoviesGenres } from "~/Redux/Slices/Genres/Movies";
import SearchContainer from "~/Components/Search/Header/SearchContainer/SearchContainer";
import ContentOptions from "~/Components/Search/Header/ContentOptions/ContentOptions";
import SearchOptions from "~/Components/Search/Header/Filters/MusicOptions/SearchOptions";
import { IContentType } from "~/Types/Shared/Types";

const search: IReactNoPropElement = () => {
  const [searchInput, setSearchInput] = useState<string | undefined>("");
  const moviesGenres = useAppSelector((state) => state.movieGenres.value);
  const dispatch = useAppDispatch();
  const tvShowGenres = useAppSelector((state) => state.tvShowGenres.value);
  const contentType: IContentType[] = ["movies", "tvshows", "music", "news"];
  const newsCategories = [
    moviesNewsCategory,
    tvShowsNewsCategory,
    artistsNewsCategory,
    songsNewsCategory,
    albumsNewsCategory,
    actorsNewsCategory,
    entertainmentNewsCategory,
  ];
  const [selectedNewsCategory, setSelectedNewsCategory] = useState<string>(
    newsCategories[0]
  );
  const [contentTypeOption, setContentTypeOption] = useState<IContentType>(
    contentType[0]
  );
  const [musicSearchType, setMusicSearchType] =
    useState<IMusicSearchType>("artist");
  const [searchDetails, setSearchDetails] = useState<ISearchResultsProps>({
    searchInput: "",
    searchFilters: "",
  });
  useEffect(() => {
    if (contentTypeOption === "news") {
      setSearchDetails({
        ...searchDetails,
        searchInput: undefined,
        searchFilters: selectedNewsCategory,
      });
    } else {
      setSearchDetails({
        ...searchDetails,
        searchInput: undefined,
        searchFilters: "",
      });
    }
  }, [contentTypeOption, musicSearchType, selectedNewsCategory]);
  const handleKeyboardSubmit = () => {
    if (searchInput) {
      if (contentTypeOption === "movies") {
        const genreList = moviesGenres.filter(
          (genre) => genre.selected === true
        );
        let genreIds: string[] = [];
        for (let i = 0; i < genreList.length; i++) {
          genreIds.push(genreList[i].id);
        }
        const resultList = genreIds.join(",");
        setSearchDetails({
          searchInput: searchInput,
          searchFilters: resultList,
        });
      } else if (contentTypeOption === "tvshows") {
        const genreList = tvShowGenres.filter(
          (genre) => genre.selected === true
        );
        let genreIds: string[] = [];
        for (let i = 0; i < genreList.length; i++) {
          genreIds.push(genreList[i].id);
        }
        const resultList = genreIds.join(",");
        setSearchDetails({
          searchInput: searchInput,
          searchFilters: resultList,
        });
      } else {
        setSearchDetails({
          searchInput: searchInput,
          searchFilters: musicSearchType,
        });
      }
    }
    if (contentTypeOption === "tvshows") dispatch(clearTvShowGenres());
    if (contentTypeOption === "music") dispatch(clearMusicGenres());
    if (contentTypeOption === "movies") dispatch(clearMoviesGenres());
    setSearchInput("");
  };
  const { header, container } = styles;
  return (
    <SafeAreaView style={container}>
      <View style={header}>
        <SearchContainer
          contentTypeOption={contentTypeOption}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          handleKeyboardSubmit={handleKeyboardSubmit}
        />
        <ContentOptions
          setContentTypeOption={setContentTypeOption}
          contentType={contentType}
          contentTypeOption={contentTypeOption}
        />
        {(contentTypeOption === "movies" ||
          contentTypeOption === "tvshows") && (
          <Genres contentType={contentTypeOption} />
        )}
        {contentTypeOption === "news" && (
          <NewsCategoryList
            selectedCategory={selectedNewsCategory}
            newsCategories={newsCategories}
            setSelectedCategory={setSelectedNewsCategory}
          />
        )}
        {contentTypeOption === "music" && (
          <SearchOptions
            setMusicSearchType={setMusicSearchType}
            musicSearchType={musicSearchType}
          />
        )}
      </View>
      <SearchResults
        contentType={contentTypeOption}
        searchParams={searchDetails}
      />
    </SafeAreaView>
  );
};

export default ScreenWrapper(search);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "column",
    gap: 8,
  },
  searchOptionText: {
    fontFamily: regular,
    fontSize: small,
    color: white,
  },
});
