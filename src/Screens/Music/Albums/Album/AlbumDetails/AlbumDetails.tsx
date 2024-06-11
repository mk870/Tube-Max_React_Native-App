import { FlatList, ScrollView, Text, View } from "react-native";
import React from "react";

import Swipeable from "~/src/Components/Swipeables/Horizontal/Swipeable";
import ContentImage from "~/src/Screens/Shared/ContentImage/ContentImage";
import { IAlbum } from "~/src/Types/Apis/Music/Album/Album";
import { IArtist } from "~/src/Types/Shared/Types";
import AlbumInfo from "./AlbumInfo/AlbumInfo";
import { styles } from "./styles";
import AlbumTrackCard from "../AlbumTrackCard/AlbumTrackCard";


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