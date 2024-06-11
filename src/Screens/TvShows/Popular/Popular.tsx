import { View, StyleSheet } from 'react-native'
import React from 'react'

import HttpError from '~/src/Components/HttpError/HttpError';
import ScreenSpinner from '~/src/Components/Spinner/ScreenSpinner';
import VerticalSwipeable from '~/src/Components/Swipeables/Vertical/VerticalSwipeable';
import ScreenWrapper from '~/src/HOCs/ScreenWrapper';
import useFetchMoreShows from '~/src/Hooks/TvShows/useFetchMoreShows';

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