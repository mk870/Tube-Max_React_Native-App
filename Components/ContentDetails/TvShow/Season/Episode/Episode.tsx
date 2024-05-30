import {
  GestureResponderEvent,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useState } from "react";
import { AntDesign, Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import { IEspisodeSummary } from "~/Types/Apis/TvShows/Season";
import { appTheme, darkGray, small, white } from "~/Theme/Apptheme";
import { bold, regular, unknown } from "~/Utils/Constants";
import { getTMDBImage, shortenString } from "~/Utils/Funcs";

type Props = {
  episode: IEspisodeSummary;
  showId: number;
};

const Episode: React.FC<Props> = ({
  episode: {
    still_path,
    name,
    vote_average,
    overview,
    episode_number,
    air_date,
    runtime,
    id,
    season_number,
  },
  showId,
}) => {
  const [episodeToReadMore, setEpisodeToReadMore] = useState<number | null>(
    null
  );
  const router = useRouter();
  const ratingsStarList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const { width } = useWindowDimensions();
  const imageHeight = () => (width > 600 ? 150 : 100);
  const imageWidth = () => (width > 600 ? 180 : 100);
  const iconSize = () => {
    if (width > 600) return 22;
    else if (width > 355) return 17;
    else return 13;
  };
  const amountOfTextToBeShown = (id: number, text: string) => {
    if (episodeToReadMore === id) return text;
    else return `${text.substring(0, 100)}...`;
  };
  const iconColor = (rating: number | undefined | null, iconNumber: number) => {
    if (rating) {
      if (rating >= iconNumber) return "gold";
      else return "gray";
    } else return "gray";
  };
  const toggleOverviewToRead = (e: GestureResponderEvent) => {
    e.stopPropagation();
    setEpisodeToReadMore((value) => (value ? null : id));
  };
  const navigate = () => {
    router.push({
      pathname: `tvshow/season/episode/${episode_number}`,
      params: {
        showId,
        seasonNumber: season_number,
      },
    });
  };
  return (
    <TouchableOpacity style={styles.container} onPress={navigate}>
      <View style={styles.subContainer}>
        <Image
          source={getTMDBImage(still_path)}
          style={{
            height: imageHeight(),
            width: imageWidth(),
            borderRadius: 10,
          }}
        />
        <View style={styles.detailsContainer}>
          <Text style={styles.titleText}>{`Episode ${episode_number}`}</Text>
          {name && (
            <Text style={styles.regularText}>
              {width < 400 ? shortenString(name, 26) : name}
            </Text>
          )}
          <View style={styles.iconContainer}>
            {vote_average ? (
              ratingsStarList.map((iconNumber) => (
                <AntDesign
                  name="star"
                  key={iconNumber}
                  size={iconSize()}
                  color={iconColor(vote_average, iconNumber)}
                />
              ))
            ) : (
              <Text style={styles.regularText}>No Rating</Text>
            )}
          </View>
          <View style={styles.row}>
            <View style={styles.smallRow}>
              <AntDesign name="calendar" size={22} color={white} />
              <Text style={styles.regularText}>
                {air_date ? air_date : "date unkown"}
              </Text>
            </View>
            <View style={styles.smallRow}>
              <Feather name="clock" size={22} color={white} />
              <Text style={styles.regularText}>
                {runtime ? `${runtime} mins` : unknown}
              </Text>
            </View>
          </View>
        </View>
      </View>
      {overview && (
        <View style={styles.overviewContainer}>
          <Text style={styles.regularText}>
            {width < 700 ? amountOfTextToBeShown(id, overview) : overview}
          </Text>
          {width < 700 && overview.length > 100 && (
            <TouchableOpacity
              style={styles.linkContainer}
              onPress={(e) => toggleOverviewToRead(e)}
            >
              <Text style={styles.linkText}>
                {episodeToReadMore === id ? "Read less..." : "Read more..."}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Episode;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 10,
    borderBottomWidth: 1,
    borderBottomColor: darkGray,
    paddingBottom: 5,
  },
  subContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
  },
  detailsContainer: {
    flexDirection: "column",
    gap: 5,
  },
  titleText: {
    fontFamily: bold,
    fontSize: appTheme.font.large,
    color: white,
  },
  regularText: {
    fontFamily: regular,
    fontSize: small,
    color: "gray",
  },
  headerText: {
    fontFamily: regular,
    fontSize: appTheme.font.medium,
    color: white,
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
  },
  overviewContainer: {
    flexDirection: "column",
    gap: 5,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  smallRow: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  linkContainer: {
    backgroundColor: darkGray,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    width: 100,
    alignSelf: "flex-end",
    flexDirection: "column",
    alignItems: "center",
  },
  linkText: {
    fontFamily: regular,
    fontSize: small,
    color: white,
  },
});
