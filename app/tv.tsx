import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../HOCs/ScreenWrapper'

type Props = {}

const tv = (props: Props) => {
  return (
    <View>
      <Text>tv</Text>
    </View>
  )
}

export default ScreenWrapper(tv)

const styles = StyleSheet.create({})