import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";

import { IMusicSearchType } from "~/Components/Search/Results/types";
import { darkGray, large, primary, small, white } from "~/Theme/Apptheme";
import { medium, regular } from "~/Utils/Constants";

type Props = {
  handlePressFunc: (type: IMusicSearchType) => void;
  musicSearchType: IMusicSearchType;
};

const SearchOptions: React.FC<Props> = ({
  handlePressFunc,
  musicSearchType,
}) => {
  const { container, row, headertext, text, typeContainer } = styles;
  const searchTypes: IMusicSearchType[] = [
    "track",
    "album",
    "artist",
    "playlist",
  ];
  const { width } = useWindowDimensions();
  return (
    <View style={container}>
      <Text style={headertext}>Search Options</Text>
      <View style={row}>
        {searchTypes.map((type: IMusicSearchType) => (
          <TouchableOpacity
            key={type}
            style={[
              typeContainer,
              {
                backgroundColor: musicSearchType === type ? primary : darkGray,
                width: width > 358 ? 80 : 65,
              },
            ]}
            onPress={() => handlePressFunc(type)}
          >
            <Text
              style={[
                text,
                { color: musicSearchType === type ? white : "gray" },
              ]}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default SearchOptions;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  headertext: {
    fontFamily: medium,
    fontSize: large,
    color: white,
  },
  typeContainer: {
    paddingVertical: 4,
    borderRadius: 3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
    gap: 5,
  },
  text: {
    fontFamily: regular,
    fontSize: small,
  },
});
