import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Oitavo from "../components/Oitavo";
import AdjectivesComparative from "../components/anos/OitavoSubjects/AdjectivesComparative";
import AdjectivesSuperlative from "../components/anos/OitavoSubjects/AdjectivesSuperlative";
import RelativePronouns from "../components/anos/OitavoSubjects/RelativePronouns";
import BeGoingTo from "../components/anos/OitavoSubjects/BeGoingTo";
import Will from "../components/anos/OitavoSubjects/Will";
import PrefixSufix from "../components/anos/OitavoSubjects/PrefixSufix";
import Quantifiers from "../components/anos/OitavoSubjects/Quantifiers";
import Countable from "../components/anos/OitavoSubjects/Countable";
import UsedTo from "../components/anos/OitavoSubjects/UsedTo";

const Stack = createNativeStackNavigator();

const StackRoutes8 = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Oitavo"
        component={Oitavo}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Adjectives (Comparative)"
        component={AdjectivesComparative}
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
        name="Adjectives (Superlative)"
        component={AdjectivesSuperlative}
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
        name="Relative Pronouns"
        component={RelativePronouns}
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
        name="Be Going To"
        component={BeGoingTo}
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
        name="Will"
        component={Will}
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
        name="Prefix and Sufix"
        component={PrefixSufix}
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
        name="Quantifiers"
        component={Quantifiers}
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
        name="Countable"
        component={Countable}
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
        name="Used to"
        component={UsedTo}
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

export default StackRoutes8;
