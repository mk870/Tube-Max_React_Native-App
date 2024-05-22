import {
  Animated,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { IMovieSummary } from "~/Types/Apis/Movies/SummaryMovieInfo";
import { IVoidFunc } from "~/Types/Shared/Types";
import { appTheme} from "~/Theme/Apptheme";
import { styles } from "./styles";
import { getContentImage } from "./utils/utils";

type Props = {
  movieContent: IMovieSummary;
  onPressFunc: IVoidFunc;
};

const MovieCard: React.FC<Props> = ({
  movieContent: { id, vote_average, poster_path, title, release_date }
}) => {
  const getImage = () => {
    return `https://image.tmdb.org/t/p/w500/${poster_path}`;
  };
  const {
    poster,
    titleText,
    details,
    detailsText,
    container,
    subContainer,
    detailsContainer,
    detailsTwo,
    subDetails,
    addMovieContainer,
    ratingsText,
    btn,
  } = styles;
  const getRating = () => {
    if (vote_average) {
      return Math.round(vote_average * 10) / 10;
    } else {
      return "---";
    }
  };
  return (
    <Animated.View
      style={[ container]}
    >
      <ImageBackground
        source={getContentImage(poster_path)}
        style={poster}
        resizeMode="cover"
        imageStyle={{ borderRadius: 15 }}
      >
        <View style={subContainer}>
          <View style={detailsContainer}>
            <View style={details}>
              <Text style={titleText}>{title}</Text>
              <Text style={detailsText}>
                {release_date ? release_date : "---"}
              </Text>
            </View>
            <View style={detailsTwo}>
              <View style={subDetails}>
                <FontAwesome name="imdb" size={33} color="gold" />
                <Text style={ratingsText}>{getRating()}</Text>
              </View>
              <View style={subDetails}>
                <TouchableOpacity
                  onPress={() => console.log("hie")}
                  style={btn}
                >
                  <Text style={detailsText}>view</Text>
                </TouchableOpacity>
                <TouchableOpacity style={addMovieContainer}>
                  <AntDesign
                    name="plus"
                    size={20}
                    color={appTheme.colors.white}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </Animated.View>
  );
};

export default MovieCard;
