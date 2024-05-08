import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../HOCs/ScreenWrapper'
import { SafeAreaView } from 'react-native-safe-area-context'
import { screenStyles } from '../GlobalStyles/ScreenStyles'
import { StatusBar } from 'expo-status-bar'

type Props = {}

const Home = (props: Props) => {
  return (
    <ScrollView style={[screenStyles.container]}>
      <Text style={[screenStyles.text]}>Home</Text>
      <StatusBar style='auto'/>
    </ScrollView>
  )
}

export default ScreenWrapper(Home)

const styles = StyleSheet.create({})