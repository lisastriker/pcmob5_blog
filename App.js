import { StatusBar } from "expo-status-bar";
import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import SignInScreen from "./screens/SignInScreen";
import AccountScreen from "./screens/AccountScreen";
import SignUpScreen from "./screens/SignUpScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from "react";
import { useEffect } from "react";
import TabStack from "./components/TabStack"
import {Provider} from "react-redux"
import store from "./redux/createStore"
const Stack = createStackNavigator();

export default function App(){
  return(
    <Provider store={store}>
      <App/>
    </Provider>
  )
}

function App() { //Now App is function
  const [loading, setLoading] = useState(true);
  const [signedIn, setSignedIn] = useState(false);
  
  async function loadToken(){
    const token = await AsyncStorage.getItem("token");
    if(token){
      setSignedIn(true);
    }
    setLoading(false);
  }
  
  useEffect(()=>{
    loadToken();
  }, [])
  
  return loading ? (
    <View style={styles.container}>
      <ActivityIndicator/>
    </View>) : (
    <NavigationContainer>
      <Stack.Navigator mode="modal" headerMode="none" initialRouteName = {signedIn ? "TabStack" : "SignIn"}screenOptions={{ animationEnabled:false}}>
        <Stack.Screen component={TabStack} name="TabStack" />
        <Stack.Screen component={SignInScreen} name="SignIn" />
        <Stack.Screen component={SignUpScreen} name="SignUp"/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
