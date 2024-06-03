import { View } from 'react-native'
import React from 'react'

import ScreenWrapper from '~/HOCs/ScreenWrapper'
import useFetchHipHop from '~/Hooks/Music/Playlists/useFetchHipHop'
import HttpError from '~/Components/HttpError/HttpError'
import ScreenSpinner from '~/Components/Spinner/ScreenSpinner'
import VerticalSwipeable from '~/Components/Swipeables/Vertical/VerticalSwipeable'


const hiphop = () => {
  const{hipHopPlaylists,error,isLoading}= useFetchHipHop()
  return (
    <View style={{ alignItems: "center", flex: 1 }}>
      {isLoading && <ScreenSpinner />}
      {error && <HttpError />}
      {hipHopPlaylists && (
        <VerticalSwipeable type="playlist" content={hipHopPlaylists} />
      )}
    </View>
  )
}

export default ScreenWrapper(hiphop)
