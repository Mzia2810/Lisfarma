/** @format */
import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "../screens/HomePage";
import BottomTabScreen from "./BottomTab";
import DoctorProfile from "../screens/DoctorProfile";
import PersonalInformation from '../screens/PersonalInformation';


const Stack = createStackNavigator();
const MainStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName='BottomTabScreen'>
      <Stack.Screen
        name="BottomTabScreen"
        options={{
          headerShown: false,
        }}
        component={BottomTabScreen}
      />
     
      <Stack.Screen
        name="DoctorProfile"
        options={{
          headerShown: false,
        }}
        component={DoctorProfile}
      />
      <Stack.Screen
        name="PersonalInformation"
        options={{
          headerShown: false,
        }}
        component={PersonalInformation}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
