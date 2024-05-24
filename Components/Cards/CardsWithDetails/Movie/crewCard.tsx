import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import { IMovieCrew } from "~/Types/Shared/Types";
import { regular } from "~/Utils/Constants";
import { small, white } from "~/Theme/Apptheme";
import { getTMDBImage, shortenString } from "~/Utils/Funcs";

type Props = {
  crew: IMovieCrew;
};

const CrewCard: React.FC<Props> = ({ crew: { name, job, profile_path } }) => {
  const maxWords = 8;
  const { width } = useWindowDimensions();
  const getHeightAndWidth = () => {
    if (width > 500) return 120;
    else return 80;
  };
  const getBorderRadius = () => {
    if (width > 500) return 60;
    else return 40;
  };
  return (
    <View style={styles.container}>
      <Image
        source={getTMDBImage(profile_path)}
        style={{
          height: getHeightAndWidth(),
          width: getHeightAndWidth(),
          borderRadius: getBorderRadius(),
        }}
      />
      <Text style={[styles.textStyles, { color: "gray" }]}>
        {job ? shortenString(job, maxWords) : "unknown"}
      </Text>
      <Text style={[styles.textStyles, { color: white }]}>
        {name ? shortenString(name, maxWords) : "unknown"}
      </Text>
    </View>
  );
};

export default CrewCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    gap: 5,
    marginHorizontal: 10,
  },
  imageStyles: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  textStyles: {
    fontFamily: regular,
    fontSize: small,
  },
});
