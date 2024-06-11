import {
  GestureResponderEvent,
  ImageBackground,
  Pressable,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import { styles } from "../../Shared/styles";
import ButtonSpinner from "~/src/Components/Spinner/ButtonSpinner";
import { appTheme } from "~/src/Theme/Apptheme";
import { IMovieSummary } from "~/src/Types/Apis/Movies/SummaryMovieInfo";
import { unknown } from "~/src/Utils/Constants";
import { getTMDBImage } from "~/src/Utils/Funcs";

type Props = {
  movieContent: IMovieSummary;
};

const MovieCardWithDetails: React.FC<Props> = ({
  movieContent: { id, vote_average, poster_path, title, release_date },
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const route = useRouter();
  const navigate = () => {
    route.push(`movie/${id}`);
  };
  const addMovieToFavourites = (e: GestureResponderEvent) => {
    e.stopPropagation();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 3000);
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
      return unknown;
    }
  };
  return (
    <View style={[container]} onTouchEnd={navigate}>
      <ImageBackground
        source={getTMDBImage(poster_path)}
        style={poster}
        resizeMode="cover"
        imageStyle={{ borderRadius: 15 }}
      >
        <View style={subContainer}>
          <View style={detailsContainer}>
            <View style={details}>
              <Text style={titleText}>{title}</Text>
              <Text style={detailsText}>
                {release_date ? release_date : unknown}
              </Text>
            </View>
            <View style={detailsTwo}>
              <View style={subDetails}>
                <FontAwesome name="imdb" size={33} color="gold" />
                <Text style={ratingsText}>{getRating()}</Text>
              </View>
              <View style={subDetails}>
                <Pressable
                  style={btn}
                >
                  <Text style={detailsText}>view</Text>
                </Pressable>
                <Pressable
                  style={addMovieContainer}
                  onTouchEnd={(e) => addMovieToFavourites(e)}
                  disabled={isLoading ? true : false}
                >
                  {isLoading ? (
                    <ButtonSpinner />
                  ) : (
                    <AntDesign
                      name="plus"
                      size={20}
                      color={appTheme.colors.white}
                    />
                  )}
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default MovieCardWithDetails;
