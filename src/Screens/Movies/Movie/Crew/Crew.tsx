import { ScrollView, StyleSheet, Text,View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

import CastAndCrewCardWithDetails from "~/src/Components/Cards/CardsWithDetails/Movie/CastAndCrewCardWithDetails";
import HttpError from "~/src/Components/HttpError/HttpError";
import ScreenSpinner from "~/src/Components/Spinner/ScreenSpinner";
import ScreenWrapper from "~/src/HOCs/ScreenWrapper";
import useFetchMovieCast from "~/src/Hooks/Movies/useFetchMovieCast";
import { large, white } from "~/src/Theme/Apptheme";
import { bold } from "~/src/Utils/Constants";

const Crew = () => {
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

export default ScreenWrapper(Crew);

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