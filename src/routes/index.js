import { StyleSheet, Text, View, Image } from "react-native";

import Sexto from "../components/Sexto";
import Setimo from "../components/Setimo";
import Oitavo from "../components/Oitavo";
import StackRoutes from "./stackRoutes";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { BlurView } from "expo-blur";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const Routes = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: "red",
        tabBarStyle: {
          backgroundColor: "white",
          borderTopWidth: 0,
          shadowOpacity: 0.8,
        },
      }}
    >
      <Tab.Screen
        name="Sexto"
        component={Sexto}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons
                name="numeric-6-box"
                size={24}
                color="red"
              />
            );
          },
          headerStyle: {
            backgroundColor: "red",
          },
          headerTintColor: "white",
        }}
      />
      <Tab.Screen
        name="Sétimo"
        component={Setimo}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons
                name="numeric-7-box"
                size={24}
                color="red"
              />
            );
          },
          headerStyle: {
            backgroundColor: "red",
          },
          headerTintColor: "white",
        }}
      />
      <Tab.Screen
        name="Oitavo"
        component={Oitavo}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons
                name="numeric-8-box"
                size={24}
                color="red"
              />
            );
          },
          headerStyle: {
            backgroundColor: "red",
          },
          headerTintColor: "white",
        }}
      />
      <Tab.Screen
        name="Nono"
        component={StackRoutes}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons
                name="numeric-9-box"
                size={24}
                color="red"
              />
            );
          },
          headerStyle: {
            backgroundColor: "red",
          },
          headerTintColor: "white",
        }}
      />
    </Tab.Navigator>
  );
};

export default Routes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f00",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: "70%",
    height: "30%",
  },
  txt: {
    color: "white",
  },
});
