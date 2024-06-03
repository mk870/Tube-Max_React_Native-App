import React from "react";
import { Stack, useRouter } from "expo-router";
import HeaderIcon from "~/Components/HeaderIcon/HeaderIcon";
import { background, white } from "~/Theme/Apptheme";
import { bold } from "~/Utils/Constants";
import StackWrapper from "~/HOCs/StackWrapper";

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
        }}
      />
      <Stack.Screen
        name="music/track/[id]"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="music/playlist/[id]"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="music/playlists/trending"
        options={{
          title: "Trending",
        }}
      />
      <Stack.Screen
        name="music/playlists/hiphop"
        options={{
          title: "Hip Hop",
        }}
      />
      <Stack.Screen
        name="music/playlists/rnb"
        options={{
          title: "RNB",
        }}
      />
      <Stack.Screen
        name="music/playlists/electro"
        options={{
          title: "Electro",
        }}
      />
      <Stack.Screen
        name="music/artists/[id]"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="music/artists/trending"
        options={{
          title: "Trending Artists",
        }}
      />
      <Stack.Screen
        name="music/albums/[id]"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="music/albums/latest"
        options={{
          title: "Latest Albums",
        }}
      />
    </Stack>
  );
};

export default StackWrapper(MusicStack);
