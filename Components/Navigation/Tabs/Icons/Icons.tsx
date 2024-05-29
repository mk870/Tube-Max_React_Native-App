import { Animated, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useEffect, useRef } from "react";
import { usePathname } from "expo-router";
import { tabsMenu } from "../../../../Utils/Constants";
import { appTheme } from "../../../../Theme/Apptheme";

type Props = {
  focused: boolean;
  name: string;
  color: string;
};

const Icons: React.FC<Props> = ({ focused, name, color }) => {
  const iconSize = 24;
  const routePathName = usePathname();
  // useEffect(() => {
  //   if (focused && routePathName === `/${name.toLocaleLowerCase()}`) {
  //     isFocused.start();
  //   } else {
  //     isNotFocused.start();
  //   }
  // }, [routePathName]);
  // const viewPadding = useRef(new Animated.Value(0)).current;
  // const isFocused = Animated.timing(viewPadding, {
  //   toValue: 20,
  //   duration: 200,
  //   useNativeDriver: false,
  // });

  // const isNotFocused = Animated.timing(viewPadding, {
  //   toValue: 0,
  //   useNativeDriver: false,
  // });

  const icons = () => {
    if (name === tabsMenu.music) {
      if (focused)
        return <Ionicons name="musical-notes" size={iconSize} color={color} />;
      else
        return (
          <Ionicons
            name="musical-notes-outline"
            size={iconSize}
            color={color}
          />
        );
    }
    if (name === tabsMenu.favorites) {
      if (focused)
        return <MaterialIcons name="favorite" size={iconSize} color={color} />;
      else
        return (
          <MaterialIcons
            name="favorite-outline"
            size={iconSize}
            color={color}
          />
        );
    }
    if (name === tabsMenu.tvShows) {
      if (focused) return <Ionicons name="tv" size={iconSize} color={color} />;
      else return <Ionicons name="tv-outline" size={iconSize} color={color} />;
    }
    if (name === tabsMenu.news) {
      if (focused)
        return (
          <Ionicons name="newspaper-sharp" size={iconSize} color={color} />
        );
      else
        return (
          <Ionicons name="newspaper-outline" size={iconSize} color={color} />
        );
    } else {
      if (focused)
        return <Ionicons name="home-sharp" color={color} size={iconSize} />;
      else
        return <Ionicons name="home-outline" size={iconSize} color={color} />;
    }
  };
  return (
    <Animated.View
      style={{
        backgroundColor: focused ? appTheme.colors.lightPrimary : "",
        paddingHorizontal: 20,
        borderRadius: 20,
      }}
    >
      {icons()}
    </Animated.View>
  );
};
const styles = StyleSheet.create({});
export default Icons;
