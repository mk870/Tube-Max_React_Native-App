import {
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { ICast, IMovieCrew, IVoidFunc } from "~/Types/Shared/Types";
import { getTMDBImage, shortenString } from "~/Utils/Funcs";
import { appTheme, primary, small, white } from "~/Theme/Apptheme";
import { medium, regular } from "~/Utils/Constants";

type Props =
  | {
      content: ICast;
      onPressFunc?: IVoidFunc;
      type: "cast";
    }
  | { content: IMovieCrew; onPressFunc?: IVoidFunc; type: "crew" };

const CastAndCrewCardWithDetails: React.FC<Props> = ({
  content,
  onPressFunc,
  type,
}) => {
  const { width } = useWindowDimensions();
  const getHeight = () => {
    if (width > 710) return 270;
    else if (width > 355) return 200;
    else return 180;
  };
  const getWidth = () => {
    if (width > 710) return 220;
    else if (width > 355) return 160;
    else return 140;
  };
  const { subContainer, nameText, detailsText, row, subRow, btn, jobText } =
    styles;
  return (
    <View onTouchEnd={onPressFunc}>
      <Image
        source={getTMDBImage(content.profile_path)}
        style={{
          width: getWidth(),
          height: getHeight(),
          borderRadius: 10,
        }}
      />
      <View style={[subContainer, { width: getWidth() }]}>
        <Text style={nameText}>
          {content.name ? shortenString(content.name, 16) : "Unkown"}
        </Text>
        <View style={[row, { width: getWidth() }]}>
          {type === "crew" && <Text style={jobText}>{content.job}</Text>}
          {type === "cast" && (
            <View style={subRow}>
              <FontAwesome name="imdb" size={24} color="gold" />
              <Text style={detailsText}>
                {content.popularity ? content.popularity.toFixed(0) : "unkown"}
              </Text>
            </View>
          )}
          {type === "cast" && (
            <View style={btn}>
              <Text style={detailsText}>view</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default CastAndCrewCardWithDetails;

const styles = StyleSheet.create({
  subContainer: {
    flex: 1,
    paddingTop: 5,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    gap: 5,
  },
  nameText: {
    fontFamily: medium,
    fontSize: appTheme.font.medium,
    color: white,
  },
  detailsText: {
    fontFamily: medium,
    fontSize: appTheme.font.small,
    color: white,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  subRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  jobText: {
    color: "gray",
    fontFamily: regular,
    fontSize: small,
    marginTop: -5,
  },
  btn: {
    backgroundColor: primary,
    height: 25,
    borderRadius: 5,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
