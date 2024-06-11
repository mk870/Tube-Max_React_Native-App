import {
  GestureResponderEvent,
  ImageBackground,
  Pressable,
  Text,
  View,
} from "react-native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import { useRouter } from "expo-router";

import { styles } from "../../Shared/styles";
import ButtonSpinner from "~/src/Components/Spinner/ButtonSpinner";
import { appTheme } from "~/src/Theme/Apptheme";
import { IShowSummary } from "~/src/Types/Apis/TvShows/ShowSummary";
import { unknown } from "~/src/Utils/Constants";
import { getTMDBImage } from "~/src/Utils/Funcs";

type Props = {
  show: IShowSummary;
};

const TvShowCardWithDetails: React.FC<Props> = ({
  show: { id, poster_path, vote_average, name, first_air_date },
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const route = useRouter();
  const navigate = () => {
    route.push(`/tvshow/${id}`);
  };
  const addMovieToFavourites = (e: GestureResponderEvent) => {
    e.stopPropagation();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 3000);
  };
  const getRating = () => {
    if (vote_average) {
      return Math.round(vote_average * 10) / 10;
    } else {
      return unknown;
    }
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
              <Text style={titleText}>{name ? name : unknown}</Text>
              <Text style={detailsText}>
                {first_air_date ? first_air_date : unknown}
              </Text>
            </View>
            <View style={detailsTwo}>
              <View style={subDetails}>
                <FontAwesome name="imdb" size={33} color="gold" />
                <Text style={ratingsText}>{getRating()}</Text>
              </View>
              <View style={subDetails}>
                <Pressable style={btn}>
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

export default TvShowCardWithDetails;
