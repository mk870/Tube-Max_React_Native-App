import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { INews } from "~/Types/Apis/News/News";
import { medium, small, white } from "~/Theme/Apptheme";
import { regular, unknown } from "~/Utils/Constants";

type Props = {
  article: INews;
};

const NewsCard: React.FC<Props> = ({ article }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        {article.title ? article.title : unknown}
      </Text>
      <Text>{article.author}</Text>
    </View>
  );
};

export default NewsCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 5,
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
});
