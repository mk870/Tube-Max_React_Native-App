import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { appTheme } from '../../Theme/Apptheme'


const ButtonSpinner = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={"large"} color={appTheme.colors.white} />
    </View>
  )
}

export default ButtonSpinner

const styles = StyleSheet.create({
    container:{
        width:"100%"
    }
})