import {
  Image,
  ImageBackground,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import { IStringOrNull } from "~/Types/Shared/Types";
import { imageBackgroundColor } from "~/Theme/Apptheme";
import HeaderIcon from "~/Components/HeaderIcon/HeaderIcon";
import LinearGradientOverlay from "~/Components/LinearGradient/LinearGradientOverlay";
import { getSpotifyImage, getTMDBImage } from "~/Utils/Funcs";
import { useRouter } from "expo-router";

type Props = {
  imagePath: IStringOrNull;
  source: "tmdb" | "spotify";
};

const ContentImage: React.FC<Props> = ({ imagePath, source }) => {
  const route = useRouter();
  const { width } = useWindowDimensions();
  const screenBreakpoint = 500;
  const backGroundColor =
    width > screenBreakpoint ? imageBackgroundColor : "transparent";
  return (
    <ImageBackground
      source={
        source === "spotify"
          ? getSpotifyImage(imagePath)
          : getTMDBImage(imagePath)
      }
      style={[styles.poster, { height: 500 }]}
      resizeMode="cover"
      blurRadius={width > screenBreakpoint ? 15 : 0}
    >
      <LinearGradientOverlay backGroundColor={backGroundColor} />
      <View style={styles.row}>
        <HeaderIcon iconName="arrow-back" onPressFunc={() => route.back()} />
        <HeaderIcon
          iconName="search"
          onPressFunc={() => route.push("/search")}
        />
      </View>
      {width > screenBreakpoint && (
        <Image
          source={
            source === "spotify"
              ? getSpotifyImage(imagePath)
              : getTMDBImage(imagePath)
          }
          style={[
            { height: 400, width: width > 580 ? 300 : 250 },
            styles.imageStyle,
          ]}
        />
      )}
    </ImageBackground>
  );
};

export default ContentImage;

const styles = StyleSheet.create({
  imageStyle: {
    borderRadius: 10,
    marginLeft: 15,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  poster: {
    position: "relative",
  },
});