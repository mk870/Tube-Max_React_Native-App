import React from "react";
import { Stack, useRouter } from "expo-router";
import { bold } from "~/Utils/Constants";
import { background, white } from "~/Theme/Apptheme";
import HeaderIcon from "~/Components/HeaderIcon/HeaderIcon";
import StackWrapper from "~/HOCs/StackWrapper";

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
