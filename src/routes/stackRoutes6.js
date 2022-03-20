import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Sexto from "../components/Sexto";
import SubjectPronouns from "../components/anos/SextoSubjects/SubjectPronouns";

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
    </Stack.Navigator>
  );
};

export default StackRoutes6;
