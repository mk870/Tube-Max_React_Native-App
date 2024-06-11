import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons, AntDesign, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import {
  appTheme,
  darkGray,
  medium,
  primary,
  small,
  white,
} from "~/src/Theme/Apptheme";
import ContentButton from "~/src/Screens/Shared/Buttons/ContentButton";
import PlayContentButtons from "~/src/Screens/Shared/Buttons/PlayContentButtons/PlayContentButtons";
import { ITrack } from "~/src/Types/Apis/Music/Track/Track";
import { IArtist } from "~/src/Types/Shared/Types";
import { unknown, bold, regular } from "~/src/Utils/Constants";
import { trackDurationInMins } from "~/src/Utils/Funcs";

type Props = {
  track: ITrack;
  artists: IArtist[];
};

const TrackInfo: React.FC<Props> = ({
  track: { name, track_number, duration_ms, popularity },
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
          <MaterialIcons name="access-time" size={iconSize} color={white} />
          <Text style={styles.regularText}>
            {trackDurationInMins(duration_ms)}
          </Text>
        </View>
        <View style={styles.smallRow}>
          <Ionicons
            name="musical-notes-outline"
            size={iconSize}
            color={white}
          />
          <Text style={styles.regularText}>
            {track_number
              ? `${track_number}${
                  track_number === 1
                    ? "st"
                    : track_number === 2
                    ? "nd"
                    : track_number === 3
                    ? "rd"
                    : "th"
                } track`
              : "track no. "+unknown}
          </Text>
        </View>
      </View>
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
        title="add to my tracks"
        onPressFunc={() => console.log("hie")}
        type="add"
      />
      <PlayContentButtons type="track" queryString={`${name} by ${artists[0].name}`}/>
    </View>
  );
};

export default TrackInfo;

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
