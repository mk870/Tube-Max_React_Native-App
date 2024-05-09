import { View, Text } from "react-native";
import React from "react";
import { Stack, useRouter } from "expo-router";
import { appTheme } from "../../../../Theme/Apptheme";
import { bold } from "../../../../Utils/Constants";
import HeaderIcon from "../../../HeaderIcon/HeaderIcon";
import StackWrapper from "../../../../HOCs/StackWrapper";

type Props = {};

const SearchStack = (props: Props) => {
  const router = useRouter();
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: appTheme.colors.background,
        },
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
          title: "Search",
        }}
      />
      <Stack.Screen
        name="results"
        options={{
          title: "Results",
        }}
      />
    </Stack>
  );
};

export default StackWrapper(SearchStack);
