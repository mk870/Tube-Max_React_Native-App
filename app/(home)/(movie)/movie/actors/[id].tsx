import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const Actor = () => {
  const {id} = useLocalSearchParams()
  return (
    <View>
      <Text>actor</Text>
    </View>
  )
}

export default Actor

const styles = StyleSheet.create({})