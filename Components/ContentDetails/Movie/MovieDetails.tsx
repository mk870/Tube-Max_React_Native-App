import {
  ImageBackground,
  ScrollView,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { IMovie } from "~/Types/Apis/Movies/SingleMovie";
import { getContentImage } from "~/Components/Cards/Movie/utils/utils";
import { styles } from "./styles";
import HeaderIcon from "~/Components/HeaderIcon/HeaderIcon";
import { useRouter } from "expo-router";
import { imageBackgroundColor } from "~/Theme/Apptheme";
import TabletView from "./TabletView/TabletView";
import MobileView from "./MobileView/MobileView";

type Props = {
  movie: IMovie;
};

const MovieDetails: React.FC<Props> = ({
  movie: {
    poster_path,
  },
  movie,
}) => {
  const route = useRouter();
  const { width } = useWindowDimensions();
  const posterHeight = () => {
    if (width > 1000) return 800;
    else if (width > 800) return 800;
    else if (width > 700) return 800;
    else if (width > 550) return 600;
    else return 500;
  };
  const screenBreakpoint = 500;
  const backGroundColor =
    width > screenBreakpoint ? imageBackgroundColor : "transparent";
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground
        source={getContentImage(poster_path)}
        style={[styles.poster, { height: posterHeight() }]}
        resizeMode="cover"
        blurRadius={width > screenBreakpoint ? 15 : 0}
      >
        <LinearGradient
          style={styles.gradientOverlay}
          colors={["rgba(0,0,0,1)", backGroundColor, "rgba(0,0,0,1)"]}
          locations={[0.01, 0.4, 1]}
        />
        <View style={styles.row}>
          <HeaderIcon iconName="arrow-back" onPressFunc={() => route.back()} />
          <HeaderIcon
            iconName="search"
            onPressFunc={() => route.push("/search")}
          />
        </View>
        {width > screenBreakpoint && <TabletView movie={movie} />}
      </ImageBackground>
      {width <= screenBreakpoint && (
        <MobileView movie={movie}/>
      )}
    </ScrollView>
  );
};

export default MovieDetails;
