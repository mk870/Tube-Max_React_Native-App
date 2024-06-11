import { ScrollView, StyleSheet } from "react-native";
import React from "react";

import ContentImage from "../../../Shared/ContentImage/ContentImage";
import TrackInfo from "./TrackInfo/TrackInfo";
import Swipeable from "~/src/Components/Swipeables/Horizontal/Swipeable";
import { ITrack } from "~/src/Types/Apis/Music/Track/Track";
import { IArtist } from "~/src/Types/Shared/Types";

type Props = {
  track: ITrack;
  recommendations: ITrack[];
  artists: IArtist[];
};

const TrackDetails: React.FC<Props> = ({ track, recommendations, artists }) => {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <ContentImage
        source="spotify"
        imagePath={track.album.images ? track.album.images[0].url : null}
      />
      <TrackInfo artists={artists} track={track}/>
      <Swipeable
        headerTitle="Track Artists"
        type="artists with details"
        content={artists}
      />
      <Swipeable headerTitle="Album" type="trackAlbum" content={[track.album]} />
      <Swipeable
        headerTitle="Track Recommendations"
        type="tracks"
        content={recommendations}
      />
    </ScrollView>
  );
};

export default TrackDetails;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 5,
  },
});
