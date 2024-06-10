import React from "react";
import StackWrapper from "~/HOCs/StackWrapper";
import { Stack, useRouter } from "expo-router";

import HeaderIcon from "~/Components/HeaderIcon/HeaderIcon";
import { background, white } from "~/Theme/Apptheme";
import { bold } from "~/Utils/Constants";

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
        }}
      />
      <Stack.Screen
        name="news/[id]"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default StackWrapper(NewsStack);
