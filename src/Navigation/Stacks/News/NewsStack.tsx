import React from "react";
import { Stack, useRouter } from "expo-router";

import HeaderIcon from "~/src/Components/HeaderIcon/HeaderIcon";
import StackWrapper from "~/src/HOCs/StackWrapper";
import { background, white } from "~/src/Theme/Apptheme";
import { bold, stackAnimation } from "~/src/Utils/Constants";

const NewsStack = () => {
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
        name="news/index"
        options={{
          headerShown: false,
          animation: stackAnimation
        }}
      />
      <Stack.Screen
        name="news/[id]"
        options={{
          headerShown: false,
          animation: stackAnimation
        }}
      />
    </Stack>
  );
};

export default StackWrapper(NewsStack);
