import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import {
  CircleButton,
  RectButton,
  SubInfo,
  FocusStatusBar,
  DetailsDesc,
  DetailsBid,
} from "../components";
import { COLORS, SIZES, SHADOWS, FONTS, assets } from "../constants";
import { FlatList } from "react-native-gesture-handler";

const Details = ({ route, navigation }) => {
  const { data } = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <View
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          paddingVertical: SIZES.font,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255, 255, 255, .5)",
          zIndex: 1,
        }}
      >
        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS} />
      </View>
      <FlatList
      // data={}
      />
    </SafeAreaView>
  );
};

export default Details;
