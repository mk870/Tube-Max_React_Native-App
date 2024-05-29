import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ScreenWrapper from '~/HOCs/ScreenWrapper'
import HttpError from '~/Components/HttpError/HttpError'
import ScreenSpinner from '~/Components/Spinner/ScreenSpinner'
import VerticalSwipeable from '~/Components/Swipeables/Vertical/VerticalSwipeable'
import useFetchMoreShows from '~/Hooks/TvShows/useFetchMoreShows'

const popular = () => {
  const { data, isLoading, error } = useFetchMoreShows("popular");
  return (
    <View
      style={styles.container}
    >
      { isLoading && <ScreenSpinner />}
      {error && <HttpError />}
      {data && <VerticalSwipeable type="tvShow" content={data} />}
    </View>
  );
}

export default ScreenWrapper(popular)
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex:1
  },
});