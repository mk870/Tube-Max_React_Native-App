import { ScrollView } from 'react-native'
import React from 'react'
import HttpError from '~/Components/HttpError/HttpError';
import VerticalSwipeable from '~/Components/Swipeables/Vertical/VerticalSwipeable';
import useFetchMoreMovies from '~/Hooks/Movies/useFetchMoreMovies';
import ScreenWrapper from '~/HOCs/ScreenWrapper';
import VerticalSwipeableSkeleton from '~/Components/SkeletonLoaders/Swipeable/Vertical/VerticalSkeleton';

const popular = () => {
  const { data, error, isLoading } = useFetchMoreMovies("popular");
  return (
    <ScrollView>
      {isLoading && <VerticalSwipeableSkeleton/>}
      {error && <HttpError />}
      {data && <VerticalSwipeable type="movie" content={data} />}
    </ScrollView>
  );
}

export default ScreenWrapper(popular)
