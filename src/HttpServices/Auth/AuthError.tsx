import { View, Text, Alert } from "react-native";
import React from "react";

type Props = {
  handleCancel: () => void;
  message:string
};

const AuthError: React.FC<Props> = ({ handleCancel,message }) => {
  return (
    <>
      {Alert.alert(
        "Error Message",
        message,
        [
          {
            text: "Cancel",
            onPress: handleCancel,
            style: "cancel",
          },
        ],
        { cancelable: true,userInterfaceStyle:"dark" }
      )}
    </>
  );
};

export default AuthError;
