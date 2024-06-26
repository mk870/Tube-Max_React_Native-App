import React from "react";
import { useRouter } from "expo-router";
import { View, StyleSheet, Alert } from "react-native";

import ScreenWrapper from "~/src/HOCs/ScreenWrapper";
import { expoSecureValueKeyNames } from "~/src/Utils/Constants";
import { getSecureValue } from "~/src/Utils/Funcs";
import ScreenSpinner from "~/src/Components/Spinner/ScreenSpinner";
import { useAppDispatch } from "~/src/Redux/Hooks/Hooks";
import { updateAccessToken } from "~/src/Redux/Slices/AccessToken/AccessTokenSlice";
import { IReactNoPropElement } from "~/src/Types/ReactComponents/Types";

const RootRoute: IReactNoPropElement = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  getSecureValue(expoSecureValueKeyNames.accessToken)
    .then((value: string | null) => {
      if (value) {
        dispatch(updateAccessToken(value));
        router.replace("/movies");
      } else {
        dispatch(updateAccessToken(null));
        router.replace("/movies");
      }
    })
    .catch((e) => {
      console.log("get error", e);
      Alert.alert(
        "AccessToken Retrivial Error",
        "please retry again later",
        [
          {
            text: "Cancel",
            style: "cancel",
            onPress: () => router.replace("/movies"),
          },
        ],
        {
          cancelable: true,
          userInterfaceStyle: "dark",
        }
      );
    });
  return (
    <View style={styles.container}>
      <ScreenSpinner />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default ScreenWrapper(RootRoute);
