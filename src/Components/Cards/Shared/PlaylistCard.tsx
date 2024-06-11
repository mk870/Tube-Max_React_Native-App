import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import { IPlayListSummary } from "~/src/Types/Apis/Music/PlayListSummary";
import { getSpotifyImage } from "~/src/Utils/Funcs";
import { appTheme, background, primary, white } from "~/src/Theme/Apptheme";
import { medium, unknown } from "~/src/Utils/Constants";

type Props = {
  playlist: IPlayListSummary;
};

const PlaylistCard: React.FC<Props> = ({ playlist }) => {
  const router = useRouter();
  return (
    <View
      style={styles.container}
      onTouchEnd={() => router.push(`music/playlist/${playlist.id}`)}
    >
      <Image
        source={getSpotifyImage(
          playlist.images ? playlist.images[0].url : null
        )}
        style={styles.imageStyles}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.titleText}>{playlist.name}</Text>
        <View style={styles.subContainer}>
          <View style={styles.row}>
            <FontAwesome name="spotify" size={33} color="green" />
            <Text style={styles.detailsText}>{`${
              playlist.tracks
                ? playlist.tracks.total
                  ? playlist.tracks.total
                  : unknown
                : unknown
            } tracks`}</Text>
          </View>
          <Pressable style={styles.btn}>
            <Text style={styles.viewText}>view</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default PlaylistCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 5,
    borderRadius: 15,
    marginHorizontal: 5,
    backgroundColor: background,
    paddingBottom: 10,
  },
  imageStyles: {
    height: 260,
    width: 250,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  detailsContainer: {
    flexDirection: "column",
    gap: 5,
    paddingHorizontal: 10,
  },
  subContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  titleText: {
    fontFamily: medium,
    fontSize: appTheme.font.medium,
    color: white,
  },
  detailsText: {
    fontFamily: medium,
    fontSize: appTheme.font.small,
    color: "gray",
  },
  viewText: {
    fontFamily: medium,
    fontSize: appTheme.font.small,
    color: white,
  },
  btn: {
    backgroundColor: primary,
    height: 30,
    borderRadius: 5,
    width: 70,
    alignItems: "center",
    justifyContent: "center",
  },
});
