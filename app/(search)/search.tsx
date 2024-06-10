import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import ScreenWrapper from "~/src/HOCs/ScreenWrapper";
import { useAppSelector, useAppDispatch } from "~/src/Redux/Hooks/Hooks";
import { clearMoviesGenres } from "~/src/Redux/Slices/Genres/Movies";
import { clearMusicGenres } from "~/src/Redux/Slices/Genres/Music";
import { clearTvShowGenres } from "~/src/Redux/Slices/Genres/TvShows";
import ContentOptions from "~/src/Screens/Search/Header/ContentOptions/ContentOptions";
import SearchOptions from "~/src/Screens/Search/Header/Filters/MusicOptions/SearchOptions";
import NewsCategoryList from "~/src/Screens/Search/Header/Filters/NewsCategories/NewsCategoryList";
import SearchContainer from "~/src/Screens/Search/Header/SearchContainer/SearchContainer";
import SearchResults from "~/src/Screens/Search/Results/SearchResults";
import {
  IMusicSearchType,
  ISearchResultsProps,
} from "~/src/Screens/Search/Results/types";
import { small, white } from "~/src/Theme/Apptheme";
import { IReactNoPropElement } from "~/src/Types/ReactComonents/Types";
import { IContentType } from "~/src/Types/Shared/Types";
import {
  moviesNewsCategory,
  tvShowsNewsCategory,
  artistsNewsCategory,
  songsNewsCategory,
  albumsNewsCategory,
  actorsNewsCategory,
  entertainmentNewsCategory,
  regular,
} from "~/src/Utils/Constants";
import Genres from "~/src/Screens/Search/Header/Filters/GenreList/Genres";

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
    useState<IMusicSearchType>("track");
  const [searchDetails, setSearchDetails] = useState<ISearchResultsProps>({
    searchInput: "",
    searchFilters: "",
  });
  const handleMusicSearchTypeChange = (type: IMusicSearchType) => {
    setSearchDetails({
      ...searchDetails,
      searchInput: undefined,
      searchFilters: "",
    });
    setMusicSearchType(type);
  };

  const handleContentTypeChange = (type: IContentType) => {
    if (type === "news") {
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
    setContentTypeOption(type);
  };
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
          searchInput,
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
          searchInput,
          searchFilters: resultList,
        });
      } else {
        setSearchDetails({
          searchInput,
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
          setContentTypeOption={handleContentTypeChange}
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
            handlePressFunc={handleMusicSearchTypeChange}
            musicSearchType={musicSearchType}
          />
        )}
      </View>
      <SearchResults
        contentType={contentTypeOption}
        searchParams={searchDetails}
        newsCategory={selectedNewsCategory}
        musicSearchType={musicSearchType}
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
