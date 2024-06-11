import { Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { AntDesign, Ionicons, EvilIcons } from "@expo/vector-icons";

import { IActorProfile } from "~/src/Types/Shared/Types";
import { unknown } from "~/src/Utils/Constants";
import { white } from "~/src/Theme/Apptheme";
import { shortenString } from "~/src/Utils/Funcs";
import { styles } from "./styles";

type Props = {
  actor: IActorProfile;
};

const Details: React.FC<Props> = ({ actor }) => {
  const [readMore, setReadMore] = useState<boolean>(false);
  const actorBio = (bio: string) => {
    if (readMore) return bio;
    else return shortenString(bio, 200);
  };
  const iconSize = 22;
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "column", gap: 8 }}>
        <Text style={[styles.nameText]}>
          {actor.name ? actor.name : unknown}
        </Text>
        <View style={styles.actorDetails}>
          <View style={styles.subRow}>
            <AntDesign name="calendar" size={iconSize} color={white} />
            <Text style={styles.regularText}>
              {actor.birthday ? actor.birthday : unknown}
            </Text>
          </View>
          {actor.gender && (
            <View style={styles.subRow}>
              <Ionicons
                name={actor.gender === 1 ? "female-outline" : "male-outline"}
                size={iconSize}
                color={white}
              />
              <Text style={styles.regularText}>
                {actor.gender === 1 ? "female" : "male"}
              </Text>
            </View>
          )}
          <View style={styles.subRow}>
            <AntDesign name="star" size={iconSize} color={"gold"} />
            <Text style={styles.regularText}>
              {actor.popularity ? actor.popularity.toFixed(0) : unknown}
            </Text>
          </View>
        </View>
        <View style={styles.subRow}>
            <EvilIcons
              name="location"
              size={iconSize}
              color={white}
              style={{ marginLeft: -7 }}
            />
            <Text style={styles.regularText}>
              {actor.place_of_birth
                ? actor.place_of_birth
                : unknown}
            </Text>
          </View>
        <View style={styles.bioContainer}>
          <Text style={styles.mediumText}>Biography:</Text>
          <Text style={styles.bioText}>
            {actor.biography ? actorBio(actor.biography) : unknown}
          </Text>
          {actor.biography && actor.biography.length > 200 && (
            <View style={styles.bioRow}>
              <TouchableOpacity
                style={styles.linkContainer}
                onPress={() => setReadMore((value) => !value)}
              >
                <Text style={styles.readMoreText}>
                  {readMore ? "Read less..." : "Read more..."}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default Details;
