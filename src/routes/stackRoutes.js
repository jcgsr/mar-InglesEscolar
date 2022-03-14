import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Nono from "../components/Nono";
import Modals from "../components/anos/NonoSubjects/Modals";
import Conditionals from "../components/anos/NonoSubjects/Conditionals";

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Nono"
        component={Nono}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Modals"
        component={Modals}
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
        name="Conditionals"
        component={Conditionals}
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

export default StackRoutes;
