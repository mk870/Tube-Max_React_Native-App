import {
  GestureResponderEvent,
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import ButtonSpinner from "~/src/Components/Spinner/ButtonSpinner";
import { appTheme } from "~/src/Theme/Apptheme";
import { ITracksItem } from "~/src/Types/Apis/Music/Album/Album";
import { IImage } from "~/src/Types/Shared/Types";
import { unknown } from "~/src/Utils/Constants";
import { getSpotifyImage, shortenString } from "~/src/Utils/Funcs";
import { styles } from "./styles";

type Props = {
  track: ITracksItem;
  albumImage: IImage[] | null;
};

const AlbumTrackCard: React.FC<Props> = ({
  track: { name, id, artists },
  albumImage,
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
      if (artists.length > 1) return `${artists[0].name} ft...`;
      else return artists[0].name;
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
        source={getSpotifyImage(albumImage ? albumImage[0].url : null)}
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

export default AlbumTrackCard;
