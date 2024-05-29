import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ISeasonSummary } from "~/Types/Shared/Types";
import { getTMDBImage } from "~/Utils/Funcs";
import { regular } from "~/Utils/Constants";
import { small } from "~/Theme/Apptheme";
import { useRouter } from "expo-router";

type Props = {
  season: ISeasonSummary;
  id:number|undefined
};

const SeasonCard: React.FC<Props> = ({
  season: { season_number, poster_path},id
}) => {
  const router = useRouter();
  const navigate = ()=>{
    if(id){
      router.push({
        pathname: `tvshow/season/${season_number}`,
        params: {
          showId: id,
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
