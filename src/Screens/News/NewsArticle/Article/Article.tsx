import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import moment from "moment";
import * as WebBrowser from "expo-web-browser";

import { INews } from "~/src/Types/Apis/News/News";
import {
  appTheme,
  background,
  medium,
  primary,
  small,
  white,
} from "~/src/Theme/Apptheme";
import { bold, regular, unknown } from "~/src/Utils/Constants";

type Props = {
  article: INews;
};

const Article: React.FC<Props> = ({
  article: {
    description,
    title,
    publishedAt,
    author,
    url,
    source: { name },
  },
}) => {
  const goToArticle = async () => {
    try {
      await WebBrowser.openBrowserAsync(url);
    } catch (error) {
      console.error("Error opening browser:", error);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.smallColumn}>
        <Text style={styles.titleText}>{title ? title : unknown}</Text>
      </View>
      <View style={styles.smallColumn}>
        <Text style={styles.headersecondaryText}>
          {description ? description : unknown}
        </Text>
      </View>
      <View style={styles.smallRow}>
        <Text style={styles.headerText}>Source: </Text>
        <Text style={styles.regularText}>{name ? name : unknown}</Text>
      </View>
      <View style={styles.smallRow}>
        <Text style={styles.headerText}>Author: </Text>
        <Text style={styles.regularText}>{author ? author : unknown}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.regularItalicText}>
          {publishedAt
            ? moment(publishedAt).startOf("days").fromNow()
            : unknown}
        </Text>
        <TouchableOpacity style={styles.opacityContainer} onPress={goToArticle}>
          <Text style={styles.opacityText}>open article</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Article;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 10,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  titleText: {
    fontFamily: bold,
    fontSize: appTheme.font.large,
    color: white,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  smallColumn: {
    flexDirection: "column",
    gap: 2,
  },
  smallRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  regularText: {
    fontFamily: regular,
    fontSize: small,
    color: "gray",
  },
  regularItalicText: {
    fontFamily: regular,
    fontSize: small,
    color: "gray",
    fontStyle: "italic",
  },
  headerText: {
    fontFamily: regular,
    fontSize: medium,
    color: white,
  },
  headersecondaryText: {
    fontFamily: regular,
    fontSize: medium,
    color: "gray",
  },
  opacityText: {
    fontFamily: regular,
    fontSize: medium,
    color: primary,
  },
  opacityContainer: {
    backgroundColor: background,
    height: 30,
    paddingHorizontal: 7,
    borderRadius: 3,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
