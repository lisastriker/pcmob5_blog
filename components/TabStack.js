import { NavigationContainer } from '@react-navigation/native';
import React from "react";
import { createStackNavigator } from '@react-navigation/stack'
import AccountScreen from '../screens/AccountScreen';
import IndexScreen from "../screens/IndexScreen"
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function BlogStack() { //IndexScreen is in a stack, you can look above n see the header
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Index"
          component={IndexScreen}
          options={{ headerLeft: null }}
        />
      </Stack.Navigator>
    );
  }
  
  export default function TabStack() {
    return (
      <Tab.Navigator initialRouteName={BlogStack}>
        <Tab.Screen name="Blog" component={BlogStack} /> 
        <Tab.Screen name="Account" component={AccountScreen} />
      </Tab.Navigator>
    );
  }