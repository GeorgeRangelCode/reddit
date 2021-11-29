import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import NewsScreen from "../screens/News";
import TopScreen from "../screens/Top";
import PopularScreen from "../screens/Popular";
import HotScreen from "../screens/Hot";

const Tab = createMaterialTopTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="News" component={NewsScreen} />
      <Tab.Screen name="Top" component={TopScreen} />
      <Tab.Screen name="Popular" component={PopularScreen} />
      <Tab.Screen name="Hot" component={HotScreen} />
    </Tab.Navigator>
  );
};

export default Navigation;
