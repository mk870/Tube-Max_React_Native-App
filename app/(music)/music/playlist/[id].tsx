import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '~/HOCs/ScreenWrapper'

type Props = {}

const Playlist = (props: Props) => {
  return (
    <View>
      <Text>Playlist</Text>
    </View>
  )
}

export default ScreenWrapper(Playlist)

const styles = StyleSheet.create({})