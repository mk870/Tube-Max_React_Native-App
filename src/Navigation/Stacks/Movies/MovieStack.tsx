import React from 'react'
import { Stack, useRouter } from 'expo-router';

import HeaderIcon from '~/src/Components/HeaderIcon/HeaderIcon';
import StackWrapper from '~/src/HOCs/StackWrapper';
import { background, white } from '~/src/Theme/Apptheme';
import { bold, stackAnimation } from '~/src/Utils/Constants';

const MovieStack = () => {
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
          name="movie/[id]"
          options={{
            headerShown:false,
            animation: stackAnimation
          }}
        />
        <Stack.Screen
          name="movie/video/[type]"
          options={{
            headerShown:false,
            animation: stackAnimation
          }}
        />
        <Stack.Screen
          name="movie/actors/[id]"
          options={{
            headerShown:false,
            animation: stackAnimation
          }}
        />
        <Stack.Screen
          name="movie/actors/actors"
          options={{
            title: "Actors",
            animation: stackAnimation
          }}
        />
        <Stack.Screen
          name="movie/actors/crew"
          options={{
            title: "Crew",
            animation: stackAnimation
          }}
        />
      </Stack>
  )
}

export default StackWrapper(MovieStack)