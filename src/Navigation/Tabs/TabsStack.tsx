import {
  Alert,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import { Tabs, useRouter, useSegments } from "expo-router";

import Icons from "./Icons/Icons";
import Label from "./Labels/Labels";
import Logout from "~/src/Components/Alerts/Logout";
import HeaderIcon from "~/src/Components/HeaderIcon/HeaderIcon";
import useGetSpotifyToken from "~/src/Hooks/Music/useGetSpotifyToken";
import { appTheme, background } from "~/src/Theme/Apptheme";
import { IReactNoPropElement } from "~/src/Types/ReactComponents/Types";
import { expoSecureValueKeyNames, bold, tabsMenu } from "~/src/Utils/Constants";
import { getSecureValue } from "~/src/Utils/Funcs";

const TabsStack: IReactNoPropElement = () => {
  const { width } = useWindowDimensions();
  const router = useRouter();
  const segments = useSegments();
  useGetSpotifyToken();
  const handleProfileClick = () => {
    getSecureValue(expoSecureValueKeyNames.accessToken)
      .then((value: string | null) => {
        if (value) {
          console.log("accessToken", value);
          Logout();
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
      safeAreaInsets={{bottom:0}}
        screenOptions={{
          tabBarActiveTintColor: appTheme.colors.white,
          tabBarStyle: styles.tabStyles,
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
            borderBottomColor:background
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
          name={"(home)"}
          options={{
            title: tabsMenu.home,
            headerShown: segments[2] === undefined ? true : false,
            tabBarIcon: ({ color, focused }) => (
              <Icons focused={focused} color={color} name={""} />
            ),
            tabBarLabel: ({ focused }) => (
              <Label focused={focused} textItem={tabsMenu.home} />
            ),
            tabBarStyle: [
              styles.tabStyles,
              { display: segments[2] === undefined ? "flex" : "none" },
            ],
          }}
        />
        <Tabs.Screen
          name={"(tvshows)"}
          options={{
            title: "Tv Shows",
            headerShown: segments[2] === undefined ? true : false,
            tabBarIcon: ({ color, focused }) => (
              <Icons focused={focused} color={color} name={tabsMenu.tvShows} />
            ),
            tabBarLabel: ({ focused }) => (
              <Label focused={focused} textItem={"TvShows"} />
            ),
            tabBarStyle: [
              styles.tabStyles,
              { display: segments[2] === undefined ? "flex" : "none" },
            ],
          }}
        />
        <Tabs.Screen
          name={"(music)"}
          options={{
            title: tabsMenu.music,
            headerShown: segments[2] === undefined ? true : false,
            tabBarIcon: ({ color, focused }) => (
              <Icons focused={focused} color={color} name={tabsMenu.music} />
            ),
            tabBarLabel: ({ focused }) => (
              <Label focused={focused} textItem={tabsMenu.music} />
            ),
            tabBarStyle: [
              styles.tabStyles,
              { display: segments[2] === undefined ? "flex" : "none" },
            ],
          }}
        />
        <Tabs.Screen
          name={"(news)"}
          options={{
            title: tabsMenu.news,
            headerShown: segments[2] === undefined ? true : false,
            tabBarIcon: ({ color, focused }) => (
              <Icons focused={focused} color={color} name={tabsMenu.news} />
            ),
            tabBarLabel: ({ focused }) => (
              <Label focused={focused} textItem={tabsMenu.news} />
            ),
            tabBarStyle: [
              styles.tabStyles,
              { display: segments[2] === undefined ? "flex" : "none" },
            ],
          }}
        />
        <Tabs.Screen
          name={"(favorites)"}
          options={{
            title: tabsMenu.favorites,
            headerShown: segments[2] === undefined ? true : false,
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
            tabBarStyle: [
              styles.tabStyles,
              { display: segments[2] === undefined ? "flex" : "none" },
            ],
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
  tabStyles: {
    height: 58,
    alignContent: "flex-start",
    borderTopColor: appTheme.colors.background,
    backgroundColor: appTheme.colors.background,
    //paddingBottom: width > 875 ? 10 : 3,
  },
});
