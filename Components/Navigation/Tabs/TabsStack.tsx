import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { appTheme } from "../../../Theme/Apptheme";
import { bold, tabsMenu } from "../../../Utils/Constants";
import Icons from "./Icons/Icons";
import Label from "./Labels/Labels";
import Header from "./Header/Header";

type Props = {};

const TabsStack = (props: Props) => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: appTheme.colors.white,
        tabBarStyle: {
          height: 58,
          paddingTop: 6,
          alignContent: "flex-start",
          borderTopColor: appTheme.colors.background,
          backgroundColor: appTheme.colors.background,
        },
        tabBarItemStyle: {
          flexDirection: "column",
        },
        headerRight:()=>(<Header/>),
        headerTitleStyle: {
          fontFamily: bold,
          color: appTheme.colors.white,
        },
        headerTitleAlign: "center",
        headerStyle: {
          borderTopColor: appTheme.colors.background,
          backgroundColor: appTheme.colors.background,
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
          )
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
            <Icons focused={focused} color={color} name={tabsMenu.favorites} />
          ),
          tabBarLabel: ({ focused }) => (
            <Label focused={focused} textItem={tabsMenu.favorites} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsStack;

const styles = StyleSheet.create({});
