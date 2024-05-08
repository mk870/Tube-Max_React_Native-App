import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../../HOCs/ScreenWrapper'

type Props = {}

const results = (props: Props) => {
  return (
    <View>
      <Text>results</Text>
    </View>
  )
}

export default ScreenWrapper(results)

const styles = StyleSheet.create({})