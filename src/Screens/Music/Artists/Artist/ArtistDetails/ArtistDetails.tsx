import { ScrollView, StyleSheet } from "react-native";
import React from "react";

import Swipeable from "~/src/Components/Swipeables/Horizontal/Swipeable";
import ContentImage from "~/src/Screens/Shared/ContentImage/ContentImage";
import { IArtistAlbum } from "~/src/Types/Apis/Music/Artist/ArtistAlbum";
import { ITrack } from "~/src/Types/Apis/Music/Track/Track";
import { IArtist } from "~/src/Types/Shared/Types";
import Profile from "../../../Profile/Profile";

type Props = {
  albums: IArtistAlbum[];
  relatedArtists: IArtist[];
  tracks: ITrack[];
  profile: IArtist | null;
};

const ArtistDetails: React.FC<Props> = ({
  albums,
  profile,
  relatedArtists,
  tracks,
}) => {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {profile && (
        <ContentImage
          source="spotify"
          imagePath={profile.images ? profile.images[0]?.url : null}
        />
      )}
      {profile && <Profile profile={profile} />}
      <Swipeable
        type="tracks"
        content={tracks}
        headerTitle={`${profile ? profile.name + "'s" : "Artist's"} Top Tracks`}
      />
      <Swipeable
        type="artistAlbums"
        content={albums}
        headerTitle={`${profile ? profile.name + "'s" : "Artist"} Albums`}
      />
      {relatedArtists.length > 0 && (
        <Swipeable
          type="artists with details"
          content={relatedArtists}
          headerTitle="Related Artists"
        />
      )}
    </ScrollView>
  );
};

export default ArtistDetails;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 5,
  },
});