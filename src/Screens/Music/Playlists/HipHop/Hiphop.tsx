import { View } from 'react-native'
import React from 'react'

import HttpError from '~/src/Components/HttpError/HttpError'
import ScreenSpinner from '~/src/Components/Spinner/ScreenSpinner'
import VerticalSwipeable from '~/src/Components/Swipeables/Vertical/VerticalSwipeable'
import ScreenWrapper from '~/src/HOCs/ScreenWrapper'
import useFetchHipHop from '~/src/Hooks/Music/Playlists/useFetchHipHop'

const Hiphop = () => {
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

export default ScreenWrapper(Hiphop)