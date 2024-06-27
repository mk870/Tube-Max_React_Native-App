import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

import { primary, small, white } from "~/src/Theme/Apptheme";
import { IFavoriteContentType } from "../../Types/Types";
import { medium } from "~/src/Utils/Constants";

type Props = {
  contentType: IFavoriteContentType[];
  setCurrentContentType: React.Dispatch<
    React.SetStateAction<IFavoriteContentType>
  >;
  currentContentType: IFavoriteContentType;
};

const ContentList: React.FC<Props> = ({
  contentType,
  setCurrentContentType,
  currentContentType,
}) => {
  const { contentPressable, contentText, contentTypeContainer } = styles;
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      data={contentType}
      horizontal
      renderItem={({ item }) => (
        <View style={contentTypeContainer}>
          <TouchableOpacity
            key={item}
            onPress={() => setCurrentContentType(item)}
            style={[
              contentPressable,
              {
                borderBottomColor:
                  item === currentContentType ? primary : "black",
                borderBottomWidth: 1,
              },
            ]}
          >
            <Text
              style={[
                contentText,
                { color: item === currentContentType ? white : "gray" },
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    />
  );
};

export default ContentList;

const styles = StyleSheet.create({
  contentTypeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 5,
  },
  contentPressable: {
    width: 70,
    paddingTop: 10,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  contentText: {
    fontSize: small,
    fontFamily: medium,
  },
});
