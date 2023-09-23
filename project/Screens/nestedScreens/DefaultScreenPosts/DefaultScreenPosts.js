import React, { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";

import {
  Text,
  View,
  FlatList,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import Svg, { G, Path } from "react-native-svg";

import {
  container,
  header,
  publicationImg,
  title,
  navigateIcon,
  locationCommentsWrapper,
  commentsContainer,
  locationContainer,
} from "./DefaultPostScreen.styled";

const DefaultPostScreen = ({ onLayoutRootView, route, navigation }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);

  return (
    <View onLayout={onLayoutRootView} style={container}>
      <View style={header}>
        <Text style={title}>Публікації</Text>
        <Svg
          style={navigateIcon}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
        >
          <G stroke="#BDBDBD" stroke-linecap="round" stroke-linejoin="round">
            <Path d="M10 22H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h5M17 16l4-4-4-4M21 12H9" />
          </G>
        </Svg>
      </View>
      <FlatList
        data={posts}
        keyExtractor={(item, indx) => indx.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              marginBottom: 10,
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "auto",
            }}
          >
            <Image source={{ uri: item.photo }} style={publicationImg} />
            <Text style={{ width: "100%", textAlign: "left", marginBottom: 8 }}>
              {item.title}
            </Text>
            <View style={locationCommentsWrapper}>
              <View style={commentsContainer}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Comments");
                  }}
                >
                  <Feather
                    name="message-circle"
                    size={24}
                    color="#BDBDBD"
                    style={{ transform: [{ rotate: "-80deg" }] }}
                  />
                </TouchableOpacity>

                <Text>0</Text>
              </View>
              <View style={locationContainer}>
                <TouchableOpacity
                  onPress={() => {
                    console.log(item.location.coords.latitude);
                    navigation.navigate("Map", {
                      latitude: item.location.coords.latitude,
                      longitude: item.location.coords.longitude,
                    });
                  }}
                >
                  <Feather name="map-pin" size={24} color="#BDBDBD" />
                </TouchableOpacity>

                <Text>{item.locationTitle}</Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default DefaultPostScreen;
