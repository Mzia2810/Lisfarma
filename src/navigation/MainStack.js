/** @format */
import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "../screens/HomePage";
import BottomTabScreen from "./BottomTab";
import DoctorProfile from "../screens/DoctorProfile";
import PersonalInformation from '../screens/PersonalInformation';
import Document from '../screens/Document';
import DeltailPatient from '../screens/DeltailPatient';
import RegisterPatient from '../screens/RegisterPatient';
import Historical from "../screens/Historical";
import Experience from '../screens/Experience';
import Login from "../screens/Login";


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
      <Stack.Screen
        name="Document"
        options={{
          headerShown: false,
        }}
        component={Document}
      />
      <Stack.Screen
        name="DeltailPatient"
        options={{
          headerShown: false,
        }}
        component={DeltailPatient}
      />
      <Stack.Screen
        name="RegisterPatient"
        options={{
          headerShown: false,
        }}
        component={RegisterPatient}
      />
      <Stack.Screen
        name="Historical"
        options={{
          headerShown: false,
        }}
        component={Historical}
      />
      <Stack.Screen
        name="Experience"
        options={{
          headerShown: false,
        }}
        component={Experience}
      />
      <Stack.Screen
        name="HomePage"
        options={{
          headerShown: false,
        }}
        component={HomePage}
      />
      <Stack.Screen
        name="Login"
        options={{
          headerShown: false,
        }}
        component={Login}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
