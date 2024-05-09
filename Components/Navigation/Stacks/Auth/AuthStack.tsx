import React from "react";
import { Stack, useRouter } from "expo-router";

import { appTheme } from "../../../../Theme/Apptheme";
import { bold } from "../../../../Utils/Constants";
import HeaderIcon from "../../../HeaderIcon/HeaderIcon";
import StackWrapper from "../../../../HOCs/StackWrapper";

type Props = {};

const AuthStack = (props: Props) => {
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
    </Stack>
  );
};

export default StackWrapper(AuthStack);
