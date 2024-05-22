import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '~/HOCs/ScreenWrapper'

type Props = {}

const Movie = (props: Props) => {
  return (
    <View>
      <Text>Movie</Text>
    </View>
  )
}

export default ScreenWrapper(Movie)

const styles = StyleSheet.create({})