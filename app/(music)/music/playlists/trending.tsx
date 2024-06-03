import { View } from 'react-native'
import React from 'react'

import ScreenWrapper from '~/HOCs/ScreenWrapper'
import useFetchTopList from '~/Hooks/Music/Playlists/useFetchTopList'
import HttpError from '~/Components/HttpError/HttpError'
import ScreenSpinner from '~/Components/Spinner/ScreenSpinner'
import VerticalSwipeable from '~/Components/Swipeables/Vertical/VerticalSwipeable'

const Trending = () => {
  const{data,error,isLoading} = useFetchTopList()
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

export default ScreenWrapper(Trending)