import React from "react";
import { Stack, useRouter } from "expo-router";

import HeaderIcon from "~/src/Components/HeaderIcon/HeaderIcon";
import StackWrapper from "~/src/HOCs/StackWrapper";
import { background, white } from "~/src/Theme/Apptheme";
import { bold } from "~/src/Utils/Constants";

const MoviesStack = () => {
  const router = useRouter();
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: background,
        },
        headerTitleStyle: {
          fontFamily: bold,
          color: white,
        },
        headerTitleAlign: "center",
        headerLeft: () => (
          <HeaderIcon
            iconSize={24}
            iconName="arrow-back"
            onPressFunc={() => router.back()}
          />
        ),
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerShown:false
        }}
      />
      <Stack.Screen
        name="movies/index"
        options={{
          headerShown:false
        }}
      />
      <Stack.Screen
        name="(movie)"
        options={{
          headerShown:false
        }}
      />
      <Stack.Screen
        name="movies/inTheatres"
        options={{
          title: "Showing in Theatres"
        }}
      />
      <Stack.Screen
        name="movies/popular"
        options={{
          title: "Most Popular",
        }}
      />
      <Stack.Screen
        name="movies/topRated"
        options={{
          title: "Top Rated",
        }}
      />
    </Stack>
  );
};

export default StackWrapper(MoviesStack);
