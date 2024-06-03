import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '~/HOCs/ScreenWrapper'

type Props = {}

const latest = (props: Props) => {
  return (
    <View>
      <Text>latest</Text>
    </View>
  )
}

export default ScreenWrapper(latest)

const styles = StyleSheet.create({})