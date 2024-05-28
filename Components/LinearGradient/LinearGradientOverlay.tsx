import { StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

type Props = {
  backGroundColor: string;
};

const LinearGradientOverlay: React.FC<Props> = ({ backGroundColor }) => {
  return (
    <LinearGradient
      style={styles.gradientOverlay}
      colors={["rgba(0,0,0,1)", backGroundColor, "rgba(0,0,0,1)"]}
      locations={[0.01, 0.4, 1]}
    />
  );
};

export default LinearGradientOverlay;

const styles = StyleSheet.create({
  gradientOverlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
});
