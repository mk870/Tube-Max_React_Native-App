import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { IMovieReview } from "~/Types/Apis/Movies/MovieReviews";
import { IShowReview } from "~/Types/Apis/TvShows/ShowReviews";
import { medium, regular } from "~/Utils/Constants";
import { appTheme, background, white } from "~/Theme/Apptheme";
import { IStringOrNull } from "~/Types/Shared/Types";
import { cleanTextSnippets } from "~/Utils/Funcs";

type Props =
  | {
      type: "movie";
      content: IMovieReview[];
    }
  | {
      type: "tvShow";
      content: IShowReview[];
    };

const Reviews: React.FC<Props> = ({ type, content }) => {
  const getReviewerImage = (imageUrl: IStringOrNull | undefined) => {
    if (imageUrl) return { uri: `https://image.tmdb.org/t/p/w500/${imageUrl}` };
    else return require("assets/images/review.jpg");
  };
  const getRatingsIcon = (rating: number) => {
    return Array.from({ length: rating }, () => (
      <AntDesign name="star" size={22} color="gold" />
    ));
  };
  const getDate = (dateData: string) => {
    return dateData.split("T")[0];
  };
  const {
    reviewContainer,
    reviewDetails,
    reviewHeader,
    reviewText,
    reviewsContainer,
    reviwerImage,
    titleText,
    nameText,
    dateText,
    iconContainer,
  } = styles;
  return (
    <View style={reviewsContainer}>
      <Text style={titleText}>Reviews</Text>
      {type === "movie" &&
        content.map((review) => (
          <View style={reviewContainer} key={review.id}>
            <View style={reviewHeader}>
              <Image
                source={getReviewerImage(review.author_details?.avatar_path)}
                style={[reviwerImage, { height: 90, width: 100 }]}
              />
              <View style={reviewDetails}>
                <Text style={nameText}>{review.author}</Text>
                <Text style={dateText}>
                  {review.created_at ? getDate(review.created_at) : null}
                </Text>
                <View style={iconContainer}>
                  {review.author_details?.rating ? (
                    getRatingsIcon(review.author_details?.rating).map(
                      (icon, index) => <View key={index}>{icon}</View>
                    )
                  ) : (
                    <Text style={dateText}>No Rating</Text>
                  )}
                </View>
              </View>
            </View>
            <Text style={reviewText}>
              {review.content ? cleanTextSnippets(review.content) : null}
            </Text>
          </View>
        ))}
      {type === "tvShow" &&
        content.map((review) => (
          <View style={reviewContainer} key={review.id}>
            <View style={reviewHeader}>
              <Image
                source={getReviewerImage(review.author_details?.avatar_path)}
                style={[reviwerImage, { height: 220, width: 220 }]}
              />
              <View style={reviewDetails}></View>
            </View>
            <Text style={reviewText}></Text>
          </View>
        ))}
    </View>
  );
};

export default Reviews;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 10,
  },
  titleText: {
    fontFamily: medium,
    fontSize: appTheme.font.large,
    color: white,
    marginLeft: 15,
  },
  reviewsContainer: {
    flexDirection: "column",
  },
  reviewContainer: {
    flexDirection: "column",
    justifyContent: "center",
    gap: 5,
    marginBottom: 10,
    borderBottomColor: background,
    borderWidth: 1,
    paddingBottom: 3,
  },
  reviewHeader: {
    flexDirection: "row",
    gap: 10,
  },
  nameText: {
    fontFamily: medium,
    fontSize: appTheme.font.medium,
    color: white,
  },
  dateText: {
    fontFamily: regular,
    fontSize: appTheme.font.small,
    color: white,
  },
  reviwerImage: {
    borderRadius: 10,
  },
  reviewDetails: {
    flexDirection: "column",
    gap: 5,
  },
  reviewText: {
    fontFamily: regular,
    fontSize: appTheme.font.small,
    color: "gray",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
});
