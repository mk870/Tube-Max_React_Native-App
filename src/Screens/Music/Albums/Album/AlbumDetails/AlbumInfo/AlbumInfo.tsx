import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import Genres from "~/src/Screens/Music/Genres/Genres";
import ContentButton from "~/src/Screens/Shared/Buttons/ContentButton";
import { white } from "~/src/Theme/Apptheme";
import { IAlbum } from "~/src/Types/Apis/Music/Album/Album";
import { IArtist } from "~/src/Types/Shared/Types";
import { unknown } from "~/src/Utils/Constants";
import { styles } from "./styles";

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
