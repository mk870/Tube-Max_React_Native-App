import { ScrollView, StyleSheet } from "react-native";
import React from "react";

import { IArtistAlbum } from "~/Types/Apis/Music/Artist/ArtistAlbum";
import { IArtist } from "~/Types/Shared/Types";
import { ITrack } from "~/Types/Apis/Music/Track/Track";
import ContentImage from "../Shared/ContentImage/ContentImage";
import Profile from "./Profile/Profile";
import Swipeable from "~/Components/Swipeables/Horizontal/Swipeable";

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
