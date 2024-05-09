import { useEffect } from "react";
import { useFonts } from "expo-font";
import { SplashScreen } from "expo-router";
import { Provider } from "react-redux";

import TabsStack from "../Components/Navigation/Tabs/TabsStack";
import { store } from "../Redux/Store";

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
      <TabsStack />
    </Provider>
  );
};

export default RootLayout;
