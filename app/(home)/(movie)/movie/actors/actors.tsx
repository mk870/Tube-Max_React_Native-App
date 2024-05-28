import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "~/HOCs/ScreenWrapper";
import { useLocalSearchParams, useRouter } from "expo-router";
import useFetchMovieCast from "~/Hooks/Movies/useFetchMovieCast";
import ScreenSpinner from "~/Components/Spinner/ScreenSpinner";
import HttpError from "~/Components/HttpError/HttpError";
import CastAndCrewCardWithDetails from "~/Components/Cards/CardsWithDetails/Movie/CastAndCrewCardWithDetails";
import { bold } from "~/Utils/Constants";
import { large, white } from "~/Theme/Apptheme";

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
