import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Start = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.start}
      onPress={() => navigation.navigate("StartMain")}
    >
      <Image
        style={[styles.blob11, styles.blob11Position]}
        contentFit="cover"
        source={require("../assets/blob-1-1.png")}
      />
      <Text style={styles.findMyTrip}>Find My Trip</Text>
      <Image
        style={[styles.undrawAircraftReM05i11, styles.blob11Position]}
        contentFit="cover"
        source={require("../assets/undraw-aircraft-re-m05i-1-1.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  blob11Position: {
    overflow: "hidden",
    maxHeight: "100%",
    left: "50%",
    position: "absolute",
  },
  blob11: {
    height: "71.56%",
    marginLeft: -229,
    top: "7.5%",
    bottom: "20.94%",
    width: 458,
  },
  findMyTrip: {
    marginLeft: -146,
    top: "64.53%",
    fontSize: FontSize.size_31xl,
    // fontFamily: FontFamily.interRegular,
    color: Color.colorWhite,
    textAlign: "center",
    left: "50%",
    position: "absolute",
  },
  undrawAircraftReM05i11: {
    height: "15.53%",
    marginLeft: -117,
    top: "27.81%",
    bottom: "56.66%",
    width: 234,
  },
  start: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 640,
  },
});

export default Start;