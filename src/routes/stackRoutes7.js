import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Setimo from "../components/Setimo";
import PastSimple from "../components/anos/SetimoSubjects/PastSimple";
import ObjectPronouns from "../components/anos/SetimoSubjects/ObjectPronouns";
import PrepTime from "../components/anos/SetimoSubjects/PrepTime";
import Can from "../components/anos/SetimoSubjects/Can";
import Could from "../components/anos/SetimoSubjects/Could";

const Stack = createNativeStackNavigator();

const StackRoutes7 = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Setimo"
        component={Setimo}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Past Simple"
        component={PastSimple}
        options={{
          headerStyle: {
            backgroundColor: "blue",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            color: "white",
          },
        }}
      />
      <Stack.Screen
        name="Object Pronouns"
        component={ObjectPronouns}
        options={{
          headerStyle: {
            backgroundColor: "blue",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            color: "white",
          },
        }}
      />
      <Stack.Screen
        name="Prepositions of Time"
        component={PrepTime}
        options={{
          headerStyle: {
            backgroundColor: "blue",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            color: "white",
          },
        }}
      />
      <Stack.Screen
        name="Can"
        component={Can}
        options={{
          headerStyle: {
            backgroundColor: "blue",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            color: "white",
          },
        }}
      />
      <Stack.Screen
        name="Could"
        component={Could}
        options={{
          headerStyle: {
            backgroundColor: "blue",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            color: "white",
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default StackRoutes7;
