import React from "react";
import { ActivityIndicator, Button, StyleSheet, Text, View } from "react-native";
import { commonStyles } from "../styles/commonStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useState, useEffect } from "react";

const API="https://lisastriker.pythonanywhere.com"
const API_WHOAMI = "/whoami"
export default function AccountScreen({ navigation }) {
  const [username, setUsername] = useState("")

  async function getUsername(){
    console.log("...Getting user name...");
    const token = await AsyncStorage.getItem("token");
    console.log(`Token is ${token}`);
    try{
      const response = await axios.get(API + API_WHOAMI, {
        headers:{Authorization:`JWT ${token}`},
      });
      console.log("Got username!");
      setUsername(response.data.username)
    } catch(error){
      console.log("Error getting user name");
      if (error.response){
        console.log(error.response.data);
        if (error.response.data.status_code === 401) { //if token expired sign you out
          signOut();
        }
      }else{
        console.log(error);
      }
    }
  }

  useEffect(()=>{ 
    console.log("Setting up navlistener") //This is subseqeunt
    const removeListener = navigation.addListener("focus", ()=>{ //This navigation.add listener is different from ()=> navigation.add listener It returns a remove listener only the ()=>runs the method
      setUsername(<ActivityIndicator/>); //Because {username} is below so while username not set, then return activity indicator
      getUsername()
    })
    getUsername(); //This is for first tim it runs
    return removeListener
  }, [])
  function signOut() {
    AsyncStorage.removeItem("token");
    navigation.navigate("SignIn");
  }

  return (
    <View style={commonStyles.container}>
      <Text>Account Screen</Text>
      <Text>{username}</Text>
      <Button title="Sign out" onPress={signOut} />
    </View>
  );
}

const styles = StyleSheet.create({});
