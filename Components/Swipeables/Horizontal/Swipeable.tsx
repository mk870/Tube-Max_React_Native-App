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
import { medium, regular, unknown } from "~/Utils/Constants";
import { darkGray, large, small, white } from "~/Theme/Apptheme";
import {
  ICast,
  ICreator,
  IGuestStar,
  IMovieCrew,
  ISeasonSummary,
  ITvCrew,
  IVoidFunc,
} from "~/Types/Shared/Types";
import MovieCardWithDetails from "../../Cards/CardsWithDetails/Movie/MovieCardWithDetails";
import BareCastCard from "~/Components/Cards/Shared/BareCastCard";
import BareCrewCard from "~/Components/Cards/Shared/BareCrewCard";
import TvShowCardWithDetails from "~/Components/Cards/CardsWithDetails/TvShow/TvShowCardWithDetails";
import SeasonCard from "~/Components/Cards/TvShows/SeasonCard";
import BareCreatorCard from "~/Components/Cards/Shared/BareCreatorCard";

type Props = { headerTitle: string } & { seeAllRouteFunc?: IVoidFunc } & {
  id?: number;
} & {
  showName?: string;
} & (
    | { type: "movie"; content: IMovieSummary[] }
    | { type: "tvShow"; content: IShowSummary[] }
    | { type: "music"; content: IPlayListSummary[] }
    | { type: "movieCast"; content: ICast[] }
    | { type: "creators"; content: ICreator[] }
    | { type: "movieCrew"; content: IMovieCrew[] }
    | { type: "tvCrew"; content: ITvCrew[] }
    | { type: "guestStars"; content: IGuestStar[] }
    | { type: "tvShowSeason"; content: ISeasonSummary[] }
  );

const Swipeable: React.FC<Props> = ({
  type,
  content,
  headerTitle,
  seeAllRouteFunc,
  id,
  showName,
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
          renderItem={({ item }) => (
            <BareCastCard
              id={item.id}
              profile_path={item.profile_path}
              original_name={item.original_name}
              character={item.character}
              type="movie"
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      )}
      {type === "guestStars" && (
        <FlatList
          data={content}
          renderItem={({ item }) => (
            <BareCastCard
              id={item.id}
              profile_path={item.profile_path}
              original_name={item.original_name}
              character={item.character}
              type="tvshow"
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      )}
      {type === "creators" && (
        <FlatList
          data={content}
          renderItem={({ item }) => <BareCreatorCard creator={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      )}
      {type === "movieCrew" && (
        <FlatList
          data={content}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <BareCrewCard
              job={item.job}
              name={item.name}
              profile_path={item.profile_path}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      )}
      {type === "tvCrew" && (
        <FlatList
          data={content}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <BareCrewCard
              job={item.job}
              name={item.name ? item.name : unknown}
              profile_path={item.profile_path}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      )}
      {type === "tvShow" && (
        <FlatList
          data={content}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <TvShowCardWithDetails show={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      )}
      {type === "tvShowSeason" && (
        <FlatList
          data={content}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <SeasonCard
              season={item}
              id={id}
              showName={showName ? showName : ""}
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
