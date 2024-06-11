import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";

import { small } from "~/src/Theme/Apptheme";
import { IAlbumSummary } from "~/src/Types/Apis/Music/Album/AlbumSummary";
import { unknown, regular } from "~/src/Utils/Constants";
import { getSpotifyImage, shortenString } from "~/src/Utils/Funcs";

type Props = {
  album: IAlbumSummary;
};

const AlbumCard: React.FC<Props> = ({ album }) => {
  const router = useRouter();
  const maxWords = 8;
  const { width } = useWindowDimensions();
  const getHeightAndWidth = () => {
    if (width > 500) return 120;
    else return 80;
  };
  const getBorderRadius = () => {
    if (width > 500) return 60;
    else return 40;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => router.push(`music/albums/${album.id}`)}
    >
      <Image
        source={getSpotifyImage(album.images ? album.images[0].url : null)}
        style={{
          height: getHeightAndWidth(),
          width: getHeightAndWidth(),
          borderRadius: getBorderRadius(),
        }}
      />
      <Text style={[styles.textStyles, { color: "gray" }]}>
        {album.name ? shortenString(album.name, maxWords) : unknown}
      </Text>
    </TouchableOpacity>
  );
};

export default AlbumCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    gap: 5,
    marginHorizontal: 10,
  },
  textStyles: {
    fontFamily: regular,
    fontSize: small,
  },
});
