import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";

import CastAndCrewCardWithDetails from "~/src/Components/Cards/CardsWithDetails/Movie/CastAndCrewCardWithDetails";
import HttpError from "~/src/Components/HttpError/HttpError";
import ScreenSpinner from "~/src/Components/Spinner/ScreenSpinner";
import ScreenWrapper from "~/src/HOCs/ScreenWrapper";
import useFetchMovieCast from "~/src/Hooks/Movies/useFetchMovieCast";
import { large, white } from "~/src/Theme/Apptheme";
import { bold } from "~/src/Utils/Constants";


const actors = () => {
  const { movieId, name } = useLocalSearchParams();
  const { cast, isLoading, error } = useFetchMovieCast(Number(movieId));
  const router = useRouter();
  return (
    <ScrollView contentContainerStyle={{ flex: 1, paddingHorizontal: 10 }}>
      {isLoading && <ScreenSpinner />}
      {error && <HttpError />}
      {cast && (
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.header}>{name}</Text>
          <View style={styles.castContainer}>
            {cast.cast?.map((actor, index) => (
              <CastAndCrewCardWithDetails
                key={index}
                content={actor}
                onPressFunc={() => router.push(`movie/actors/${actor.id}`)}
                type="cast"
              />
            ))}
          </View>
        </ScrollView>
      )}
    </ScrollView>
  );
};

export default ScreenWrapper(actors);

const styles = StyleSheet.create({
  castContainer: {
    marginTop: 10,
    gap: 15,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  header: {
    fontFamily: bold,
    fontSize: large,
    color: white,
  },
});
