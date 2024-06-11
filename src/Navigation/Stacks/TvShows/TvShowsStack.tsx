import React from 'react'
import { Stack, useRouter } from 'expo-router';

import HeaderIcon from '~/src/Components/HeaderIcon/HeaderIcon';
import StackWrapper from '~/src/HOCs/StackWrapper';
import { background, white } from '~/src/Theme/Apptheme';
import { bold, stackAnimation } from '~/src/Utils/Constants';

const TvShowsStack = () => {
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
        name="tvshows/index"
        options={{
          headerShown:false,
          animation: stackAnimation
        }}
      />
      <Stack.Screen
        name="(tvshow)"
        options={{
          headerShown:false,
          animation: stackAnimation
        }}
      />
      <Stack.Screen
        name="tvshows/onair"
        options={{
          title: "On Air",
          animation: stackAnimation
        }}
      />
      <Stack.Screen
        name="tvshows/popular"
        options={{
          title: "Most Popular",
          animation: stackAnimation
        }}
      />
      <Stack.Screen
        name="tvshows/toprated"
        options={{
          title: "Top Rated",
          animation: stackAnimation
        }}
      />
    </Stack>
  )
}

export default StackWrapper(TvShowsStack)