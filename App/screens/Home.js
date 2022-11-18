import React from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
  Text,
} from "react-native";
import { format } from "date-fns";
import colors from "../constants/colors";
import { ConversionInput } from "../components/ConversionInput";
import { Button } from "../components/Button";

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
    marginBottom: -60,
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
  textHeader: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 20,
    textAlign: "center",
  },
  text: {
    color: colors.white,
    fontSize: 14,
    textAlign: "center",
    marginVertical: 10,
  },
});

export default () => {
  const baseCurrency = "USD";
  const quoteCurrency = "GBP";
  const conversionRate = "0.8345";
  const date = new Date();

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
      <Text style={styles.textHeader}>Currency Converter</Text>
      <ConversionInput
        text={baseCurrency}
        value="123"
        onButtonPress={() => alert("todo!")}
        onChangeText={(text) => console.log("text", text)}
        keyboardType="numeric"
      />
      <ConversionInput
        text={quoteCurrency}
        value="123"
        onButtonPress={() => alert("todo!")}
        onChangeText={(text) => console.log("text", text)}
        keyboardType="numeric"
        editable={false}
      />
      <Text style={styles.text}>
        {`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${format(
          date,
          "MMMM do, yyyy" // a yarn start date-fns a comunity date format system
        )}.`}
      </Text>

      <Button text="Reverse Currencies" onPress={() => alert("todo!")} />
    </View>
  );
};
