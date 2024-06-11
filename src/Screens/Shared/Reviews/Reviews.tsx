import {
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

import { styles } from "./styles";
import { IMovieReview } from "~/src/Types/Apis/Movies/MovieReviews";
import { IShowReview } from "~/src/Types/Apis/TvShows/ShowReviews";
import { IStringOrNull } from "~/src/Types/Shared/Types";
import { cleanTextSnippets } from "~/src/Utils/Funcs";

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
  const [reviewToReadMore, setReaviewToReadMore] = useState<null | string>(
    null
  );
  const [seeMoreReviews, setSeeMoreReviews] = useState<boolean>(false);
  const ratingsStarList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const { width } = useWindowDimensions();
  const reviewsList = () => {
    if (content.length > 3 && !seeMoreReviews) return content.slice(0, 3);
    else return content;
  };
  const getReviewerImage = (imageUrl: IStringOrNull | undefined) => {
    if (imageUrl) return { uri: `https://image.tmdb.org/t/p/w500/${imageUrl}` };
    else return require("assets/images/review.jpg");
  };
  const iconSize = () => {
    if (width > 600) return 22;
    else if (width > 355) return 17;
    else return 13;
  };
  const getRatingsIcon = (rating: number) => {
    return Array.from({ length: rating }, () => (
      <AntDesign name="star" size={iconSize()} color="gold" />
    ));
  };
  const getDate = (dateData: string) => {
    return dateData.split("T")[0];
  };
  const amountOfTextToBeShown = (id: string, text: string) => {
    if (id === reviewToReadMore) return text;
    else return `${text.substring(0, 100)}...`;
  };
  const toggleReviewTobeRead = (id: string) => {
    if (reviewToReadMore === id) setReaviewToReadMore(null);
    else setReaviewToReadMore(id);
  };
  const iconColor = (rating: number | undefined | null, iconNumber: number) => {
    if (rating) {
      if (rating >= iconNumber) return "gold";
      else return "gray";
    } else return "gray";
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
    headerContainer,
    linkContainer,
    linkText,
    readMoreContainer,
    readMoreText,
  } = styles;
  return (
    <View style={reviewsContainer}>
      <View style={headerContainer}>
        <Text style={titleText}>Reviews</Text>
        {content.length > 3 && (
          <TouchableOpacity
            style={linkContainer}
            onPress={() => setSeeMoreReviews((value) => !value)}
          >
            <Text style={linkText}>
              {seeMoreReviews ? "Show less" : "Show more"}
            </Text>
          </TouchableOpacity>
        )}
      </View>
      {type === "movie" &&
        reviewsList().map((review) => (
          <View style={reviewContainer} key={review.id}>
            <View style={reviewHeader}>
              <Image
                source={getReviewerImage(review.author_details?.avatar_path)}
                style={[reviwerImage, { height: 90, width: 100 }]}
              />
              <View style={reviewDetails}>
                <Text style={nameText}>
                  {review.author ? review.author : "unknown"}
                </Text>
                <Text style={dateText}>
                  {review.created_at ? getDate(review.created_at) : "unknown"}
                </Text>
                <View style={iconContainer}>
                  {review.author_details?.rating ? (
                    ratingsStarList.map((iconNumber) => (
                      <AntDesign
                        name="star"
                        key={iconNumber}
                        size={iconSize()}
                        color={iconColor(
                          review.author_details?.rating,
                          iconNumber
                        )}
                      />
                    ))
                  ) : (
                    <Text style={dateText}>No Rating</Text>
                  )}
                </View>
              </View>
            </View>
            <Text style={reviewText}>
              {review.content
                ? amountOfTextToBeShown(
                    review.id,
                    cleanTextSnippets(review.content)
                  )
                : null}
            </Text>
            {review.content && review.content.length > 100 && (
              <View style={readMoreContainer}>
                <TouchableOpacity
                  style={linkContainer}
                  onPress={() => toggleReviewTobeRead(review.id)}
                >
                  <Text style={readMoreText}>
                    {reviewToReadMore === review.id
                      ? "Read less..."
                      : "Read More..."}
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        ))}
      {type === "tvShow" &&
        reviewsList().map((review) => (
          <View style={reviewContainer} key={review.id}>
            <View style={reviewHeader}>
              <Image
                source={getReviewerImage(review.author_details?.avatar_path)}
                style={[reviwerImage, { height: 90, width: 100 }]}
              />
              <View style={reviewDetails}>
                <Text style={nameText}>
                  {review.author ? review.author : "unknown"}
                </Text>
                <Text style={dateText}>
                  {review.created_at ? getDate(review.created_at) : "unknown"}
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
              {review.content
                ? amountOfTextToBeShown(
                    review.id,
                    cleanTextSnippets(review.content)
                  )
                : null}
            </Text>
            {review.content && review.content.length > 100 && (
              <View style={readMoreContainer}>
                <TouchableOpacity
                  style={linkContainer}
                  onPress={() => toggleReviewTobeRead(review.id)}
                >
                  <Text style={readMoreText}>
                    {reviewToReadMore === review.id
                      ? "Read less..."
                      : "Read More..."}
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        ))}
    </View>
  );
};

export default Reviews;
