import { View } from "react-native";
import React from "react";

import ScreenWrapper from "~/HOCs/ScreenWrapper";
import useFetchElectro from "~/Hooks/Music/Playlists/useFetchElectro";
import ScreenSpinner from "~/Components/Spinner/ScreenSpinner";
import HttpError from "~/Components/HttpError/HttpError";
import VerticalSwipeable from "~/Components/Swipeables/Vertical/VerticalSwipeable";

const electro = () => {
  const { electroPlaylists, error, isLoading } = useFetchElectro();
  return (
    <View style={{ alignItems: "center", flex: 1 }}>
      {isLoading && <ScreenSpinner />}
      {error && <HttpError />}
      {electroPlaylists && (
        <VerticalSwipeable type="playlist" content={electroPlaylists} />
      )}
    </View>
  );
};

export default ScreenWrapper(electro);
