import {
  Image,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";

import { IVoidFunc } from "~/src/Types/Shared/Types";
import { getTMDBImage } from "~/src/Utils/Funcs";

type Props = {
  posterPath: string | null;
  onPressFunc: IVoidFunc
};

const BareSharedCard: React.FC<Props> = ({ posterPath,onPressFunc }) => {
  const { width } = useWindowDimensions();
  const getHeight = () => {
    if (width > 700) return 320;
    else if (width > 358) return 270;
    else return 250;
  };
  const getWidth = () => {
    if (width > 700) return 220;
    else if (width > 358) return 170;
    else return 150;
  };
  return (
    <View onTouchEnd={onPressFunc}>
      <Image
      source={getTMDBImage(posterPath)}
      style={[
        {
          width: getWidth(),
          height: getHeight(),
        },
        styles.imageStyles,
      ]}
    />
    </View>
  );
};

export default BareSharedCard;

const styles = StyleSheet.create({
  imageStyles: {
    borderRadius: 10,
  },
});
