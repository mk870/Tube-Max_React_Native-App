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
import MovieCard from "~/Screens/Search/Cards/MovieCard";
import TvShowcard from "~/Screens/Search/Cards/TvShowcard";
import { ITrack } from "~/Types/Apis/Music/Track/Track";
import TrackCard from "~/Screens/Search/Cards/TrackCard";
import AlbumCard from "~/Screens/Search/Cards/AlbumCard";
import ArtistCard from "~/Screens/Search/Cards/ArtistCard";

type Props = { newsCategory?: INewsCategory | string } & (
  | {
      type: "movie";
      content: IMovieSummary[];
    }
  | {
      type: "track";
      content: ITrack[];
    }
  | {
      type: "movieSearchResults";
      content: IMovieSummary[];
    }
  | { type: "tvShow"; content: IShowSummary[] }
  | { type: "tvShowSearchResults"; content: IShowSummary[] }
  | { type: "artists"; content: IArtist[] }
  | { type: "artistSearchResults"; content: IArtist[] }
  | { type: "playlist"; content: IPlayListSummary[] }
  | { type: "movieRecomms"; content: IMovieRecommendations[] }
  | { type: "news"; content: INews[] }
  | { type: "album"; content: IAlbumSummary[] }
  | { type: "albumSearchResults"; content: IAlbumSummary[] }
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
      {type === "movieSearchResults" &&
        content.map((movie, index) => (
          <MovieCard
            movie={movie}
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
      {type === "tvShowSearchResults" &&
        content.map((show, index) => (
          <TvShowcard
            show={show}
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
      {type === "artistSearchResults" &&
        content.map((artist, index) => (
          <ArtistCard artist={artist} key={index} />
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
      {type === "albumSearchResults" &&
        content.map((album, index) => <AlbumCard album={album} key={index} />)}
      {type === "track" &&
        content.map((track, index) => <TrackCard track={track} key={index} />)}
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
