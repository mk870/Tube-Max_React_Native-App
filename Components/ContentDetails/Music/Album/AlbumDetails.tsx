import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

import { IAlbum } from "~/Types/Apis/Music/Album/Album";
import ContentImage from "../../Shared/ContentImage/ContentImage";
import AlbumInfo from "./AlbumInfo/AlbumInfo";
import Swipeable from "~/Components/Swipeables/Horizontal/Swipeable";
import AlbumTrackCard from "./AlbumTrackCard/AlbumTrackCard";
import { IArtist } from "~/Types/Shared/Types";
import { medium } from "~/Utils/Constants";
import { large, white } from "~/Theme/Apptheme";

type Props = {
  album: IAlbum;
  albumArtists: IArtist[];
};

const AlbumDetails: React.FC<Props> = ({ album, albumArtists }) => {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <ContentImage
        imagePath={album.images ? album.images[0].url : null}
        source="spotify"
      />
      <AlbumInfo album={album} artists={albumArtists} />
      <Swipeable
        type="artists with details"
        content={albumArtists}
        headerTitle="Album Artists"
      />
      <View style={styles.subContainer}>
        <View style={styles.row}>
          <Text style={styles.headertext}>Album Tracks</Text>
        </View>
        <FlatList
          data={album.tracks.items}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <AlbumTrackCard albumImage={album.images} track={item} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </ScrollView>
  );
};

export default AlbumDetails;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 5,
  },
  subContainer: {
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
});
