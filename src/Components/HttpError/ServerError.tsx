import {
  Text,
  Modal,
  View,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import React from "react";

import { appTheme, background, lightPrimary } from "~/src/Theme/Apptheme";
import { bold, regular } from "~/src/Utils/Constants";

type Props = {
  handleCancel: () => void;
  message: string;
  isModalVisible: boolean;
};

const ServerError: React.FC<Props> = ({
  handleCancel,
  message,
  isModalVisible,
}) => {
  const { width } = useWindowDimensions();
  const { container, errorContainer, headerText, normalText, row, btn } =
    styles;
  return (
    <Modal
      visible={isModalVisible}
      onRequestClose={handleCancel}
      transparent
      animationType="slide"
    >
      <View style={container}>
        <View style={[errorContainer, { width: width > 500 ? 420 : 250 }]}>
          <Text style={headerText}>Error!</Text>
          <Text style={normalText}>{message}</Text>
          <View style={row}>
            <TouchableOpacity style={btn} onPress={handleCancel}>
              <Text style={normalText}>okay</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  errorContainer: {
    backgroundColor: background,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontFamily: bold,
    fontSize: appTheme.font.large,
    color: appTheme.colors.red,
    marginBottom: 10,
  },
  normalText: {
    color: appTheme.colors.white,
    fontFamily: regular,
    fontSize: appTheme.font.small,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  btn: {
    paddingVertical: 5,
    borderRadius: 5,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: lightPrimary,
  },
});

export default ServerError;
