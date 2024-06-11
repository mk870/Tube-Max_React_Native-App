import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import millify from "millify";

import { IArtist } from "~/src/Types/Shared/Types";
import { appTheme, medium, primary, small, white } from "~/src/Theme/Apptheme";
import { bold, regular, unknown } from "~/src/Utils/Constants";
import Genres from "../../../../Genres/Genres";
import ContentButton from "../../../../../Shared/Buttons/ContentButton";

type Props = {
  profile: IArtist;
};

const Profile: React.FC<Props> = ({
  profile: {
    name,
    followers: { total },
    popularity,
    genres,
  },
}) => {
  const iconSize = 22;
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{name}</Text>
      <View style={styles.row}>
        <View style={styles.smallRow}>
          <Ionicons name="people-outline" size={iconSize} color={white} />
          <Text style={styles.regularText}>
            {`${total ? millify(total) : unknown} followers`}
          </Text>
        </View>
        <View style={styles.smallRow}>
          <AntDesign name="star" size={iconSize} color="gold" />
          <Text style={styles.regularText}>
            {popularity ? `${popularity} stars` : unknown + " stars"}
          </Text>
        </View>
      </View>
      {genres && <Genres list={genres} />}
      <ContentButton
          title="add to my artists"
          onPressFunc={() => console.log("hie")}
          type="add"
        />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 10,
    paddingHorizontal: 10,
  },
  titleText: {
    fontFamily: bold,
    fontSize: appTheme.font.large,
    color: white,
  },
  row: {
    flexDirection: "row",
    gap: 15,
  },
  smallRow: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  regularText: {
    fontFamily: regular,
    fontSize: small,
    color: "gray",
  },
  headerText: {
    fontFamily: regular,
    fontSize: medium,
    color: white,
  },
  creatorHeaderText: {
    fontFamily: regular,
    fontSize: medium,
    color: primary,
  },
  detailsContainer: {
    flexDirection: "column",
    gap: 10,
  },
});
