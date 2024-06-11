import {
  DimensionValue,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { Zocial, Feather, Ionicons } from "@expo/vector-icons";

import { appTheme } from "../../Theme/Apptheme";
import { ContentType } from "./Types/Types";
import { IVoidFunc } from "~/src/Types/Shared/Types";

type Props = {
  width: DimensionValue;
  height: DimensionValue;
  placeHolder: string;
  handleOnChangeText: (text: string) => void;
  handleOnEnter?: IVoidFunc;
  textValue: string | undefined;
  contentType: ContentType;
  type: string;
  label?: string;
  isFocused?: boolean;
  backgroundColor?: string;
};

const InputField: React.FC<Props> = ({
  width,
  height,
  placeHolder,
  handleOnChangeText,
  textValue,
  contentType,
  type,
  label,
  isFocused,
  backgroundColor,
  handleOnEnter,
}) => {
  const [ispassWordHidden, setIsPassWordHidden] = useState<boolean>(true);
  const iconSize = 20;
  const iconColor = "gray";
  const secureText = () => {
    if (type === "password") {
      if (ispassWordHidden) return true;
      else return false;
    } else return false;
  };

  return (
    <View style={styles(width, height).container}>
      {label && <Text style={styles(width, height).labelText}>{label}</Text>}
      <View style={styles(width, height).inputWrapper}>
        {type === "emailAddress" && (
          <Zocial
            name="email"
            size={iconSize}
            color={iconColor}
            style={styles(width, height).icon}
          />
        )}
        {type === "search" && (
          <Feather
            name="search"
            size={iconSize}
            color={iconColor}
            style={styles(width, height).icon}
            onPress={handleOnEnter}
          />
        )}
        {type === "password" && ispassWordHidden && (
          <Feather
            name="eye"
            size={iconSize}
            color={iconColor}
            style={styles(width, height).icon}
            onPress={() => setIsPassWordHidden((value) => !value)}
          />
        )}
        {type === "password" && !ispassWordHidden && (
          <Feather
            name="eye-off"
            size={iconSize}
            color={iconColor}
            style={styles(width, height).icon}
            onPress={() => setIsPassWordHidden((value) => !value)}
          />
        )}
        {type === "givenName" && (
          <Ionicons
            name="person"
            size={iconSize}
            color={iconColor}
            style={styles(width, height).icon}
          />
        )}
        {type === "familyName" && (
          <Ionicons
            name="people"
            size={iconSize}
            color={iconColor}
            style={styles(width, height).icon}
          />
        )}
        <TextInput
          style={[
            styles(width, height).input,
            { backgroundColor: backgroundColor ? backgroundColor : "black" },
          ]}
          value={textValue}
          onChangeText={handleOnChangeText}
          placeholder={placeHolder}
          textContentType={contentType}
          placeholderTextColor={"gray"}
          keyboardType={type === "emailAddress" ? "email-address" : "default"}
          cursorColor={appTheme.colors.white}
          autoCorrect={false}
          enterKeyHint={"enter"}
          keyboardAppearance="dark"
          secureTextEntry={secureText()}
          autoFocus={isFocused ? isFocused : false}
          onSubmitEditing={handleOnEnter}
        />
      </View>
    </View>
  );
};

export default InputField;

const styles = (width: DimensionValue, height: DimensionValue) =>
  StyleSheet.create({
    container: {
      width: "100%",
      borderRadius: 10,
      backgroundColor: appTheme.colors.background,
      gap: 10,
    },
    labelText: {
      color: appTheme.colors.white,
      fontSize: appTheme.font.medium,
    },
    inputWrapper: {
      width: width,
      height: height,
      borderRadius: 10,
      backgroundColor: "black",
      color: appTheme.colors.white,
      flexDirection: "row",
      alignItems: "center",
      position: "relative",
    },
    icon: {
      zIndex: 2,
      position: "absolute",
      right: "5%",
    },
    input: {
      height: height,
      width: "100%",
      textAlign: "left",
      paddingLeft: 10,
      position: "relative",
      borderRadius: 10,
      color: appTheme.colors.white,
    },
  });
