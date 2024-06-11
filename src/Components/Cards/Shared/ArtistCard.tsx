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
import { IArtist } from "~/src/Types/Shared/Types";
import { regular } from "~/src/Utils/Constants";
import { getSpotifyImage, shortenString } from "~/src/Utils/Funcs";

type Props = {
  artist: IArtist;
};

const ArtistCard: React.FC<Props> = ({ artist }) => {
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
      onPress={() => router.push(`music/artists/${artist.id}`)}
    >
      <Image
        source={getSpotifyImage(artist.images ? artist.images[0]?.url : null)}
        style={{
          height: getHeightAndWidth(),
          width: getHeightAndWidth(),
          borderRadius: getBorderRadius(),
        }}
      />
      <Text style={[styles.textStyles, { color: "gray" }]}>
        {artist.name ? shortenString(artist.name, maxWords) : "unknown"}
      </Text>
    </TouchableOpacity>
  );
};

export default ArtistCard;

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
