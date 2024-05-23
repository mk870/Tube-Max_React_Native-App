import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { IMovieSummary } from "~/Types/Apis/Movies/SummaryMovieInfo";
import { IShowSummary } from "~/Types/Apis/TvShows/ShowSummary";
import { IPlayListSummary } from "~/Types/Apis/Music/PlayListSummary";
import { medium } from "~/Utils/Constants";
import { large, white } from "~/Theme/Apptheme";
import MovieCard from "../Cards/Movie/CardWithDetails/MovieCard";

type Props = { headerTitle: string } & (
  | { type: "movie"; content: IMovieSummary[] }
  | { type: "tvShow"; content: IShowSummary[] }|
  { type: "music"; content: IPlayListSummary[] }
);

const Swipeable: React.FC<Props> = ({ type, content, headerTitle }) => {
  const { headertext, container } = styles;
  const handleSelect = (
    contentItem: IMovieSummary | IShowSummary
  ) => {
    console.log(contentItem.id);
  };
  return (
    <View style={container}>
      <Text style={headertext}>{headerTitle}</Text>
      {type === "movie" && (
        <FlatList
          data={content}
          renderItem={({ item }) => (
            <MovieCard
              movieContent={item}
              onPressFunc={() => handleSelect(item)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default Swipeable;

const styles = StyleSheet.create({
  container: {
    gap: 5,
    marginVertical:10,
  },
  headertext: {
    fontFamily: medium,
    fontSize: large,
    color: white,
    marginLeft: 10,
  },
});
