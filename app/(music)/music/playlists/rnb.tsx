import { View } from 'react-native'
import React from 'react'

import ScreenWrapper from '~/HOCs/ScreenWrapper'
import useFetchRnB from '~/Hooks/Music/Playlists/useFetchRnB'
import HttpError from '~/Components/HttpError/HttpError'
import ScreenSpinner from '~/Components/Spinner/ScreenSpinner'
import VerticalSwipeable from '~/Components/Swipeables/Vertical/VerticalSwipeable'

const rnb = () => {
  const{data,error,isLoading} = useFetchRnB()
  return (
    <View style={{ alignItems: "center", flex: 1 }}>
      {isLoading && <ScreenSpinner />}
      {error && <HttpError />}
      {data && (
        <VerticalSwipeable type="playlist" content={data} />
      )}
    </View>
  )
}

export default ScreenWrapper(rnb)