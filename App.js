import { StyleSheet, Text, View, Image } from "react-native";

import Sexto from "./src/components/Sexto";
import Setimo from "./src/components/Setimo";
import Oitavo from "./src/components/Oitavo";
import Nono from "./src/components/Nono";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarHideOnKeyboard: true,
          tabBarActiveTintColor: "red",
          tabBarStyle: {
            backgroundColor: "white",
            borderTopWidth: 0,
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
            headerTintColor: "red",
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
            headerTintColor: "red",
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
            headerTintColor: "red",
          }}
        />
        <Tab.Screen
          name="Nono"
          component={Nono}
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
            headerTintColor: "red",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

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
