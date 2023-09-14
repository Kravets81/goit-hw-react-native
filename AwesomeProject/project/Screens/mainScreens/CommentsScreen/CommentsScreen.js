import React from "react";

import { Text, Image, View, TouchableOpacity, TextInput } from "react-native";

import Svg, { Path, Circle } from "react-native-svg";

import {
  container,
  header,
  navigateIcon,
  title,
  createCommentsWrapper,
  publicationImgContainer,
  publicationImg,
  commentWrapper,
  commentTextWrapper,
  commentTextWrapperUser,
  commentTextWrapperGuest,
  textComment,
  dateComment,
  addComments,
  commentInputContainer,
} from "./CommentScreen.styled";

const CommentsScreen = () => {
  return (
    <View style={container}>
      <View style={header}>
        <Svg
          style={navigateIcon}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <Path
            d="M20 12H4"
            stroke="#212121"
            stroke-opacity="0.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M10 18L4 12L10 6"
            stroke="#212121"
            stroke-opacity="0.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </Svg>
        <Text style={title}>Коментарі</Text>
      </View>

      <View style={createCommentsWrapper}>
        <View style={publicationImgContainer}>
          <Image
            style={publicationImg}
            source={require("../../../assets/img/sunset.jpg")}
          />
        </View>

        <View style={commentWrapper}>
          <Image
            style={avatarPhoto}
            source={require("../../../assets/img/Ellipse.jpg")}
          />
          <View style={[commentTextWrapper, commentTextWrapperGuest]}>
            <Text style={textComment}>
              Really love your most recent photo. I’ve been trying to capture
              the same thing for a few months and would love some tips!
            </Text>
            <Text style={dateComment}>09 червня, 2020 | 08:40</Text>
          </View>
        </View>

        <View style={commentWrapper}>
          <View style={[commentTextWrapper, commentTextWrapperUser]}>
            <Text style={textComment}>
              A fast 50mm like f1.8 would help with the bokeh. I’ve been using
              primes as they tend to get a bit sharper images.
            </Text>
            <Text style={dateComment}>09 червня, 2020 | 09:14</Text>
          </View>
          <Image
            style={avatarPhoto}
            source={require("../../../assets/img/EllipseUser.jpg")}
          />
        </View>

        <View style={commentWrapper}>
          <Image
            style={avatarPhoto}
            source={require("../../../assets/img/Ellipse.jpg")}
          />
          <View style={[commentTextWrapper, commentTextWrapperGuest]}>
            <Text style={textComment}>Thank you! That was very helpful!</Text>
            <Text style={dateComment}>09 червня, 2020 | 09:20</Text>
          </View>
        </View>
      </View>
      <View style={commentInputContainer}>
        <TextInput style={addComments} placeholder="Коментувати..." />
        <TouchableOpacity>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
          >
            <Circle cx="17" cy="17" r="17" fill="#FF6C00" />
            <Path
              d="M17 10L17.3536 9.64645C17.1583 9.45118 16.8417 9.45118 16.6464 9.64645L17 10ZM21.6464 15.3536C21.8417 15.5488 22.1583 15.5488 22.3536 15.3536C22.5488 15.1583 22.5488 14.8417 22.3536 14.6464L21.6464 15.3536ZM11.6464 14.6464C11.4512 14.8417 11.4512 15.1583 11.6464 15.3536C11.8417 15.5488 12.1583 15.5488 12.3536 15.3536L11.6464 14.6464ZM16.5 24C16.5 24.2761 16.7239 24.5 17 24.5C17.2761 24.5 17.5 24.2761 17.5 24H16.5ZM16.6464 10.3536L21.6464 15.3536L22.3536 14.6464L17.3536 9.64645L16.6464 10.3536ZM16.6464 9.64645L11.6464 14.6464L12.3536 15.3536L17.3536 10.3536L16.6464 9.64645ZM16.5 10V17H17.5V10H16.5ZM16.5 17V24H17.5V17H16.5Z"
              fill="white"
            />
          </Svg>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CommentsScreen;
