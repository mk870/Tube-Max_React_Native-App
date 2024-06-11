import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";

import { darkGray, primary, white } from "~/src/Theme/Apptheme";
import { medium } from "~/src/Utils/Constants";
import { IContentType } from "~/src/Types/Shared/Types";

type Props = {
  contentType: IContentType[];
  contentTypeOption: IContentType;
  setContentTypeOption: (type: IContentType) => void;
};

const ContentOptions: React.FC<Props> = ({
  contentType,
  contentTypeOption,
  setContentTypeOption,
}) => {
  const { searchOptionsContainer, searchOption, container } = styles;
  const { width } = useWindowDimensions();
  return (
    <View style={container}>
      <View style={searchOptionsContainer}>
        {contentType.map((option: IContentType) => (
          <TouchableOpacity
            key={option}
            style={[
              searchOption,
              {
                width: width > 358 ? 80 : 65,
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
    </View>
  );
};

export default ContentOptions;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  searchOptionsContainer: {
    flexDirection: "row",
    gap: 10,
    flexWrap: "wrap",
    alignContent: "center",
    marginTop: 5,
  },
  searchOption: {
    paddingVertical: 5,
    borderRadius: 3,
    borderCurve: "circular",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});
