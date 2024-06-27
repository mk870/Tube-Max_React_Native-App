import React from "react";
import Toast from "react-native-root-toast";

import { primary, small, white } from "~/src/Theme/Apptheme";
import { regular } from "~/src/Utils/Constants";

type Props = {
  message: string;
  isVisible: boolean;
};

const ToasterNotification: React.FC<Props> = ({ message, isVisible }) => {
  return (
    <Toast
      visible={isVisible}
      animation
      shadow
      backgroundColor={primary}
      textColor={white}
      position={60}
      hideOnPress
      duration={2000}
      containerStyle={{
        minWidth: 180,
        borderRadius:20
      }}
      textStyle={{
        fontFamily: regular,
        fontSize: small,
      }}
    >
      {message}
    </Toast>
  );
};

export default ToasterNotification;
