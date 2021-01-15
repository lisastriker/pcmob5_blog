import React from "react";
import { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  ActivityIndicator,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import SignInSignUpView from "../components/SignInSignUpView"
import { useSelector } from "react-redux";

export default function SignUpScreen({navigation}){
  return <SignInSignUpView navigation={navigation} isSignIn={false}/>
}

const styles = StyleSheet.create({});