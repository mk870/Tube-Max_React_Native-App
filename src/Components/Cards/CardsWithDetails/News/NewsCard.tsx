import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import moment from "moment";

import { regular, unknown } from "~/src/Utils/Constants";
import { white, small, appTheme } from "~/src/Theme/Apptheme";
import { INews } from "~/src/Types/Apis/News/News";
import { INewsCategory } from "~/src/Types/Shared/Types";
import { shortenString, getNewsImage } from "~/src/Utils/Funcs";

type Props = {
  article: INews;
  newsCategory: INewsCategory | string;
};

const NewsCard: React.FC<Props> = ({
  article: {
    urlToImage,
    title,
    source: { name },
    publishedAt,
    id,
  },
  newsCategory,
}) => {
  const route = useRouter();
  const { width } = useWindowDimensions();
  const getHeight = () => {
    if (width > 700) return 220;
    else if (width > 358) return 160;
    else return 140;
  };
  const getWidth = () => {
    if (width > 700) return 220;
    else if (width > 358) return 160;
    else return 140;
  };
  const newsText = (text: string) => {
    if (width > 700) return shortenString(text, 26);
    else return shortenString(text, 18);
  };
  return (
    <TouchableOpacity
      style={[styles.container, { width: getWidth() }]}
      onPress={() =>
        route.push({
          pathname: `news/${id}`,
          params: {
            category: newsCategory,
          },
        })
      }
    >
      <Image
        source={getNewsImage(urlToImage ? urlToImage : null)}
        style={[{ height: getHeight(), width: getWidth() }, styles.imageStyles]}
      />
      <Text style={styles.headerText}>{title ? newsText(title) : unknown}</Text>
      <Text style={styles.regularText}>{name ? newsText(name) : unknown}</Text>
      <Text style={styles.text}>
        {moment(publishedAt).startOf("days").fromNow()}
      </Text>
    </TouchableOpacity>
  );
};

export default NewsCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 3,
  },
  headerText: {
    fontFamily: regular,
    fontSize: appTheme.font.medium,
    color: white,
  },
  regularText: {
    fontFamily: regular,
    fontSize: small,
    color: "gray",
  },
  text: {
    fontFamily: regular,
    fontSize: small,
    color: "gray",
    fontStyle: "italic",
  },
  imageStyles: {
    borderRadius: 10,
  },
});
