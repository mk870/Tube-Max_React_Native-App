import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../HOCs/ScreenWrapper'

type Props = {}

const music = (props: Props) => {
  return (
    <View>
      <Text>music</Text>
    </View>
  )
}

export default ScreenWrapper(music)

const styles = StyleSheet.create({})