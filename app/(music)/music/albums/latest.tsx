import { StyleSheet, View } from 'react-native'
import React from 'react'

import ScreenWrapper from '~/HOCs/ScreenWrapper'
import ScreenSpinner from '~/Components/Spinner/ScreenSpinner'
import useFetchLatestAlbums from '~/Hooks/Music/Album/useFetchLatestAlbums'
import HttpError from '~/Components/HttpError/HttpError'
import VerticalSwipeable from '~/Components/Swipeables/Vertical/VerticalSwipeable'


const latest = () => {
  const{data,error,isLoading} =useFetchLatestAlbums()
  return (
    <View style={styles.container}>
      {isLoading &&<ScreenSpinner/>}
      {error && <HttpError/>}
      {data && <VerticalSwipeable type='album' content={data}/>}
    </View>
  )
}

export default ScreenWrapper(latest)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
})