import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '~/HOCs/ScreenWrapper'
import HttpError from '~/Components/HttpError/HttpError';
import ScreenSpinner from '~/Components/Spinner/ScreenSpinner';
import VerticalSwipeable from '~/Components/Swipeables/Vertical/VerticalSwipeable';
import useFetchMoreShows from '~/Hooks/TvShows/useFetchMoreShows';


const onair = () => {
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

export default ScreenWrapper(onair)

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex:1
  },
});