import React from "react";
import { ActivityIndicator, Button, StyleSheet, Switch, Text, View } from "react-native";
import { commonStyles } from "../styles/commonStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector } from "react-redux";

export function TextComponent(props){
    const darkMode = useSelector((state)=>state.pref.darkMode)
    return(
        <Text style={{color: darkMode? "white" :"black" }}>{props.words}</Text>
    )
}