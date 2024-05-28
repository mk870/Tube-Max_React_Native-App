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
import { ICast, IMovieCrew, IVoidFunc } from "~/Types/Shared/Types";
import MovieCardWithDetails from "../../Cards/CardsWithDetails/Movie/MovieCardWithDetails";
import BareCastCard from "~/Components/Cards/Shared/BareCastCard";
import BareCrewCard from "~/Components/Cards/Shared/BareCrewCard";
import TvShowCardWithDetails from "~/Components/Cards/CardsWithDetails/TvShow/TvShowCardWithDetails";

type Props = { headerTitle: string } & { seeAllRouteFunc?: IVoidFunc } & (
    | { type: "movie"; content: IMovieSummary[] }
    | { type: "tvShow"; content: IShowSummary[] }
    | { type: "music"; content: IPlayListSummary[] }
    | { type: "movieCast"; content: ICast[] }
    | { type: "movieCrew"; content: IMovieCrew[] }
  );

const Swipeable: React.FC<Props> = ({
  type,
  content,
  headerTitle,
  seeAllRouteFunc,
}) => {
  const { headertext, container } = styles;
  return (
    <View style={container}>
      <View style={styles.row}>
        <Text style={headertext}>{headerTitle}</Text>
        {seeAllRouteFunc && (
          <TouchableOpacity
            style={styles.linkContainer}
            onPress={seeAllRouteFunc}
          >
            <Text style={styles.linkText}>See all</Text>
          </TouchableOpacity>
        )}
      </View>
      {type === "movie" && (
        <FlatList
          data={content}
          renderItem={({ item }) => (
            <MovieCardWithDetails movieContent={item} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      )}
      {type === "movieCast" && (
        <FlatList
          data={content}
          renderItem={({ item }) => <BareCastCard cast={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      )}
      {type === "movieCrew" && (
        <FlatList
          data={content}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <BareCrewCard crew={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      )}
      {type === "tvShow" && (
        <FlatList
          data={content}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TvShowCardWithDetails show={item} />
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
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  headertext: {
    fontFamily: medium,
    fontSize: large,
    color: white,
  },
  linkContainer: {
    backgroundColor: darkGray,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  linkText: {
    fontFamily: regular,
    fontSize: small,
    color: white,
  },
});
