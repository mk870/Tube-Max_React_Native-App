import { View, Text } from 'react-native'
import React from 'react'
import { Stack, useRouter } from 'expo-router';
import HeaderIcon from '~/Components/HeaderIcon/HeaderIcon';
import { background, white } from '~/Theme/Apptheme';
import { bold } from '~/Utils/Constants';
import StackWrapper from '~/HOCs/StackWrapper';


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
            headerShown:false
          }}
        />
         <Stack.Screen
          name="movie/recommendations"
          options={{
            title:"Recommendations"
          }}
        />
        <Stack.Screen
          name="movie/actors/[id]"
          options={{
            title: "Actor"
          }}
        />
        <Stack.Screen
          name="movie/actors/actors"
          options={{
            title: "Actors",
          }}
        />
        <Stack.Screen
          name="movie/actors/crew"
          options={{
            title: "Crew",
          }}
        />
      </Stack>
  )
}

export default StackWrapper(MovieStack)