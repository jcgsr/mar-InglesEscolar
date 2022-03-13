import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const Nono = () => {
  const navigation = useNavigation();
  const navegaModals = () => {
    navigation.navigate("Modals");
  };
  const navegaConditionals = () => {
    navigation.navigate("Conditionals");
  };
  return (
    <View>
      <Button title="Modals" onPress={navegaModals} />
      <Button title="Conditionals" onPress={navegaConditionals} />
    </View>
  );
};

export default Nono;
