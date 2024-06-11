import { Stack, useRouter } from "expo-router";
import React from "react";

import HeaderIcon from "~/src/Components/HeaderIcon/HeaderIcon";
import StackWrapper from "~/src/HOCs/StackWrapper";
import { background, white } from "~/src/Theme/Apptheme";
import { bold, stackAnimation } from "~/src/Utils/Constants";

const TVshowStack = () => {
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
        name="tvshow/[id]"
        options={{
          headerShown: false,
          animation: stackAnimation
        }}
      />
      <Stack.Screen
        name="tvshow/video/[type]"
        options={{
          headerShown: false,
          animation: stackAnimation
        }}
      />
      <Stack.Screen
        name="tvshow/actors/[id]"
        options={{
          headerShown: false,
          animation: stackAnimation
        }}
      />
      <Stack.Screen
        name="tvshow/season/[number]"
        options={{
          headerShown: false,
          animation: stackAnimation
        }}
      />
      <Stack.Screen
        name="tvshow/season/episode/[number]"
        options={{
          headerShown: false,
          animation: stackAnimation
        }}
      />
    </Stack>
  );
};

export default StackWrapper(TVshowStack);
