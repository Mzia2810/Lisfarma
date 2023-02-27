/** @format */

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "../navigation/MainStack";

const AppRout = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default AppRout;
