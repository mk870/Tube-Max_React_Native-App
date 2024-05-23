import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign, Feather } from "@expo/vector-icons";
import { INumberOrNull, IStringOrNull } from "~/Types/Shared/Types";
import { appTheme, medium, small, white } from "~/Theme/Apptheme";
import { bold, regular } from "~/Utils/Constants";
import millify from "millify";
import { timeConverter } from "~/Utils/Funcs";

type Props = {
  date: IStringOrNull;
  runtime: INumberOrNull;
  ratings: INumberOrNull;
  budget: INumberOrNull;
  revenue: INumberOrNull;
  title: IStringOrNull;
};

const Details: React.FC<Props> = ({
  date,
  ratings,
  runtime,
  budget,
  revenue,
  title,
}) => {
  const iconSize = 22;
  const getYear = (releaseDate: string) => {
    return releaseDate.split("-")[0];
  };
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{title}</Text>
      <View style={styles.row}>
        <View style={styles.smallRow}>
          <AntDesign name="calendar" size={iconSize} color={white} />
          <Text style={styles.regularText}>
            {date ? getYear(date) : "date unkown"}
          </Text>
        </View>
        <View style={styles.smallRow}>
          <Feather name="clock" size={iconSize} color={white} />
          <Text style={styles.regularText}>
            {runtime ? `${timeConverter(runtime)}` : "no runtime"}
          </Text>
        </View>
        <View style={styles.smallRow}>
          <AntDesign name="star" size={iconSize} color="gold" />
          <Text style={styles.regularText}>
            {ratings ? `${ratings.toFixed(2)} (IMDB)` : "no rating"}
          </Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.smallRow}>
          <Text style={styles.headerText}>Budget:</Text>
          <Text style={styles.regularText}>
            {budget ? `$${millify(budget)}` : "$--"}
          </Text>
        </View>
        <View style={styles.smallRow}>
          <Text style={styles.headerText}>Revenue:</Text>
          <Text style={styles.regularText}>
            {revenue ? `$${millify(revenue)}` : "$--"}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap:10,
  },
  titleText: {
    fontFamily: bold,
    fontSize: appTheme.font.large,
    color: white,
  },
  row: {
    flexDirection: "row",
    gap: 15
  },
  smallRow: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  regularText: {
    fontFamily: regular,
    fontSize: small,
    color: white,
  },
  headerText: {
    fontFamily: bold,
    fontSize: medium,
    color: white,
  },
});
