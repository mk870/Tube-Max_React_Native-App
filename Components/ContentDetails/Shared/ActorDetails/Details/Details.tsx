import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { AntDesign, Ionicons, EvilIcons } from "@expo/vector-icons";
import { IActorProfile } from "~/Types/Shared/Types";
import { bold, regular, unknown } from "~/Utils/Constants";
import { darkGray, medium, primary, small, white } from "~/Theme/Apptheme";
import { shortenString } from "~/Utils/Funcs";

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
            <EvilIcons
              name="location"
              size={iconSize}
              color={white}
              style={{ marginRight: -7 }}
            />
            <Text style={styles.regularText}>
              {actor.place_of_birth
                ? actor.place_of_birth.split(",")[2]
                : unknown}
            </Text>
          </View>
          <View style={styles.subRow}>
            <AntDesign name="star" size={iconSize} color={"gold"} />
            <Text style={styles.regularText}>
              {actor.popularity ? actor.popularity.toFixed(0) : unknown}
            </Text>
          </View>
        </View>
        <View style={styles.bioContainer}>
          <Text style={styles.mediumText}>Biography:</Text>
          <Text style={styles.bioText}>
            {actor.biography ? actorBio(actor.biography) : unknown}
          </Text>
          {actor.biography && (
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

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  actorDetails: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  subRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
  },
  nameText: {
    fontFamily: bold,
    fontSize: medium,
    color: white,
  },
  mediumText: {
    fontFamily: bold,
    fontSize: medium,
    color: white,
  },
  regularText: {
    fontFamily: regular,
    fontSize: 13,
    color: white,
  },
  bioText: {
    fontFamily: regular,
    fontSize: small,
    color: "gray",
  },
  bioContainer: {
    flexDirection: "column",
    gap: 5,
  },
  bioRow: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  linkContainer: {
    backgroundColor: darkGray,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  readMoreText: {
    fontFamily: regular,
    fontSize: small,
    color: primary,
  },
});
