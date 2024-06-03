import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { appTheme, small, white } from "~/Theme/Apptheme";
import { regular } from "~/Utils/Constants";

type Props = {
  list: string[];
};

const Genres: React.FC<Props> = ({ list }) => {
  return (
    <View style={styles.container}>
      {list.map((name, index) => (
        <View key={index} style={styles.genre}>
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
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
    minWidth:70
  },
  textStyle: {
    fontFamily: regular,
    fontSize: small,
    color: white,
  },
});
