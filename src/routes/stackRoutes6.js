import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Sexto from "../components/Sexto";
import SubjectPronouns from "../components/anos/SextoSubjects/SubjectPronouns";
import Be from "../components/anos/SextoSubjects/Be";
import Articles from "../components/anos/SextoSubjects/Articles";
import PossessiveAdj from "../components/anos/SextoSubjects/PossessiveAdj";
import Cardinals from "../components/anos/SextoSubjects/Cardinals";
import Genitive from "../components/anos/SextoSubjects/Genitive";
import Demonstrative from "../components/anos/SextoSubjects/Demonstrative";
import ThereBe from "../components/anos/SextoSubjects/ThereBe";
import PresentSimple from "../components/anos/SextoSubjects/PresentSimple";
import PrepPlace from "../components/anos/SextoSubjects/PrepPlace";
import Plural from "../components/anos/SextoSubjects/Plural";
import PresentContinuous from "../components/anos/SextoSubjects/PresentContinuous";
import Have from "../components/anos/SextoSubjects/Have";
import Time from "../components/anos/SextoSubjects/Time";
import Ordinals from "../components/anos/SextoSubjects/Ordinals";

const Stack = createNativeStackNavigator();

const StackRoutes6 = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Sexto"
        component={Sexto}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Subject Pronouns"
        component={SubjectPronouns}
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
        name="To Be"
        component={Be}
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
        name="Articles"
        component={Articles}
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
        name="Possessive Adjectives"
        component={PossessiveAdj}
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
        name="Cardinals Numbers"
        component={Cardinals}
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
        name="Genitive"
        component={Genitive}
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
        name="Demonstrative"
        component={Demonstrative}
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
        name="There Be"
        component={ThereBe}
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
        name="Present Simple"
        component={PresentSimple}
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
        name="Preposition of Place"
        component={PrepPlace}
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
        name="Plural"
        component={Plural}
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
        name="Present Continuous"
        component={PresentContinuous}
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
        name="To Have"
        component={Have}
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
        name="Telling Time"
        component={Time}
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
        name="Ordinal Numbers"
        component={Ordinals}
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

export default StackRoutes6;
