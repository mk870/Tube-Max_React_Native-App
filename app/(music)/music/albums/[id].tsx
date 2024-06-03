import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '~/HOCs/ScreenWrapper'

type Props = {}

const Album = (props: Props) => {
  return (
    <View>
      <Text>Album</Text>
    </View>
  )
}

export default ScreenWrapper(Album)

const styles = StyleSheet.create({})