import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import { regular } from "~/Utils/Constants";
import { small, white } from "~/Theme/Apptheme";
import { ICast } from "~/Types/Shared/Types";
import { getTMDBImage, shortenString } from "~/Utils/Funcs";
import { useRouter } from "expo-router";

type Props = {
  cast: ICast;
};

const BareCastCard: React.FC<Props> = ({
  cast: { character, profile_path, original_name, id },
}) => {
  const router = useRouter();
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
    <TouchableOpacity
      style={styles.container}
      onPress={() => router.push(`movie/actors/${id}`)}
    >
      <Image
        source={getTMDBImage(profile_path)}
        style={{
          height: getHeightAndWidth(),
          width: getHeightAndWidth(),
          borderRadius: getBorderRadius(),
        }}
      />
      <Text style={[styles.textStyles, { color: "gray" }]}>
        {character ? shortenString(character, maxWords) : "unknown"}
      </Text>
      <Text style={[styles.textStyles, { color: white }]}>
        {original_name ? shortenString(original_name, maxWords) : "unknown"}
      </Text>
    </TouchableOpacity>
  );
};

export default BareCastCard;

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
