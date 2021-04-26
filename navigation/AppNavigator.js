import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

import AboutScreen from "../screens/AboutScreen";
import AddHomeScreen from "../screens/AddHomeScreen";
import HomeDetailsScreen from "../screens/HomeDetailsScreen";
import HomeListScreen from "../screens/HomeListScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function stackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeList"
        component={HomeListScreen}
        options={{ title: "Home Hunt" }}
      />
      <Stack.Screen name="HomeDetails" component={HomeDetailsScreen} />
      <Stack.Screen
        name="AddHome"
        component={AddHomeScreen}
        options={{ title: "Add Home" }}
      />
    </Stack.Navigator>
  );
}

function AboutNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="About" component={AboutScreen} />
    </Stack.Navigator>
  );
}

function AppsNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: () => {
            let iconName;
            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "About") {
              iconName = "info";
            }

            return <MaterialIcons name={iconName} size={24} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "blue",
          inactiveTintColor: "gray",
          keyboardHidesTabBar: true,
        }}
      >
        <Tab.Screen name="Home" component={stackNavigator} />
        <Tab.Screen name="About" component={AboutNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppsNavigator;
