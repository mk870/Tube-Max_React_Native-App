import { View } from 'react-native'
import React from 'react'

import ScreenWrapper from '~/HOCs/ScreenWrapper'
import useFetchTopArtists from '~/Hooks/Music/Artists/useFetchTopArtists';
import HttpError from '~/Components/HttpError/HttpError';
import ScreenSpinner from '~/Components/Spinner/ScreenSpinner';
import VerticalSwipeable from '~/Components/Swipeables/Vertical/VerticalSwipeable';


const trending = () => {
  const {data,isLoading,error} = useFetchTopArtists();
  return (
    <View style={{ alignItems: "center", flex: 1 }}>
      {isLoading && <ScreenSpinner />}
      {error && <HttpError />}
      {data && (
        <VerticalSwipeable type="artists" content={data} />
      )}
    </View>
  )
}

export default ScreenWrapper(trending)
