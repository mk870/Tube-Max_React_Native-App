import { Image, Text, useWindowDimensions, TouchableOpacity } from "react-native";
import React from "react";

import { styles } from "./Shared/styles";
import { getWidth, getHeight, contentTitle } from "./Shared/utils";
import { IShowSummary } from "~/src/Types/Apis/TvShows/ShowSummary";
import { IVoidFunc } from "~/src/Types/Shared/Types";
import { unknown } from "~/src/Utils/Constants";
import { getTMDBImage } from "~/src/Utils/Funcs";

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
