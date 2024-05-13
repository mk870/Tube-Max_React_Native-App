import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ISearchResultsProps } from './types'
import { regular } from '~/Utils/Constants'
import { medium, white } from '~/Theme/Apptheme'


const SearchResults:React.FC<ISearchResultsProps> = ({searchFilters,searchInput}) => {
  const {text} = styles
  return (
    <View>
      <Text style={text}>{searchInput}</Text>
      <Text style={text}>{searchFilters}</Text>
    </View>
  )
}

export default SearchResults

const styles = StyleSheet.create({
  text:{
    fontFamily:regular,
    fontSize: medium,
    color:white
  }
})