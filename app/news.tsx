import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../HOCs/ScreenWrapper'

type Props = {}

const news = (props: Props) => {
  return (
    <View>
      <Text>news</Text>
    </View>
  )
}

export default ScreenWrapper(news)

const styles = StyleSheet.create({})