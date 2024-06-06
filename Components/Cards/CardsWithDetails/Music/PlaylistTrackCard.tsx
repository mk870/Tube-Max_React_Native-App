import {
  GestureResponderEvent,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { medium, regular, unknown } from "~/Utils/Constants";
import { small, appTheme, white } from "~/Theme/Apptheme";
import { IPlaylistTracksItem } from "~/Types/Shared/Types";
import { useRouter } from "expo-router";
import ButtonSpinner from "~/Components/Spinner/ButtonSpinner";
import { shortenString, getSpotifyImage } from "~/Utils/Funcs";

type Props = {
  track: IPlaylistTracksItem;
};

const PlaylistTrackCard: React.FC<Props> = ({
  track: {
    track: { name, artists, album, id },
  },
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const route = useRouter();
  const { width } = useWindowDimensions();
  const getHeight = () => {
    if (width > 700) return 220;
    else if (width > 358) return 170;
    else return 140;
  };
  const getWidth = () => {
    if (width > 700) return 220;
    else if (width > 358) return 170;
    else return 140;
  };
  const addTrackToFavourites = (e: GestureResponderEvent) => {
    e.stopPropagation();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 3000);
  };
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
        source={getSpotifyImage(album?.images ? album.images[0]?.url : null)}
        style={[{ height: getHeight(), width: getWidth() }, styles.imageStyles]}
      />
      <Text style={styles.title}>
        {name ? shortenString(name, 18) : unknown}
      </Text>
      <View style={styles.subContainer}>
        <Text style={styles.detailsText}>{getArtists()}</Text>
        <Pressable
          style={styles.smallPressable}
          onTouchEnd={(e) => addTrackToFavourites(e)}
          disabled={isLoading ? true : false}
        >
          {isLoading ? (
            <ButtonSpinner />
          ) : (
            <AntDesign name="plus" size={20} color={appTheme.colors.white} />
          )}
        </Pressable>
      </View>
    </TouchableOpacity>
  );
};

export default PlaylistTrackCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 5,
    marginBottom: 5,
    marginHorizontal: 5,
  },
  imageStyles: {
    borderRadius: 10,
  },
  textStyles: {
    fontFamily: regular,
    fontSize: small,
  },
  title: {
    fontFamily: regular,
    fontSize: appTheme.font.medium,
    color: white,
  },
  subContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  detailsText: {
    fontFamily: medium,
    fontSize: appTheme.font.small,
    color: "gray",
  },
  pressableText: {
    fontFamily: regular,
    fontSize: appTheme.font.xsmall,
    color: "gray",
  },
  smallPressable: {
    backgroundColor: "#575958",
    height: 30,
    width: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  },
});
