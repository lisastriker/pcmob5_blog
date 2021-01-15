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
import {Provider, useDispatch, useSelector} from "react-redux"
import store from "./redux/createStore"
import{signInAction} from "./redux/ducks/blogAuth"

const Stack = createStackNavigator();

export default function AppWrapper(){
  return(
    <Provider store={store}>
      <App/>
    </Provider>
  )
}

function App() { //Now App is function
  const [loading, setLoading] = useState(true);
  const signedIn = useSelector((state)=>state.auth.signedIn) //auth from createStore, signedIn from initial state of reducer
  const dispatch = useDispatch(); //To replace setSignedIn
  async function loadToken(){
    const token = await AsyncStorage.getItem("token");
    if(token){
      dispatch(signInAction()) //Replaced setSignIn(true)
    }
    setLoading(false);
  }
  
  useEffect(()=>{
    loadToken();
  }, [])
  
  if (loading){
    return  (
    <View style={styles.container}>
      <ActivityIndicator/>
    </View>);
 } 
  return(
    <NavigationContainer>
      {signedIn? (<TabStack/>): (
        <Stack.Navigator mode="modal" headerMode="none" initialRouteName = {signedIn ? "TabStack" : "SignIn"}screenOptions={{ animationEnabled:false}}>
        <Stack.Screen component={SignInScreen} name="SignIn" />
        <Stack.Screen component={SignUpScreen} name="SignUp"/>
      </Stack.Navigator>
      )}
      
    </NavigationContainer>
  ); //If you cannot return 2 things, you can us a fragment <> </> for the stackscreens
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
