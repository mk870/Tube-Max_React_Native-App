import { View } from 'react-native'
import React from 'react'

import HttpError from '~/src/Components/HttpError/HttpError'
import ScreenSpinner from '~/src/Components/Spinner/ScreenSpinner'
import VerticalSwipeable from '~/src/Components/Swipeables/Vertical/VerticalSwipeable'
import ScreenWrapper from '~/src/HOCs/ScreenWrapper'
import useFetchRnB from '~/src/Hooks/Music/Playlists/useFetchRnB'

const RnB = () => {
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

export default ScreenWrapper(RnB)