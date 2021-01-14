import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useState, useEffect } from "react";
const API= "http://lisastriker.pythonanywhere.com"
const API_LOGIN = "/auth"
const API_SIGNUP = "/newuser"

export function useAuth(username, password, navigationCallback){ 
  const [errorText, setErrorText] = useState("");
  const [loading, setLoading] = useState(false);
 
   async function signup() {
    console.log("---signUp time----")
    Keyboard.dismiss();
    
    try {
      setLoading(true)
      const response = await axios.post(API + API_SIGNUP, {
        username,
        password
      });
      if (response.data === "Username is taken") {
        setErrorText("This username already exists");
        setLoading(false)
        return;
      }
      login();
    } catch(error){
      setLoading(false)
      console.log("Error signing up!");
      console.log(error.response);
      setErrorText("Can't Sign up")
      setErrorText(error.response.data.description);
    }
    // do stuff here to log in
  }

  async function login() {
    console.log("---Login time----")
    
    try {
      setLoading(true)
      const response = await axios.post(API + API_LOGIN, {
        username,
        password
      });
      console.log("Success logging in!");
      console.log(response);
      await AsyncStorage.setItem("token", response.data.access_token); //await for the token
      navigationCallback()
      setLoading(false)
    } catch(error){
      setLoading(false)
      console.log("Error logging in!");
      console.log(error.response);
      setErrorText(error.response.data.description);
    }
    // do stuff here to log in
  } return [login, signup, loading, errorText]
}  