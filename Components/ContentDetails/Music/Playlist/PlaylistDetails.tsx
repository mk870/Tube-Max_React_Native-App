import { ScrollView, StyleSheet } from "react-native";
import React from "react";

import { IPlayList } from "~/Types/Apis/Music/PlayList";
import ContentImage from "../../Shared/ContentImage/ContentImage";
import PlaylistInfo from "./PlaylistInfo/PlaylistInfo";
import Swipeable from "~/Components/Swipeables/Horizontal/Swipeable";

type Props = {
  playlist: IPlayList;
};

const PlaylistDetails: React.FC<Props> = ({
  playlist: { images },
  playlist,
}) => {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <ContentImage
        source="spotify"
        imagePath={images ? images[0]?.url : null}
      />
      <PlaylistInfo playlist={playlist} />
      <Swipeable
        headerTitle="Playlist Tracks"
        type="playlistTracks"
        content={playlist.tracks?.items ? playlist.tracks.items : []}
      />
    </ScrollView>
  );
};

export default PlaylistDetails;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 5
  },
});
