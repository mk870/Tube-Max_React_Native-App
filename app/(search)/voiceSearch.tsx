import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IReactNoPropElement } from '~/Types/ReactComonents/Types'
import ScreenWrapper from '~/HOCs/ScreenWrapper'

const voiceSearch:IReactNoPropElement = () => {
  return (
    <View>
      <Text>results</Text>
    </View>
  )
}

export default ScreenWrapper(voiceSearch)

const styles = StyleSheet.create({})