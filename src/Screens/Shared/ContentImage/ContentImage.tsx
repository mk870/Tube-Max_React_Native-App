import {
  Image,
  ImageBackground,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";

import HeaderIcon from "~/src/Components/HeaderIcon/HeaderIcon";
import LinearGradientOverlay from "~/src/Components/LinearGradient/LinearGradientOverlay";
import { imageBackgroundColor } from "~/src/Theme/Apptheme";
import { IStringOrNull } from "~/src/Types/Shared/Types";
import { getSpotifyImage, getNewsImage, getTMDBImage } from "~/src/Utils/Funcs";

type Props = {
  imagePath: IStringOrNull;
  source: "tmdb" | "spotify" | "news";
};

const ContentImage: React.FC<Props> = ({ imagePath, source }) => {
  const route = useRouter();
  const { width } = useWindowDimensions();
  const screenBreakpoint = 500;
  const getHeight = ()=>{
    if(source==="news" && width< screenBreakpoint)return 200
    else return 500
  }
  const backGroundColor =
    width > screenBreakpoint ? imageBackgroundColor : "transparent";
  return (
    <ImageBackground
      source={
        source === "spotify"
          ? getSpotifyImage(imagePath)
          : source === "news"
          ? getNewsImage(imagePath)
          : getTMDBImage(imagePath)
      }
      style={[styles.poster, { height: getHeight()}]}
      resizeMode={source==="news"?"contain":"cover"}
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
              : source === "news"
              ? getNewsImage(imagePath)
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
