import { View } from "react-native";
import React from "react";

import HttpError from "~/src/Components/HttpError/HttpError";
import ScreenSpinner from "~/src/Components/Spinner/ScreenSpinner";
import VerticalSwipeable from "~/src/Components/Swipeables/Vertical/VerticalSwipeable";
import ScreenWrapper from "~/src/HOCs/ScreenWrapper";
import useFetchElectro from "~/src/Hooks/Music/Playlists/useFetchElectro";

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