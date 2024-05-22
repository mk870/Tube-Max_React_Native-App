import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import { Skeleton } from "moti/skeleton";
import { medium } from "~/Utils/Constants";
import { large, white } from "~/Theme/Apptheme";

const SwipeableSkeleton: React.FC<{headerTitle:string}> = ({headerTitle}) => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const { container, skeletonStyles,headertext } = styles;
  return (
    <View style={container}>
        <Text style={headertext}>{headerTitle}</Text>
      <FlatList
        data={list}
        renderItem={() => (
          <View style={skeletonStyles}>
            <Skeleton colorMode="dark" height={320} width={220} />
          </View>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default SwipeableSkeleton;
const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  skeletonStyles: {
    marginHorizontal: 5,
  },
  headertext: {
    fontFamily: medium,
    fontSize: large,
    color: white,
    marginLeft: 10,
  },
});
