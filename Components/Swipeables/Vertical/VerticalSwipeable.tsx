import { View, StyleSheet} from "react-native";
import React from "react";
import { IMovieSummary } from "~/Types/Apis/Movies/SummaryMovieInfo";
import { IPlayListSummary } from "~/Types/Apis/Music/PlayListSummary";
import { IShowSummary } from "~/Types/Apis/TvShows/ShowSummary";
import BareSharedCard from "~/Components/Cards/Shared/BareSharedCard";
import { useRouter } from "expo-router";
import { IMovieRecommendations } from "~/Types/Apis/Movies/MovieRecommandations";

type Props =
  | { type: "movie"; content: IMovieSummary[] }
  | { type: "tvShow"; content: IShowSummary[] }
  | { type: "music"; content: IPlayListSummary[] }
  | { type: "movieRecomms"; content: IMovieRecommendations[] };

const VerticalSwipeable: React.FC<Props> = ({ type, content }) => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      {type === "movie" &&
        content.map((movie,index) => (
          <BareSharedCard
            posterPath={movie.poster_path}
            key={index}
            onPressFunc={() => router.push(`movie/${movie.id}`)}
          />
        ))}
        {type === "movieRecomms" &&
        content.map((movie,index) => (
          <BareSharedCard
            posterPath={movie.poster_path}
            key={index}
            onPressFunc={() => router.push(`movie/${movie.id}`)}
          />
        ))}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 5,
    flexWrap: "wrap",
    gap: 10,
    marginTop:10
  },
});

export default VerticalSwipeable;
