import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { INumberOrNull, IStringOrNull } from "~/Types/Shared/Types";
import { appTheme, small, white } from "~/Theme/Apptheme";
import { regular } from "~/Utils/Constants";

type Props = {
  list: {
    id: INumberOrNull;
    name: IStringOrNull;
  }[];
};

const Genres: React.FC<Props> = ({ list }) => {
  return (
    <View style={styles.container}>
      {list.map(({ name, id }) => (
        <View key={id} style={styles.genre}>
          <Text style={styles.textStyle}>{name}</Text>
        </View>
      ))}
    </View>
  );
};

export default Genres;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  genre: {
    borderColor: appTheme.colors.secondary,
    borderWidth: 1,
    padding: 5,
    borderRadius: 7,
  },
  textStyle: {
    fontFamily: regular,
    fontSize: small,
    color: white,
  },
});
