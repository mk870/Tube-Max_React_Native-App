import {
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import { ICreator } from "~/Types/Shared/Types";
import { useRouter } from "expo-router";
import { small } from "~/Theme/Apptheme";
import { regular } from "~/Utils/Constants";
import { getTMDBImage, shortenString } from "~/Utils/Funcs";

type Props = {
  creator: ICreator;
};

const BareCreatorCard: React.FC<Props> = ({
  creator: { name, profile_path },
}) => {
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
        {name ? shortenString(name, maxWords) : "unknown"}
      </Text>
    </View>
  );
};

export default BareCreatorCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    gap: 5,
    marginHorizontal: 10,
  },
  textStyles: {
    fontFamily: regular,
    fontSize: small,
  },
});
