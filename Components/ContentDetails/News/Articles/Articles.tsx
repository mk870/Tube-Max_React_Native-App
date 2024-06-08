import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { INews } from '~/Types/Apis/News/News'

type Props = {
    articles:INews[]
}

const Articles:React.FC<Props> = ({articles}) => {
  return (
    <View>
      <Text>Articles</Text>
    </View>
  )
}

export default Articles

const styles = StyleSheet.create({})