import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";

import { getHeight, getWidth } from "./Shared/utils";
import { appTheme, white } from "~/src/Theme/Apptheme";
import { ITrack } from "~/src/Types/Apis/Music/Track/Track";
import { unknown, regular, medium } from "~/src/Utils/Constants";
import { shortenString, getSpotifyImage } from "~/src/Utils/Funcs";

type Props = {
  track: ITrack;
};

const TrackCard: React.FC<Props> = ({
  track: { name, id, artists, album },
}) => {
  const route = useRouter();
  const { width } = useWindowDimensions();
  const getArtists = () => {
    if (artists) {
      if (artists.length > 1)
        return width > 760
          ? shortenString(`${artists[0].name} ft...`, 22)
          : shortenString(`${artists[0].name} ft...`, 13);
      else
        return width > 760
          ? shortenString(artists[0].name, 22)
          : shortenString(artists[0].name, 13);
    } else {
      return unknown;
    }
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => route.push(`music/track/${id}`)}
    >
      <Image
        source={getSpotifyImage(album.images ? album.images[0].url : null)}
        style={[
          { height: getHeight(width), width: getWidth(width) },
          styles.imageStyles,
        ]}
      />
      <Text style={styles.title}>{shortenString(name, 18)}</Text>
      <Text style={styles.detailsText}>{getArtists()}</Text>
    </TouchableOpacity>
  );
};

export default TrackCard;

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
