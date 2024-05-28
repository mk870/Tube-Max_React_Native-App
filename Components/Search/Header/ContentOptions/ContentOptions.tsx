import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

import { darkGray, primary, white } from "~/Theme/Apptheme";
import { medium } from "~/Utils/Constants";

type Props = {
  contentType: string[];
  contentTypeOption: string;
  setContentTypeOption: React.Dispatch<React.SetStateAction<string>>;
};

const ContentOptions: React.FC<Props> = ({
  contentType,
  contentTypeOption,
  setContentTypeOption,
}) => {
  const { searchOptionsContainer, searchOption } = styles;
  return (
    <View style={searchOptionsContainer}>
      {contentType.map((option: string) => (
        <TouchableOpacity
          key={option}
          style={[
            searchOption,
            {
              borderBottomWidth: option === contentTypeOption ? 3 : 0,
              borderBottomColor:
                option === contentTypeOption ? primary : darkGray,
              backgroundColor:
                option === contentTypeOption ? darkGray : darkGray,
            },
          ]}
          onPress={() => setContentTypeOption(option)}
        >
          <Text
            style={{
              color: option === contentTypeOption ? white : "gray",
              fontFamily: medium,
              fontSize: 14,
            }}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ContentOptions;

const styles = StyleSheet.create({
  searchOptionsContainer: {
    flexDirection: "row",
    gap: 10,
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "space-around",
    marginTop: 5,
  },
  searchOption: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderCurve: "circular",
  },
});
