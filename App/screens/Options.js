import React from "react";
import { SafeAreaView, ScrollView, Linking, Alert } from "react-native";
import { Entypo } from "@expo/vector-icons";
import colors from "../constants/colors";
import { RowItem, RowSeparator } from "../components/RowItem";

const openUrl = (url) => {
  Linking.openURL(url).catch(() => {
    Alert.alert("Sorry, Something went wrong.", "Please try again later."); // double comma is another paragraph like <p> and the first comma is <h1>
  });
};

export default () => {
  return (
    // flex:1 is for the safeareaview to take up the entire screen rather than the space that the elements take and only take
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <RowItem
          text="Themes"
          onPress={() => alert("todo!")}
          rightIcon={
            <Entypo name="chevron-right" size={20} color={colors.blue} />
          }
        />

        <RowSeparator />

        <RowItem
          text="Youtube"
          onPress={() => openUrl("https://youtube.com")}
          rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
        />

        <RowSeparator />

        <RowItem
          text="My portfolio website"
          onPress={() => openUrl("https:/juneaugawat.myportfolio.com")}
          rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
        />
        <RowSeparator />
      </ScrollView>
    </SafeAreaView>
  );
};
