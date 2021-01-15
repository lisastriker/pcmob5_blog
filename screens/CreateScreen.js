import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextComponent } from "../components/textComponent";
import { commonStyles } from "../styles/commonStyles";

export default function CreateScreen({ navigation }) {
  return (
    <View style={commonStyles.container}>
      <TextComponent words="Create Screen"/>
    </View>
  );
}

const styles = StyleSheet.create({});
