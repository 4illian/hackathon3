import * as React from "react";
import { View, Text, Dimensions } from "react-native";
import Map from "../Components/Map"
import Graph from "../Components/Graph"
import Piechart from "../Components/Piechart"
//import { BarChart, Grid, XAxis } from 'react-native-svg-charts'


export default function Home() {



  return (
    <View
      style={{
        // flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
      }}

    >
      <Map />

      <Piechart />




      

    </View>
  );
}