import { StyleSheet, View } from 'react-native'
import React from 'react'

import HttpError from '~/src/Components/HttpError/HttpError';
import ScreenSpinner from '~/src/Components/Spinner/ScreenSpinner';
import VerticalSwipeable from '~/src/Components/Swipeables/Vertical/VerticalSwipeable';
import ScreenWrapper from '~/src/HOCs/ScreenWrapper';
import useFetchMoreShows from '~/src/Hooks/TvShows/useFetchMoreShows';

const OnAir = () => {
  const { data, isLoading, error } = useFetchMoreShows("on_the_air");
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

export default ScreenWrapper(OnAir)

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex:1
  },
});