import React from "react";
import { View, StyleSheet, StatusBar, Image, Dimensions } from "react-native";
import colors from "../constants/colors";

const screen = Dimensions.get("window"); // get screen dimensions

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    flex: 1, // extend to as much as the screen possible
    justifyContent: "center",
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    position: "absolute", // makes an image reder on top
    width: screen.width * 0.25,
    height: screen.height * 0.25,
  },
  logoBackground: {
    width: screen.width * 0.45,
    height: screen.height * 0.45,
  },
});

export default () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.blue} />

      <View style={styles.logoContainer}>
        <Image
          source={require("../assests/images/background.png")}
          style={styles.logoBackground}
          resizeMode="contain"
        />
        <Image
          source={require("../assests/images/logo.png")}
          style={styles.logo}
          resizeMode="contain" // makes sure the image is not cut off... fixes aspect ratio
        />
      </View>
    </View>
  );
};
