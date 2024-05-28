import { ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import HttpError from '~/Components/HttpError/HttpError';
import VerticalSwipeable from '~/Components/Swipeables/Vertical/VerticalSwipeable';
import useFetchMoreMovies from '~/Hooks/Movies/useFetchMoreMovies';
import ScreenWrapper from '~/HOCs/ScreenWrapper';
import ScreenSpinner from '~/Components/Spinner/ScreenSpinner';


const topRated = () => {
  const { data, error, isLoading } = useFetchMoreMovies("top_rated");
  return (
    <ScrollView contentContainerStyle={{ alignItems: "center" }}>
      {isLoading && <ScreenSpinner/>}
      {error && <HttpError />}
      {data && <VerticalSwipeable type="movie" content={data} />}
    </ScrollView>
  );
}

export default ScreenWrapper(topRated)

const styles = StyleSheet.create({})