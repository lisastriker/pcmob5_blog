import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { commonStyles } from "../styles/commonStyles";
import {darkModeFunction} from "../redux/ducks/accountPrefs"
import { useSelector } from "react-redux";
import { TextComponent } from "../components/textComponent";


export default function IndexScreen({ navigation }) {
  const darkMode = useSelector((state)=>state.pref.darkMode)
  return (
    <View style={darkMode ? styles.darkContainer: commonStyles.container}>
      <TextComponent words="Index Screen"/>
      <Button onPress={()=>navigation.navigate("Create")}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  darkContainer:{
    backgroundColor:"black",
    flex:1,
    alignItems:"center",
    justifyContent:"center",
  }
});
