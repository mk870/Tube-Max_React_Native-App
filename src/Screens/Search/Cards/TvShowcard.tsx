import { Image, Text, useWindowDimensions, TouchableOpacity } from "react-native";
import React from "react";

import { IVoidFunc } from "~/Types/Shared/Types";
import { getTMDBImage } from "~/Utils/Funcs";
import { unknown } from "~/Utils/Constants";
import { IShowSummary } from "~/Types/Apis/TvShows/ShowSummary";
import { styles } from "./Shared/styles";
import { getWidth, getHeight, contentTitle } from "./Shared/utils";

type Props = {
  show: IShowSummary;
  onPressFunc: IVoidFunc;
};

const TvShowcard: React.FC<Props> = ({
  show: { name, poster_path, first_air_date },
  onPressFunc,
}) => {
  const { width } = useWindowDimensions();
  return (
    <TouchableOpacity onPress={onPressFunc}>
      <Image
        source={getTMDBImage(poster_path)}
        style={[
          {
            width: getWidth(width),
            height: getHeight(width),
          },
          styles.imageStyles,
        ]}
      />
      <Text style={styles.titleText}>
        {name ? contentTitle(name, width) : unknown}
      </Text>
      <Text style={styles.textStyles}>
        {first_air_date ? first_air_date : unknown}
      </Text>
    </TouchableOpacity>
  );
};

export default TvShowcard;
