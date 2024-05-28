import { View, StyleSheet } from "react-native";
import React from "react";

const StackWrapper = (Stack: React.FC) => {
  const useStackWrapper = (props: any) => {
    return (
      <View style={styles.container}>
        <Stack {...props} />
      </View>
    );
  };
  return useStackWrapper;
};

export default StackWrapper;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
