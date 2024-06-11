import {
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";

import { white, small } from "~/src/Theme/Apptheme";
import { IStringOrNull } from "~/src/Types/Shared/Types";
import { notAvailable, regular } from "~/src/Utils/Constants";
import { getTMDBImage, shortenString } from "~/src/Utils/Funcs";

type Props = {
  name: string;
  job:IStringOrNull
  profile_path: IStringOrNull
};

const BareCrewCard: React.FC<Props> = ( { name, job, profile_path } ) => {
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
        {job ? shortenString(job, maxWords) : notAvailable}
      </Text>
      <Text style={[styles.textStyles, { color: white }]}>
        {name ? shortenString(name, maxWords) : notAvailable}
      </Text>
    </View>
  );
};

export default BareCrewCard;

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
