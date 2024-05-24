import React from "react";
import { useRouter, Stack } from "expo-router";
import HeaderIcon from "~/Components/HeaderIcon/HeaderIcon";
import { background, white } from "~/Theme/Apptheme";
import { bold } from "~/Utils/Constants";
import StackWrapper from "~/HOCs/StackWrapper";

type Props = {};

const FavoritesStack = (props: Props) => {
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
        }}
      />
      <Stack.Screen
        name="favorites/movies"
        options={{
          title: "fav movies",
        }}
      />
      <Stack.Screen
        name="favorites/tracks"
        options={{
          title: "Actor",
        }}
      />
      <Stack.Screen
        name="favorites/tvShows"
        options={{
          title: "Actors",
        }}
      />
    </Stack>
  );
};

export default StackWrapper(FavoritesStack);
