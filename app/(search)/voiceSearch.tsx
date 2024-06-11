import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '~/src/HOCs/ScreenWrapper'
import { IReactNoPropElement } from '~/src/Types/ReactComponents/Types'

const voiceSearch:IReactNoPropElement = () => {
  return (
    <View>
      <Text>results</Text>
    </View>
  )
}

export default ScreenWrapper(voiceSearch)

const styles = StyleSheet.create({})