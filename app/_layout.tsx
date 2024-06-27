import { useEffect } from "react";
import { useFonts } from "expo-font";
import { SplashScreen } from "expo-router";
import { Provider } from "react-redux";
import { RootSiblingParent } from "react-native-root-siblings";
import "react-native-reanimated";
import "react-native-gesture-handler";

import { store } from "~/src/Redux/Store";
import TabsStack from "~/src/Navigation/Tabs/TabsStack";

const RootLayout: React.FC = () => {
  const [fontsLoaded] = useFonts({
    "Roboto-medium": require("../assets/fonts/Roboto-Medium.ttf"),
    "Roboto-large": require("../assets/fonts/Roboto-Black.ttf"),
    "Roboto-regular": require("../assets/fonts/Roboto-Regular.ttf"),
  });
  useEffect(() => {
    const prepare = async () => {
      await SplashScreen.preventAutoHideAsync();
    };
    prepare();
  }, []);

  if (!fontsLoaded) return undefined;
  else SplashScreen.hideAsync();
  return (
    <Provider store={store}>
      <RootSiblingParent>
        <TabsStack />
      </RootSiblingParent>
    </Provider>
  );
};

export default RootLayout;
