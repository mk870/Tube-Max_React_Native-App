import { Alert, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { saveSecureValue } from '../../Utils/Funcs'
import { expoSecureValueKeyNames } from '../../Utils/Constants'

type Props = {}

const Logout = () => {
  return (
    Alert.alert(
        'Logout',
        'Are you sure?',
        [
          {
            text: 'Ok',
            onPress: ()=>saveSecureValue(expoSecureValueKeyNames.accessToken,""),
            style: 'cancel',
          },
          {
            text: 'Cancel',
            style: 'cancel',
          },
        ],
        {
          cancelable: true,
          userInterfaceStyle:"dark",
        },
      )
  )
}

export default Logout

const styles = StyleSheet.create({})