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
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import millify from "millify";

import { IArtist } from "~/Types/Shared/Types";
import { getSpotifyImage } from "~/Utils/Funcs";
import { medium, regular } from "~/Utils/Constants";
import { appTheme, background, small, white } from "~/Theme/Apptheme";
import ButtonSpinner from "~/Components/Spinner/ButtonSpinner";

type Props = {
  artist: IArtist;
};

const ArtistsWithDetails: React.FC<Props> = ({ artist }) => {
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
  const flexDirection = () => {
    if (width < 358) return "column";
    else return "row";
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => route.push(`music/artists/${artist.id}`)}
    >
      <Image
        source={getSpotifyImage(artist.images ? artist.images[0].url : null)}
        style={[{ height: getHeight(), width: getWidth() }, styles.imageStyles]}
      />
      <Text style={styles.title}>{artist.name}</Text>
      <View
        style={{
          flexDirection: flexDirection(),
          alignItems: width < 358 ? "flex-start" : "center",
          justifyContent: width < 358 ? "flex-start" : "space-between",
        }}
      >
        <View style={styles.row}>
          <Ionicons name="people-outline" size={24} color="gray" />
          <Text style={styles.detailsText}>{`${
            artist.followers.total ? millify(artist.followers.total) : "---"
          } followers`}</Text>
        </View>
        <Pressable
          style={width>358?styles.smallPressable:styles.largePressable}
          onTouchEnd={(e) => addArtistToFavourites(e)}
          disabled={isLoading ? true : false}
        >
          {isLoading ? (
            <ButtonSpinner />
          ) : width > 358 ? (
            <AntDesign name="plus" size={20} color={appTheme.colors.white} />
          ) : (
            <View style={styles.innerLargePressableContainer}>
              <AntDesign name="plus" size={15} color={appTheme.colors.white} />
              <Text style={styles.pressableText}>add artist</Text>
            </View>
          )}
        </Pressable>
      </View>
    </TouchableOpacity>
  );
};

export default ArtistsWithDetails;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 5,
    marginBottom:5
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
  largePressable: {
    width:100,
    height:30,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: background,
    borderRadius:5
  },
  pressableText: {
    fontFamily: regular,
    fontSize: appTheme.font.xsmall,
    color: "gray",
  },
  subContainer: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  smallPressable: {
    backgroundColor: "#575958",
    height: 30,
    width: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  },
  innerLargePressableContainer:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    gap:5
  }
});
