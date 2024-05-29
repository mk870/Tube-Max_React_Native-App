import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

type Props = {}

const TvShowEpisode = (props: Props) => {
  const{number,showId,seasonNumber} = useLocalSearchParams()
  console.log(number,seasonNumber,showId)
  return (
    <View>
      <Text>TvShowEpisode</Text>
    </View>
  )
}

export default TvShowEpisode

const styles = StyleSheet.create({})