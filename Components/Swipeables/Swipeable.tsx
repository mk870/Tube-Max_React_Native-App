import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { IMovieSummary } from "~/Types/Apis/Movies/SummaryMovieInfo";
import { IShowSummary } from "~/Types/Apis/TvShows/ShowSummary";
import { IPlayListSummary } from "~/Types/Apis/Music/PlayListSummary";
import { medium, regular } from "~/Utils/Constants";
import { darkGray, large, small, white } from "~/Theme/Apptheme";
import { useRouter } from "expo-router";
import { IVoidFunc } from "~/Types/Shared/Types";
import MovieCardWithDetails from "../Cards/Movie/CardWithDetails/MovieCardWithDetails";

type Props = { headerTitle: string }&{seeAllRouteFunc:IVoidFunc} & (
  | { type: "movie"; content: IMovieSummary[] }
  | { type: "tvShow"; content: IShowSummary[] }
  | { type: "music"; content: IPlayListSummary[] }
);

const Swipeable: React.FC<Props> = ({ type, content, headerTitle,seeAllRouteFunc }) => {
  const { headertext, container } = styles;
  const router = useRouter()
  return (
    <View style={container}>
      <View style={styles.row}>
        <Text style={headertext}>{headerTitle}</Text>
        <TouchableOpacity style={styles.linkContainer} onPress={seeAllRouteFunc}>
          <Text style={styles.linkText}>see all</Text>
        </TouchableOpacity>
      </View>
      {type === "movie" && (
        <FlatList
          data={content}
          renderItem={({ item }) => (
            <MovieCardWithDetails
              movieContent={item}
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
    marginVertical: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal:10,
    marginBottom:5
  },
  headertext: {
    fontFamily: medium,
    fontSize: large,
    color: white,
  },
  linkContainer: {
    backgroundColor: darkGray,
    paddingVertical: 5,
    paddingHorizontal:10,
    borderRadius: 5,
  },
  linkText: {
    fontFamily: regular,
    fontSize: small,
    color: white,
  },
});