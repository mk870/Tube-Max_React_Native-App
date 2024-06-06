import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import { IAlbum } from "~/Types/Apis/Music/Album/Album";
import {
  appTheme,
  white,
  small,
  primary,
  medium,
  darkGray,
} from "~/Theme/Apptheme";
import { bold, regular, unknown } from "~/Utils/Constants";
import ContentButton from "~/Components/ContentDetails/Shared/Buttons/ContentButton";
import Genres from "../../Genres/Genres";
import { IArtist } from "~/Types/Shared/Types";

type Props = {
  album: IAlbum;
  artists: IArtist[];
};

const AlbumInfo: React.FC<Props> = ({
  album: { name, total_tracks, release_date, popularity, genres },
  artists,
}) => {
  const router = useRouter();
  const iconSize = 22;
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{name}</Text>
      <View style={styles.row}>
        <View style={styles.smallRow}>
          <AntDesign name="star" size={iconSize} color="gold" />
          <Text style={styles.regularText}>
            {popularity ? `${popularity} stars` : unknown + " stars"}
          </Text>
        </View>
        <View style={styles.smallRow}>
          <AntDesign name="calendar" size={iconSize} color={white} />
          <Text style={styles.regularText}>
            {release_date ? release_date : unknown}
          </Text>
        </View>
        <View style={styles.smallRow}>
          <Ionicons
            name="musical-notes-outline"
            size={iconSize}
            color={white}
          />
          <Text style={styles.regularText}>
            {total_tracks ? `${total_tracks} tracks` : unknown}
          </Text>
        </View>
      </View>
      {genres && <Genres list={genres} />}
      <View style={styles.artistsWrapper}>
        <Text style={styles.headerText}>Artists:</Text>
        <View style={styles.artistsContainer}>
          {artists.map((artist) => (
            <TouchableOpacity
              key={artist.id}
              style={styles.artist}
              onPress={() => router.push(`music/artists/${artist.id}`)}
            >
              <Ionicons name="person-outline" size={15} color={white} />
              <Text style={styles.regularText}>{artist.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <ContentButton
        title="add to my albums"
        onPressFunc={() => console.log("hie")}
        type="add"
      />
    </View>
  );
};

export default AlbumInfo;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 10,
    paddingHorizontal: 10,
  },
  titleText: {
    fontFamily: bold,
    fontSize: appTheme.font.large,
    color: white,
  },
  artistsContainer: {
    flexDirection: "row",
    width: "100%",
    gap: 5,
    alignItems: "center",
    flexWrap: "wrap",
  },
  artist: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 5,
    gap: 5,
    backgroundColor: darkGray,
    paddingVertical: 5,
    borderRadius: 3,
    minWidth: 70,
  },
  row: {
    flexDirection: "row",
    gap: 15,
  },
  artistsWrapper: {
    flexDirection: "column",
    gap: 5,
  },
  smallRow: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  regularText: {
    fontFamily: regular,
    fontSize: small,
    color: "gray",
  },
  artistText: {
    fontFamily: regular,
    fontSize: small,
    color: white,
  },
  headerText: {
    fontFamily: regular,
    fontSize: medium,
    color: white,
  },
  creatorHeaderText: {
    fontFamily: regular,
    fontSize: medium,
    color: primary,
  },
  detailsContainer: {
    flexDirection: "column",
    gap: 10,
  },
});
