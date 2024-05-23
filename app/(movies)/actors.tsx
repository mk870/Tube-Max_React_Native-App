import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '~/HOCs/ScreenWrapper'

type Props = {}

const actors = (props: Props) => {
  return (
    <View>
      <Text>actors</Text>
    </View>
  )
}

export default ScreenWrapper(actors)

const styles = StyleSheet.create({})