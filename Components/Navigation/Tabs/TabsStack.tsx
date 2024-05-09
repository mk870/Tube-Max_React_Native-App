import {
  Alert,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import { Tabs, useRouter } from "expo-router";

import { appTheme } from "../../../Theme/Apptheme";
import {
  bold,
  expoSecureValueKeyNames,
  tabsMenu,
} from "../../../Utils/Constants";
import Icons from "./Icons/Icons";
import Label from "./Labels/Labels";
import { IReactNoPropElement } from "../../../Types/ReactComonents/Types";
import HeaderIcon from "../../HeaderIcon/HeaderIcon";
import { getSecureValue } from "../../../Utils/Funcs";
import Logout from "../../Alerts/Logout";

const TabsStack: IReactNoPropElement = () => {
  const { width } = useWindowDimensions();
  const router = useRouter();
  const handleProfileClick = () => {
    getSecureValue(expoSecureValueKeyNames.accessToken)
      .then((value: string | null) => {
        if (value) {
          console.log("accessToken", value);
          Logout()
        } else router.push("/login");
      })
      .catch((e) => {
        console.log("get error", e);
        Alert.alert("AccessToken Retrivial Error", "please retry again later");
      });
  };
  return (
    <View style={styles.container}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: appTheme.colors.white,
          tabBarStyle: {
            height: 58,
            alignContent: "flex-start",
            borderTopColor: appTheme.colors.background,
            backgroundColor: appTheme.colors.background,
            paddingBottom: width > 875 ? 10 : 3,
          },
          tabBarItemStyle: {
            flexDirection: "column",
          },
          headerRight: () => (
            <HeaderIcon
              iconName="person-outline"
              onPressFunc={handleProfileClick}
            />
          ),
          headerLeft: () => (
            <HeaderIcon
              iconName="search"
              onPressFunc={() => router.push("/search")}
            />
          ),
          headerTitleStyle: {
            fontFamily: bold,
            color: appTheme.colors.white,
          },
          headerTitleAlign: "center",
          headerStyle: {
            borderTopColor: appTheme.colors.background,
            backgroundColor: appTheme.colors.background,
          },
          headerRightContainerStyle: {
            paddingRight: 15,
          },
          headerLeftContainerStyle: {
            paddingLeft: 15,
          },
          tabBarInactiveTintColor: appTheme.colors.white,
        }}
      >
        <Tabs.Screen
          name={"index"}
          options={{
            title: tabsMenu.home,
            tabBarIcon: ({ color, focused }) => (
              <Icons focused={focused} color={color} name={""} />
            ),
            tabBarLabel: ({ focused }) => (
              <Label focused={focused} textItem={tabsMenu.home} />
            ),
          }}
        />
        <Tabs.Screen
          name={"tv"}
          options={{
            title: "Tv Shows",
            tabBarIcon: ({ color, focused }) => (
              <Icons focused={focused} color={color} name={tabsMenu.tvShows} />
            ),
            tabBarLabel: ({ focused }) => (
              <Label focused={focused} textItem={"TvShows"} />
            ),
          }}
        />
        <Tabs.Screen
          name={"music"}
          options={{
            title: tabsMenu.music,
            tabBarIcon: ({ color, focused }) => (
              <Icons focused={focused} color={color} name={tabsMenu.music} />
            ),
            tabBarLabel: ({ focused }) => (
              <Label focused={focused} textItem={tabsMenu.music} />
            ),
          }}
        />
        <Tabs.Screen
          name={"news"}
          options={{
            title: tabsMenu.news,
            tabBarIcon: ({ color, focused }) => (
              <Icons focused={focused} color={color} name={tabsMenu.news} />
            ),
            tabBarLabel: ({ focused }) => (
              <Label focused={focused} textItem={tabsMenu.news} />
            ),
          }}
        />
        <Tabs.Screen
          name={"favorites"}
          options={{
            title: tabsMenu.favorites,
            tabBarIcon: ({ color, focused }) => (
              <Icons
                focused={focused}
                color={color}
                name={tabsMenu.favorites}
              />
            ),
            tabBarLabel: ({ focused }) => (
              <Label focused={focused} textItem={tabsMenu.favorites} />
            ),
          }}
        />
        <Tabs.Screen
          name="(auth)"
          options={{
            title: "none",
            href: null,
            headerShown: false,
            tabBarStyle: {
              display: "none",
            },
          }}
        />
        <Tabs.Screen
          name="(search)"
          options={{
            title: "none",
            href: null,
            headerShown: false,
            tabBarStyle: {
              display: "none",
            },
          }}
        />
        
      </Tabs>
    </View>
  );
};

export default TabsStack;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
});
