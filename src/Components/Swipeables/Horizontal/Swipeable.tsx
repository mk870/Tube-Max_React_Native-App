import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

import { medium, regular, unknown } from "~/src/Utils/Constants";
import { large, white, darkGray, small } from "~/src/Theme/Apptheme";
import { IMovieSummary } from "~/src/Types/Apis/Movies/SummaryMovieInfo";
import { IAlbumSummary } from "~/src/Types/Apis/Music/Album/AlbumSummary";
import { IArtistAlbum } from "~/src/Types/Apis/Music/Artist/ArtistAlbum";
import { IPlayListSummary } from "~/src/Types/Apis/Music/PlayListSummary";
import { ITrack } from "~/src/Types/Apis/Music/Track/Track";
import { IShowSummary } from "~/src/Types/Apis/TvShows/ShowSummary";
import {
  IVoidFunc,
  IPlaylistTracksItem,
  IArtist,
  ICast,
  ICreator,
  IMovieCrew,
  ITvCrew,
  IGuestStar,
  ISeasonSummary,
} from "~/src/Types/Shared/Types";
import MovieCardWithDetails from "../../Cards/CardsWithDetails/Movie/MovieCardWithDetails";
import AlbumCardWithDetails from "../../Cards/CardsWithDetails/Music/AlbumCardWithDetails";
import ArtistsWithDetails from "../../Cards/CardsWithDetails/Music/ArtistsWithDetails";
import PlaylistTrackCard from "../../Cards/CardsWithDetails/Music/PlaylistTrackCard";
import TrackCardWithDetails from "../../Cards/CardsWithDetails/Music/TrackCardWithDetails";
import TvShowCardWithDetails from "../../Cards/CardsWithDetails/TvShow/TvShowCardWithDetails";
import AlbumCard from "../../Cards/Shared/AlbumCard";
import ArtistCard from "../../Cards/Shared/ArtistCard";
import BareCastCard from "../../Cards/Shared/BareCastCard";
import BareCreatorCard from "../../Cards/Shared/BareCreatorCard";
import BareCrewCard from "../../Cards/Shared/BareCrewCard";
import PlaylistCard from "../../Cards/Shared/PlaylistCard";
import SeasonCard from "../../Cards/TvShows/SeasonCard";

type Props = { headerTitle: string } & { seeAllRouteFunc?: IVoidFunc } & {
  id?: number;
} & {
  showName?: string;
} & (
    | { type: "movie"; content: IMovieSummary[] }
    | { type: "tvShow"; content: IShowSummary[] }
    | { type: "playlist"; content: IPlayListSummary[] }
    | { type: "playlistTracks"; content: IPlaylistTracksItem[] }
    | { type: "artist"; content: IArtist[] }
    | { type: "tracks"; content: ITrack[] }
    | { type: "artists with details"; content: IArtist[] }
    | { type: "album"; content: IAlbumSummary[] }
    | { type: "artistAlbums"; content: IArtistAlbum[] }
    | { type: "trackAlbum"; content: IAlbumSummary[] }
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
      {type === "playlist" && (
        <FlatList
          data={content}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <PlaylistCard playlist={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      )}
      {type === "artist" && (
        <FlatList
          data={content}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <ArtistCard artist={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      )}
      {type === "artists with details" && (
        <FlatList
          data={content}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={{ marginHorizontal: 5 }}>
              <ArtistsWithDetails artist={item} />
            </View>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      )}
      {type === "album" && (
        <FlatList
          data={content}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <AlbumCard album={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      )}
      {type === "artistAlbums" && (
        <FlatList
          data={content}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <AlbumCardWithDetails content={item} type="artistAlbum" />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      )}
      {type === "trackAlbum" && (
        <FlatList
          data={content}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <AlbumCardWithDetails content={item} type="trackAlbum" />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      )}
      {type === "tracks" && (
        <FlatList
          data={content}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <TrackCardWithDetails track={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      )}
      {type === "playlistTracks" && (
        <FlatList
          data={content}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <PlaylistTrackCard track={item} />}
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
