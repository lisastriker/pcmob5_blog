import React from "react";
import { ActivityIndicator, Button, StyleSheet, Switch, View } from "react-native";
import { commonStyles } from "../styles/commonStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect, useCallback } from "react";
import {useUsername} from "../hooks/useAPI"
import { useDispatch, useSelector } from "react-redux";
import{signOutAction} from "../redux/ducks/blogAuth"
import {darkModeFunction, reset} from "../redux/ducks/accountPrefs"
import {TextComponent} from "../components/textComponent"
export default function AccountScreen({ navigation }) {
  const [username, loading, error, refresh] = useUsername() //You get the array from useUsername can u can rename as long as its order of array
  const dispatch = useDispatch();
  const darkMode = useSelector((state)=>state.pref.darkMode)

  useEffect(()=>{
    if(error){
      signOut()
    }
  },[error]) //Monitor error variable, its false when load in, but if have any error it will sign you out

  useEffect(()=>{
    const removeListener = navigation.addListener("focus",()=>{ ///This navigation.add listener is different from ()=> navigation.add listener It returns a remove listener only the ()=>runs the method
      refresh(true) //You ported over setRefresh if you look at hook
    });
    return removeListener
  },[])

  function signOut() {
    AsyncStorage.removeItem("token");
    dispatch(signOutAction())
    dispatch(reseyt())
  }

  return (
    <View style={darkMode? styles.darkContainer  : commonStyles.container}>
      <TextComponent words="Account Screen"/>
      <Switch value={darkMode} onValueChange={()=>dispatch(darkModeFunction())}></Switch>
      {loading ? <ActivityIndicator/> : <TextComponent words={username}/>}
      <Button title="Sign out" onPress={signOut} />
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
