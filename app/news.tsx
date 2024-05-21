import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../HOCs/ScreenWrapper'
import useFetchNews from '~/Hooks/News/useFetchNews'


const news = () => {
  // const news = useFetchNews("albums")
  return (
    <View>
      <Text>news</Text>
    </View>
  )
}

export default ScreenWrapper(news)

const styles = StyleSheet.create({})