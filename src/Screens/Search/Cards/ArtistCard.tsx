import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import millify from "millify";
import { useRouter } from "expo-router";

import { medium, regular } from "~/Utils/Constants";
import { appTheme, white } from "~/Theme/Apptheme";
import { IArtist } from "~/Types/Shared/Types";
import { getSpotifyImage, shortenString } from "~/Utils/Funcs";
import { getHeight, getWidth } from "./Shared/utils";

type Props = {
  artist: IArtist;
};

const ArtistCard: React.FC<Props> = ({ artist }) => {
  const route = useRouter();
  const { width } = useWindowDimensions();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => route.push(`music/artists/${artist.id}`)}
    >
      <Image
        source={getSpotifyImage(artist.images ? artist.images[0]?.url : null)}
        style={[
          { height: getHeight(width), width: getWidth(width) },
          styles.imageStyles,
        ]}
      />
      <Text style={styles.title}>
        {width > 760
          ? shortenString(artist.name, 22)
          : shortenString(artist.name, 17)}
      </Text>
      <View style={styles.row}>
        <Ionicons
          name="people-outline"
          size={20}
          color="gray"
          style={{ marginRight: 3 }}
        />
        <Text style={styles.detailsText}>{`${
          artist.followers?.total ? millify(artist.followers.total) : "---"
        } followers`}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ArtistCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 5,
    marginBottom: 5,
  },
  imageStyles: {
    borderRadius: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
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
