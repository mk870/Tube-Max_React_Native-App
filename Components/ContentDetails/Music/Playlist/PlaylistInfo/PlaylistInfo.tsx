import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import millify from "millify";

import { IPlayList } from "~/Types/Apis/Music/PlayList";
import {
  appTheme,
  darkGray,
  medium,
  primary,
  small,
  white,
} from "~/Theme/Apptheme";
import { bold, regular, unknown } from "~/Utils/Constants";

type Props = {
  playlist: IPlayList;
};

const PlaylistInfo: React.FC<Props> = ({
  playlist: { name, followers, tracks, description },
}) => {
  const router = useRouter();
  const iconSize = 22;
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{name}</Text>
      <View style={styles.row}>
        <View style={styles.smallRow}>
          <Ionicons
            name="people-outline"
            size={20}
            color={white}
            style={{ marginRight: 3 }}
          />
          <Text style={styles.regularText}>{`${
            followers?.total ? millify(followers.total) : unknown
          } followers`}</Text>
        </View>
        <View style={styles.smallRow}>
          <Ionicons
            name="musical-notes-outline"
            size={iconSize}
            color={white}
          />
          <Text style={styles.regularText}>
            {tracks?.total ? `${tracks.total} tracks` : unknown}
          </Text>
        </View>
      </View>
      {description && <Text style={styles.headerText}>{description}</Text>}
    </View>
  );
};

export default PlaylistInfo;

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
