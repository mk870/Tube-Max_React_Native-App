import React from "react";
import { Stack, useRouter } from "expo-router";

import { appTheme } from "../../../../Theme/Apptheme";
import { bold } from "../../../../Utils/Constants";
import HeaderIcon from "../../../HeaderIcon/HeaderIcon";
import StackWrapper from "../../../../HOCs/StackWrapper";
import InputField from "~/Components/InputField/InputField";

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
          headerShown: false
        }}
      />
      <Stack.Screen
        name="voiceSearch"
        options={{
          title: "Voice Search",
          presentation:"modal"
        }}
      />
    </Stack>
  );
};

export default StackWrapper(SearchStack);
