import { StyleSheet, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter } from 'expo-router';

import HeaderIcon from '~/Components/HeaderIcon/HeaderIcon';
import VideoDetails from '~/Components/VideoDetails/VideoDetails';
import ScreenWrapper from '~/HOCs/ScreenWrapper';

const video = () => {
  const { queryString, type } = useLocalSearchParams();
  const route = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        <HeaderIcon iconName="arrow-back" onPressFunc={() => route.back()} />
      </View>
      <VideoDetails
        type={type ? (Array.isArray(type) ? "" : type) : ""}
        videoQueryString={
          queryString ? (Array.isArray(queryString) ? "" : queryString) : ""
        }
      />
    </SafeAreaView>
  );
}

export default ScreenWrapper(video)

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    flexDirection: "column",
    flex: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    backgroundColor: "black",
  },
});