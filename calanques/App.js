import * as React from "react";
import { View, Text } from "react-native";
import Stats from "./Pages/Stats";
//import { createStackNavigator } from 'react-navigation-stack'
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "./Pages/Home";
import User from "./Pages/User";


const Root = createStackNavigator({

  home: {
    screen: Home,
  },
  stats: {
    screen: Stats,
  },
  user: {
    screen: User,
  }

});

const container = createAppContainer(Root);
export default container;   