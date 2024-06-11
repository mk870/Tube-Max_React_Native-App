import React from "react";
import { Stack, useRouter } from "expo-router";

import HeaderIcon from "~/src/Components/HeaderIcon/HeaderIcon";
import StackWrapper from "~/src/HOCs/StackWrapper";
import { appTheme } from "~/src/Theme/Apptheme";
import { bold, stackAnimation } from "~/src/Utils/Constants";

const SearchStack = () => {
  const router = useRouter();
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: appTheme.colors.background,
        },
        headerBackButtonMenuEnabled:false,
        headerTitleStyle: {
          fontFamily: bold,
          color: appTheme.colors.white,
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
        name="search"
        options={{
          headerShown: false,
          animation: stackAnimation
        }}
      />
      <Stack.Screen
        name="voiceSearch"
        options={{
          title: "Voice Search",
          presentation:"modal",
          animation: stackAnimation
        }}
      />
    </Stack>
  );
};

export default StackWrapper(SearchStack);
