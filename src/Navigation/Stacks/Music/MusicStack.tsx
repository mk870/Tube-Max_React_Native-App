import React from "react";
import { Stack, useRouter } from "expo-router";

import HeaderIcon from "~/src/Components/HeaderIcon/HeaderIcon";
import StackWrapper from "~/src/HOCs/StackWrapper";
import { background, white } from "~/src/Theme/Apptheme";
import { bold, stackAnimation } from "~/src/Utils/Constants";

const MusicStack = () => {
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
        name="music/index"
        options={{
          headerShown: false,
          animation: stackAnimation
        }}
      />
      <Stack.Screen
        name="music/track/[id]"
        options={{
          headerShown: false,
          animation: stackAnimation
        }}
      />
      <Stack.Screen
        name="music/playlist/[id]"
        options={{
          headerShown: false,
          animation: stackAnimation
        }}
      />
      <Stack.Screen
        name="music/playlists/trending"
        options={{
          title: "Trending",
          animation: stackAnimation
        }}
      />
      <Stack.Screen
        name="music/playlists/hiphop"
        options={{
          title: "Hip Hop",
          animation: stackAnimation
        }}
      />
      <Stack.Screen
        name="music/playlists/rnb"
        options={{
          title: "RNB",
          animation: stackAnimation
        }}
      />
      <Stack.Screen
        name="music/playlists/electro"
        options={{
          title: "Electro",
          animation: stackAnimation
        }}
      />
      <Stack.Screen
        name="music/artists/[id]"
        options={{
          headerShown: false,
          animation: stackAnimation
        }}
      />
      <Stack.Screen
        name="music/artists/trending"
        options={{
          title: "Trending Artists",
          animation: stackAnimation
        }}
      />
      <Stack.Screen
        name="music/albums/[id]"
        options={{
          headerShown: false,
          animation: stackAnimation
        }}
      />
      <Stack.Screen
        name="music/albums/latest"
        options={{
          title: "Latest Albums",
          animation: stackAnimation
        }}
      />
      <Stack.Screen
        name="music/video/[type]"
        options={{
          headerShown: false,
          animation: stackAnimation
        }}
      />
    </Stack>
  );
};

export default StackWrapper(MusicStack);
