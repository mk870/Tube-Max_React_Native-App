import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { IReactNoPropElement } from "../../Types/ReactComonents/Types";
import ScreenWrapper from "../../HOCs/ScreenWrapper";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderIcon from "~/Components/HeaderIcon/HeaderIcon";
import InputField from "~/Components/InputField/InputField";
import {
  background,
  darkGray,
  lightPrimary,
  primary,
  small,
  white,
} from "~/Theme/Apptheme";
import { regular } from "~/Utils/Constants";
import Genres from "~/Components/GenreList/Genres";

const search: IReactNoPropElement = () => {
  const [searchInput, setSearchInput] = useState<string | undefined>("");
  const contentType: string[] = ["movies", "tvshows", "news", "music"];
  const newsTopic: string[] = [
    "entertainment",
    "albums",
    "tv-shows",
    "songs",
    "actors",
    "movies",
    "musicians",
  ];
  const [contentTypeOption, setContentTypeOption] = useState<string>(
    contentType[0]
  );
  const router = useRouter();
  const {
    icon,
    iconContainer,
    header,
    searchContainer,
    searchOption,
    searchOptionsContainer,
    searchOptionText,
  } = styles;
  return (
    <SafeAreaView>
      <View style={header}>
        <View style={searchContainer}>
          <HeaderIcon
            iconSize={24}
            iconName="arrow-back"
            onPressFunc={() => router.back()}
          />
          <View style={{ width: "80%" }}>
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
            />
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
        <View style={searchOptionsContainer}>
          {contentType.map((option: string) => (
            <TouchableOpacity
              key={option}
              style={[
                searchOption,
                {
                  borderBottomWidth: option === contentTypeOption ? 3 : 0,
                  borderBottomColor:
                    option === contentTypeOption ? primary : darkGray,
                  backgroundColor:
                    option === contentTypeOption ? darkGray : darkGray,
                },
              ]}
              onPress={() => setContentTypeOption(option)}
            >
              <Text
                style={{ color: option === contentTypeOption ? white : "gray" }}
              >
                {option}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        {contentTypeOption !=="news" && <Genres contentType={contentTypeOption}/>}
      </View>
    </SafeAreaView>
  );
};

export default ScreenWrapper(search);

const styles = StyleSheet.create({
  header: {
    flexDirection: "column",
    gap: 10,
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 5,
    alignItems: "center",
  },
  searchOptionsContainer: {
    flexDirection: "row",
    gap: 10,
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "space-around",
  },
  searchOption: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderCurve: "circular",
  },
  searchOptionText: {
    fontFamily: regular,
    fontSize: small,
    color: white,
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
