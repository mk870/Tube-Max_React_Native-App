import React from "react";
import { Stack, useRouter } from "expo-router";

import HeaderIcon from "~/src/Components/HeaderIcon/HeaderIcon";
import StackWrapper from "~/src/HOCs/StackWrapper";
import { appTheme } from "~/src/Theme/Apptheme";
import { bold } from "~/src/Utils/Constants";

const AuthStack = () => {
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
        name="login"
        options={{
          title: "Login",
        }}
      />
      <Stack.Screen
        name="register"
        options={{
          title: "Register",
        }}
      />
      <Stack.Screen
        name="verification"
        options={{
          title: "Verification",
        }}
      />
    </Stack>
  );
};

export default StackWrapper(AuthStack);
