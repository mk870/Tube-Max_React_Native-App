import React from "react";
import { useRouter, Stack } from "expo-router";

import HeaderIcon from "~/src/Components/HeaderIcon/HeaderIcon";
import StackWrapper from "~/src/HOCs/StackWrapper";
import { background, white } from "~/src/Theme/Apptheme";
import { bold, stackAnimation } from "~/src/Utils/Constants";

const FavoritesStack = () => {
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
        name="favorites/index"
        options={{
          headerShown: false,
          animation: stackAnimation
        }}
      />
      <Stack.Screen
        name="favorites/movies"
        options={{
          title: "fav movies",
          animation: stackAnimation
        }}
      />
      <Stack.Screen
        name="favorites/tracks"
        options={{
          title: "Actor",
          animation: stackAnimation
        }}
      />
      <Stack.Screen
        name="favorites/tvShows"
        options={{
          title: "Actors",
          animation: stackAnimation
        }}
      />
    </Stack>
  );
};

export default StackWrapper(FavoritesStack);
