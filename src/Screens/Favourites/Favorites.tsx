import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

import ScreenWrapper from '~/src/HOCs/ScreenWrapper'

type Props = {}

const favorites = (props: Props) => {
  const router = useRouter()
  return (
    <View >
      <Text style={{color:"white"}}>favorites</Text>
      <Button title='go to fav movies' onPress={()=>router.push("favorites/movies")}/>
    </View>
  )
}

export default ScreenWrapper(favorites)

const styles = StyleSheet.create({})