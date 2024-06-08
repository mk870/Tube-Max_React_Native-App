import { StyleSheet, ScrollView } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

import { IMovieSummary } from "~/Types/Apis/Movies/SummaryMovieInfo";
import { IPlayListSummary } from "~/Types/Apis/Music/PlayListSummary";
import { IShowSummary } from "~/Types/Apis/TvShows/ShowSummary";
import BareSharedCard from "~/Components/Cards/Shared/BareSharedCard";
import { IMovieRecommendations } from "~/Types/Apis/Movies/MovieRecommandations";
import { IShowRecommendation } from "~/Types/Apis/TvShows/ShowRecommendation";
import PlaylistCard from "~/Components/Cards/Shared/PlaylistCard";
import { IArtist, INewsCategory } from "~/Types/Shared/Types";
import ArtistsWithDetails from "~/Components/Cards/CardsWithDetails/Music/ArtistsWithDetails";
import { INews } from "~/Types/Apis/News/News";
import NewsCard from "~/Components/Cards/CardsWithDetails/News/NewsCard";
import { IAlbumSummary } from "~/Types/Apis/Music/Album/AlbumSummary";
import LatestAlbumCard from "~/Components/Cards/CardsWithDetails/Music/LatestAlbumCard";

type Props = { newsCategory?: INewsCategory } & (
  | {
      type: "movie";
      content: IMovieSummary[];
    }
  | { type: "tvShow"; content: IShowSummary[] }
  | { type: "artists"; content: IArtist[] }
  | { type: "playlist"; content: IPlayListSummary[] }
  | { type: "movieRecomms"; content: IMovieRecommendations[] }
  | { type: "news"; content: INews[] }
  | { type: "album"; content: IAlbumSummary[] }
  | { type: "showRecomms"; content: IShowRecommendation[] }
);

const VerticalSwipeable: React.FC<Props> = ({
  type,
  content,
  newsCategory,
}) => {
  const router = useRouter();
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsHorizontalScrollIndicator={false}
    >
      {type === "movie" &&
        content.map((movie, index) => (
          <BareSharedCard
            posterPath={movie.poster_path}
            key={index}
            onPressFunc={() => router.push(`movie/${movie.id}`)}
          />
        ))}
      {type === "movieRecomms" &&
        content.map((movie, index) => (
          <BareSharedCard
            posterPath={movie.poster_path}
            key={index}
            onPressFunc={() => router.push(`movie/${movie.id}`)}
          />
        ))}
      {type === "tvShow" &&
        content.map((show, index) => (
          <BareSharedCard
            posterPath={show.poster_path}
            key={index}
            onPressFunc={() => router.push(`tvshow/${show.id}`)}
          />
        ))}
      {type === "showRecomms" &&
        content.map((show, index) => (
          <BareSharedCard
            posterPath={show.poster_path}
            key={index}
            onPressFunc={() => router.push(`tvshow/${show.id}`)}
          />
        ))}
      {type === "playlist" &&
        content.map((playlist, index) => (
          <PlaylistCard playlist={playlist} key={index} />
        ))}
      {type === "artists" &&
        content.map((artist, index) => (
          <ArtistsWithDetails artist={artist} key={index} />
        ))}
      {type === "news" &&
        content.map((article, index) => (
          <NewsCard
            article={article}
            key={index}
            newsCategory={newsCategory ? newsCategory : "entertainment"}
          />
        ))}
      {type === "album" &&
        content.map((album, index) => (
          <LatestAlbumCard album={album} key={index} />
        ))}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    padding: 5,
    gap: 10,
    marginTop: 10,
  },
});

export default VerticalSwipeable;
