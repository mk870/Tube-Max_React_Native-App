import { ScrollView, StyleSheet, Text } from "react-native";
import React from "react";
import ScreenWrapper from "~/HOCs/ScreenWrapper";
import HttpError from "~/Components/HttpError/HttpError";
import ScreenSpinner from "~/Components/Spinner/ScreenSpinner";
import { useLocalSearchParams } from "expo-router";
import useFetchMovieCast from "~/Hooks/Movies/useFetchMovieCast";
import CastAndCrewCardWithDetails from "~/Components/Cards/CardsWithDetails/Movie/CastAndCrewCardWithDetails";
import { bold } from "~/Utils/Constants";
import { large, white } from "~/Theme/Apptheme";
import { View } from "react-native-animatable";

const crew = () => {
  const { movieId,name } = useLocalSearchParams();
  const { cast, isLoading, error } = useFetchMovieCast(Number(movieId));
  return (
    <ScrollView contentContainerStyle={{ flex: 1, paddingHorizontal: 10 }}>
      {isLoading && <ScreenSpinner />}
      {error && <HttpError />}
      {cast && (
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.header}>{name}</Text>
          <View style={styles.castContainer}>
          {cast.crew?.map((crew, index) => (
            <CastAndCrewCardWithDetails key={index} content={crew} type="crew" />
          ))}
          </View>
        </ScrollView>
      )}
    </ScrollView>
  );
};

export default ScreenWrapper(crew);

const styles = StyleSheet.create({
  castContainer: {
    marginTop:10,
    gap: 15,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  header:{
    fontFamily:bold,
    fontSize:large,
    color: white
  }
});
