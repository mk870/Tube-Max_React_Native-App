import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import HeaderIcon from "~/Components/HeaderIcon/HeaderIcon";
import InputField from "~/Components/InputField/InputField";
import { darkGray, large, white } from "~/Theme/Apptheme";
import { IVoidFunc } from "~/Types/Shared/Types";
import { bold } from "~/Utils/Constants";

type Props = {
  searchInput: string | undefined;
  contentTypeOption: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string | undefined>>;
  handleKeyboardSubmit: IVoidFunc;
};

const SearchContainer: React.FC<Props> = ({
  searchInput,
  setSearchInput,
  handleKeyboardSubmit,
  contentTypeOption,
}) => {
  const { searchContainer, icon, iconContainer,text } = styles;
  const router = useRouter();
  return (
    <View style={searchContainer}>
      <HeaderIcon
        iconSize={24}
        iconName="arrow-back"
        onPressFunc={() => router.back()}
      />
      <View style={{ width: "80%" }}>
        {contentTypeOption === "news" ? (
          <Text style={text}>Latest News Bulletins</Text>
        ) : (
          <InputField
            textValue={searchInput}
            placeHolder={`search ${contentTypeOption}`}
            width={"100%"}
            backgroundColor={darkGray}
            handleOnChangeText={(e) => setSearchInput(e)}
            height={40}
            contentType="none"
            type="search"
            isFocused={true}
            handleOnEnter={handleKeyboardSubmit}
          />
        )}
      </View>
      <TouchableOpacity
        style={iconContainer}
        onPress={() => router.push("/voiceSearch")}
      >
        <MaterialIcons
          name="keyboard-voice"
          size={24}
          color={white}
          style={icon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchContainer;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 5,
    alignItems: "center",
  },
  text:{
    fontFamily:bold,
    fontSize:large,
    color:white,
    alignSelf: "center"
  },
  iconContainer: {
    width: 35,
    height: 35,
    borderRadius: 10,
    alignContent: "center",
    justifyContent: "center",
    display: "flex",
  },
  icon: {
    alignSelf: "center",
  },
});
