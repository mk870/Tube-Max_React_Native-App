import { Stack, useRouter } from "expo-router";
import React from "react";
import HeaderIcon from "~/Components/HeaderIcon/HeaderIcon";
import StackWrapper from "~/HOCs/StackWrapper";
import { background, white } from "~/Theme/Apptheme";
import { bold } from "~/Utils/Constants";

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
        }}
      />
      <Stack.Screen
        name="tvshow/video/[type]"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="tvshow/actors/[id]"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="tvshow/season/[number]"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="tvshow/season/episode/[number]"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default StackWrapper(TVshowStack);
