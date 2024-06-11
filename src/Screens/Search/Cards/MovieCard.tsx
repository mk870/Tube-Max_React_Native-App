import {
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import React from "react";

import { styles } from "./Shared/styles";
import { getWidth, getHeight, contentTitle } from "./Shared/utils";
import { IMovieSummary } from "~/src/Types/Apis/Movies/SummaryMovieInfo";
import { IVoidFunc } from "~/src/Types/Shared/Types";
import { unknown } from "~/src/Utils/Constants";
import { getTMDBImage } from "~/src/Utils/Funcs";

type Props = {
  movie: IMovieSummary;
  onPressFunc: IVoidFunc;
};

const MovieCard: React.FC<Props> = ({
  movie: { poster_path, title, release_date },
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
        {title ? contentTitle(title, width) : unknown}
      </Text>
      <Text style={styles.textStyles}>
        {release_date ? release_date : unknown}
      </Text>
    </TouchableOpacity>
  );
};

export default MovieCard;
