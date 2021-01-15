import React from "react";
import { useSelector } from "react-redux";
import SignInSignUpScreen from "../components/SignInSignUpView";

export default function SignInScreen({ navigation }) { //Navigation here is to receive
  return(
    <SignInSignUpScreen navigation={navigation} isSignIn={true}/> //Navigation at the bottom is to give
  )
}