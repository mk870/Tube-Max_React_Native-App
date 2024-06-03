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
import { useRouter } from "expo-router";

import { small, appTheme, white, background } from "~/Theme/Apptheme";
import { regular, medium } from "~/Utils/Constants";
import { IArtistAlbum } from "~/Types/Apis/Music/Artist/ArtistAlbum";
import ButtonSpinner from "~/Components/Spinner/ButtonSpinner";
import { getSpotifyImage, shortenString } from "~/Utils/Funcs";

type Props = {
  artistAlbum: IArtistAlbum;
};

const AlbumCardWithDetails: React.FC<Props> = ({ artistAlbum }) => {
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
  const addArtistToFavourites = (e: GestureResponderEvent) => {
    e.stopPropagation();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 3000);
  };
  const getArtists = () => {
    if (artistAlbum.artists.length > 1)
      return `${artistAlbum.artists[0].name} ft...`;
    else return artistAlbum.artists[0].name;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => route.push(`music/albums/${artistAlbum.id}`)}
    >
      <Image
        source={getSpotifyImage(
          artistAlbum.images ? artistAlbum.images[0].url : null
        )}
        style={[{ height: getHeight(), width: getWidth() }, styles.imageStyles]}
      />
      <Text style={styles.title}>{shortenString(artistAlbum.name,18)}</Text>
      <View
        style={styles.subContainer}
      >
        <Text style={styles.detailsText}>{getArtists()}</Text>
        <Pressable
          style={ styles.smallPressable }
          onTouchEnd={(e) => addArtistToFavourites(e)}
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

export default AlbumCardWithDetails;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 5,
    marginBottom: 5,
    marginHorizontal:5
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
  subContainer:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    paddingRight:5
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
