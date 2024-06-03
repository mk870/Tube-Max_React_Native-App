import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '~/HOCs/ScreenWrapper'

type Props = {}

const Track = (props: Props) => {
  return (
    <View>
      <Text>Track</Text>
    </View>
  )
}

export default ScreenWrapper(Track)

const styles = StyleSheet.create({})