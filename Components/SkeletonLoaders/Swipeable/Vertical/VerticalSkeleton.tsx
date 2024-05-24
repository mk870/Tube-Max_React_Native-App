import { StyleSheet, useWindowDimensions, View } from "react-native";
import React from "react";
import { Skeleton } from "moti/skeleton";

const VerticalSwipeableSkeleton = () => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const { width } = useWindowDimensions();
  const getHeight = () => {
    if (width > 700) return 320;
    else if (width > 358) return 270;
    else return 250;
  };
  const getWidth = () => {
    if (width > 700) return 220;
    else if (width > 358) return 170;
    else return 150;
  };
  return (
    <View style={styles.container}>
      {list.map((item) => (
        <Skeleton
          colorMode="dark"
          key={item}
          height={getHeight()}
          width={getWidth()}
        />
      ))}
    </View>
  );
};

export default VerticalSwipeableSkeleton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 5,
    flexWrap: "wrap",
    gap: 10,
    marginTop: 10,
  },
});
