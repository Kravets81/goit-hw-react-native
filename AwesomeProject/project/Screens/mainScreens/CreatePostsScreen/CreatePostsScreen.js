import React from "react";

import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";

import Svg, { G, Path, Defs, Circle, ClipPath } from "react-native-svg";

import {
  container,
  header,
  navigateIcon,
  title,
  createPublicationWrapper,
  publicationImg,
  downloadButton,
  downloadButtonTitle,
  captionInput,
  locationPicker,
  locationNameInput,
  publishPostButton,
  publishPostButtonTitle,
  deleteButton,
  locationIcon,
} from "./CreatePostsScreen.styled";

const CreatePostsScreen = () => {
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
        <Text style={title}>Створити публікацію</Text>
      </View>
      <View style={createPublicationWrapper}>
        <View style={publicationImg}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            fill="none"
          >
            <Circle cx="30" cy="30" r="30" fill="#fff" />
            <G fill="#BDBDBD" clip-path="url(#a)">
              <Path d="M30 33.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z" />
              <Path d="m27 20-1.83 2H22c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V24c0-1.1-.9-2-2-2h-3.17L33 20h-6Zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5Z" />
            </G>
            <Defs>
              <ClipPath id="a">
                <Path fill="#fff" d="M18 18h24v24H18z" />
              </ClipPath>
            </Defs>
          </Svg>
        </View>
        <TouchableOpacity style={downloadButton}>
          <Text style={downloadButtonTitle}>Завантажте фото</Text>
        </TouchableOpacity>

        <TextInput
          style={captionInput}
          placeholder="Назва..."
          placeholderTextColor={"#BDBDBD"}
        ></TextInput>

        <View style={locationPicker}>
          <Svg
            style={locationIcon}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <Path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20 10.3636C20 16.0909 12 21 12 21C12 21 4 16.0909 4 10.3636C4 6.29681 7.58172 3 12 3C16.4183 3 20 6.29681 20 10.3636V10.3636Z"
              stroke="#BDBDBD"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <Path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14Z"
              stroke="#BDBDBD"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </Svg>
          <TextInput
            style={locationNameInput}
            placeholder="Місцевість..."
            placeholderTextColor={"#BDBDBD"}
          ></TextInput>
        </View>
        <TouchableOpacity style={publishPostButton}>
          <Text style={publishPostButtonTitle}>Опубліковати</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={deleteButton}>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <Path
            d="M3 6H5H21"
            stroke="#BDBDBD"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M19.5 6C19.5 5.72386 19.2761 5.5 19 5.5C18.7239 5.5 18.5 5.72386 18.5 6H19.5ZM5.5 6C5.5 5.72386 5.27614 5.5 5 5.5C4.72386 5.5 4.5 5.72386 4.5 6H5.5ZM7.5 6C7.5 6.27614 7.72386 6.5 8 6.5C8.27614 6.5 8.5 6.27614 8.5 6H7.5ZM15.5 6C15.5 6.27614 15.7239 6.5 16 6.5C16.2761 6.5 16.5 6.27614 16.5 6H15.5ZM18.5 6V20H19.5V6H18.5ZM18.5 20C18.5 20.8284 17.8284 21.5 17 21.5V22.5C18.3807 22.5 19.5 21.3807 19.5 20H18.5ZM17 21.5H7V22.5H17V21.5ZM7 21.5C6.17157 21.5 5.5 20.8284 5.5 20H4.5C4.5 21.3807 5.61929 22.5 7 22.5V21.5ZM5.5 20V6H4.5V20H5.5ZM8.5 6V4H7.5V6H8.5ZM8.5 4C8.5 3.17157 9.17157 2.5 10 2.5V1.5C8.61929 1.5 7.5 2.61929 7.5 4H8.5ZM10 2.5H14V1.5H10V2.5ZM14 2.5C14.8284 2.5 15.5 3.17157 15.5 4H16.5C16.5 2.61929 15.3807 1.5 14 1.5V2.5ZM15.5 4V6H16.5V4H15.5Z"
            fill="#BDBDBD"
          />
          <Path
            d="M10 11V17"
            stroke="#BDBDBD"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M14 11V17"
            stroke="#BDBDBD"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </Svg>
      </TouchableOpacity>
    </View>
  );
};

export default CreatePostsScreen;
