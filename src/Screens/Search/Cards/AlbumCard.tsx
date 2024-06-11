import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";

import { IAlbumSummary } from "~/src/Types/Apis/Music/Album/AlbumSummary";
import { getSpotifyImage, shortenString } from "~/src/Utils/Funcs";
import { getHeight, getWidth } from "./Shared/utils";
import { medium, regular } from "~/src/Utils/Constants";
import { appTheme, white } from "~/src/Theme/Apptheme";

type Props = {
  album: IAlbumSummary;
};

const AlbumCard: React.FC<Props> = ({
  album: { images, id, name, artists },
}) => {
  const route = useRouter();
  const { width } = useWindowDimensions();
  const getArtists = () => {
    if (artists.length > 1) return `${artists[0].name} ft...`;
    else return artists[0].name;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => route.push(`music/albums/${id}`)}
    >
      <Image
        source={getSpotifyImage(images ? images[0].url : null)}
        style={[
          { height: getHeight(width), width: getWidth(width) },
          styles.imageStyles,
        ]}
      />
      <Text style={styles.title}>
        {width > 760 ? shortenString(name, 22) : shortenString(name, 13)}
      </Text>
      <Text style={styles.detailsText}>{getArtists()}</Text>
    </TouchableOpacity>
  );
};

export default AlbumCard;
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 5,
    marginBottom: 5,
  },
  imageStyles: {
    borderRadius: 10,
  },
  title: {
    fontFamily: regular,
    fontSize: appTheme.font.medium,
    color: white,
  },
  detailsText: {
    fontFamily: medium,
    fontSize: appTheme.font.small,
    color: "gray",
  },
});
