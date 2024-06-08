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

import { INews } from "~/Types/Apis/News/News";
import { medium, small, white } from "~/Theme/Apptheme";
import { regular, unknown } from "~/Utils/Constants";
import { getNewsImage, shortenString } from "~/Utils/Funcs";
import { INewsCategory } from "~/Types/Shared/Types";

type Props = {
  article: INews;
  newsCategory: INewsCategory
};

const NewsCard: React.FC<Props> = ({
  article: {
    urlToImage,
    title,
    source: { name },
    publishedAt,
    id
  },
  newsCategory
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
  return (
    <TouchableOpacity
      style={[styles.container, { width: getWidth() }]}
      onPress={() => route.push({pathname:`news/${id}`,params:{
        category: newsCategory
      }})}
    >
      <Image
        source={getNewsImage(urlToImage ? urlToImage : null)}
        style={[{ height: getHeight(), width: getWidth() }, styles.imageStyles]}
      />
      <Text style={styles.headerText}>
        {title ? shortenString(title, 17) : unknown}
      </Text>
      <Text style={styles.regularText}>
        {name ? shortenString(name, 17) : unknown}
      </Text>
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
    fontSize: medium,
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
    fontStyle:"italic"
  },
  imageStyles: {
    borderRadius: 10,
  },
});
