import { Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import millify from "millify";

import { IPlayList } from "~/src/Types/Apis/Music/PlayList";
import { white } from "~/src/Theme/Apptheme";
import { unknown } from "~/src/Utils/Constants";
import { styles } from "./styles";

type Props = {
  playlist: IPlayList;
};

const PlaylistInfo: React.FC<Props> = ({
  playlist: { name, followers, tracks, description },
}) => {
  const iconSize = 22;
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{name}</Text>
      <View style={styles.row}>
        <View style={styles.smallRow}>
          <Ionicons
            name="people-outline"
            size={20}
            color={white}
            style={{ marginRight: 3 }}
          />
          <Text style={styles.regularText}>{`${
            followers?.total ? millify(followers.total) : unknown
          } followers`}</Text>
        </View>
        <View style={styles.smallRow}>
          <Ionicons
            name="musical-notes-outline"
            size={iconSize}
            color={white}
          />
          <Text style={styles.regularText}>
            {tracks?.total ? `${tracks.total} tracks` : unknown}
          </Text>
        </View>
      </View>
      {description && <Text style={styles.headerText}>{description}</Text>}
    </View>
  );
};

export default PlaylistInfo;
