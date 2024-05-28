import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";

import { IActorProfile } from "~/Types/Shared/Types";
import { IMovieSummary } from "~/Types/Apis/Movies/SummaryMovieInfo";
import { IShowSummary } from "~/Types/Apis/TvShows/ShowSummary";
import { useRouter } from "expo-router";
import { getTMDBImage } from "~/Utils/Funcs";
import { imageBackgroundColor, medium, white } from "~/Theme/Apptheme";
import LinearGradientOverlay from "~/Components/LinearGradient/LinearGradientOverlay";
import HeaderIcon from "~/Components/HeaderIcon/HeaderIcon";
import { bold, regular, unknown } from "~/Utils/Constants";
import Details from "./Details/Details";
import Swipeable from "~/Components/Swipeables/Horizontal/Swipeable";

type Props = {
  actor: IActorProfile | null;
  movies: IMovieSummary[];
  shows: IShowSummary[];
};

const ActorDetails: React.FC<Props> = ({ actor, movies, shows }) => {
  const route = useRouter();
  const { width } = useWindowDimensions();
  const screenBreakpoint = 500;
  const backGroundColor =
    width > screenBreakpoint ? imageBackgroundColor : "transparent";
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {actor && (
        <>
          <ImageBackground
            source={getTMDBImage(actor.profile_path)}
            style={{ height: 500, position: "relative" }}
            resizeMode="cover"
            blurRadius={width > screenBreakpoint ? 15 : 0}
          >
            <LinearGradientOverlay backGroundColor={backGroundColor} />
            <View style={styles.row}>
              <HeaderIcon
                iconName="arrow-back"
                onPressFunc={() => route.back()}
              />
            </View>
            {width > screenBreakpoint && (
              <View style={styles.tabletContainer}>
                <Image
                  source={getTMDBImage(actor.profile_path)}
                  style={[
                    { height: 400, width: width > 580 ? 300 : 250 },
                    styles.imageStyle,
                  ]}
                />
              </View>
            )}
          </ImageBackground>
          <Details actor={actor} />
          <Swipeable
            content={movies}
            type="movie"
            headerTitle="Featured Movies"
          />
          <Swipeable
            content={shows}
            type="tvShow"
            headerTitle="Featured Shows"
          />
        </>
      )}
    </ScrollView>
  );
};

export default ActorDetails;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  tabletContainer: {
    paddingHorizontal: 15,
    flexDirection: "row",
    gap: 20,
  },
  imageStyle: {
    borderRadius: 10,
  },
});
