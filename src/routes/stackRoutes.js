import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Nono from "../components/Nono";
import Modals from "../components/anos/Nono/Modals";
import Conditionals from "../components/anos/Nono/Conditionals";

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Nono"
        component={Nono}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Modals" component={Modals} />
      <Stack.Screen name="Conditionals" component={Conditionals} />
    </Stack.Navigator>
  );
};

export default StackRoutes;
