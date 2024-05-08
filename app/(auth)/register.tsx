import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../../HOCs/ScreenWrapper'

type Props = {}

const register = (props: Props) => {
  return (
    <View>
      <Text>register</Text>
    </View>
  )
}

export default ScreenWrapper(register)

const styles = StyleSheet.create({})