import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../../HOCs/ScreenWrapper'
import { useRouter } from 'expo-router'

type Props = {}

const search = (props: Props) => {
    const router = useRouter()
  return (
    <View>
      <TouchableOpacity onPress={()=>router.push("/results")}>
        <Text style={{color:"white"}}>go to register</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ScreenWrapper(search)

const styles = StyleSheet.create({})