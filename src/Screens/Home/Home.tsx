import React from "react";
import { Redirect } from "expo-router";
import ScreenWrapper from "~/src/HOCs/ScreenWrapper";

const RootRoute = () => {
  return <Redirect href={"/movies"} />;
};

export default ScreenWrapper(RootRoute);
