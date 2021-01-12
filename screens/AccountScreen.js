import React from "react";
import { ActivityIndicator, Button, StyleSheet, Text, View } from "react-native";
import { commonStyles } from "../styles/commonStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect, useCallback } from "react";
import {useUsername} from "../hooks/useAPI"

export default function AccountScreen({ navigation }) {
  const [username, loading, error, refresh] = useUsername() //You get the array from useUsername can u can rename as long as its order of array
  
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
    navigation.navigate("SignIn");
  }

  return (
    <View style={commonStyles.container}>
      <Text>Account Screen</Text>
      {loading ? <ActivityIndicator/> : <Text>{username}</Text>}
      <Button title="Sign out" onPress={signOut} />
    </View>
  );
}

const styles = StyleSheet.create({});
