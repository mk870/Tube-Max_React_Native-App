import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../HOCs/ScreenWrapper'

type Props = {}

const favorites = (props: Props) => {
  return (
    <View>
      <Text>favorites</Text>
    </View>
  )
}

export default ScreenWrapper(favorites)

const styles = StyleSheet.create({})