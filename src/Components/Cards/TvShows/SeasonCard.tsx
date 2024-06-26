import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

import { small } from "~/src/Theme/Apptheme";
import { ISeasonSummary } from "~/src/Types/Shared/Types";
import { regular } from "~/src/Utils/Constants";
import { getTMDBImage } from "~/src/Utils/Funcs";

type Props = {
  season: ISeasonSummary;
  id:number|undefined;
  showName: string
};

const SeasonCard: React.FC<Props> = ({
  season: { season_number, poster_path},id,showName
}) => {
  const router = useRouter();
  const navigate = ()=>{
    if(id){
      router.push({
        pathname: `tvshow/season/${season_number}`,
        params: {
          showId: id,
          showName
        },
      })
    }
  }
  return (
    <View
      style={styles.container}
      onTouchEnd={navigate}
    >
      <Image source={getTMDBImage(poster_path)} style={styles.imageStyles} />
      <Text style={styles.regularText}>{`Season ${season_number}`}</Text>
    </View>
  );
};

export default SeasonCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 5,
    marginHorizontal: 5,
  },
  imageStyles: {
    height: 160,
    width: 140,
    borderRadius: 8,
  },
  regularText: {
    fontFamily: regular,
    fontSize: small,
    color: "gray",
    textAlign: "center",
  },
});
