import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "../assets/style";

const Nono = () => {
  const navigation = useNavigation();
  const navegaModals = () => {
    navigation.navigate("Modals");
  };
  const navegaConditionals = () => {
    navigation.navigate("Conditionals");
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={navegaModals}>
        <Text style={styles.txt}>Modals</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={navegaConditionals}>
        <Text style={styles.txt}>Conditionals</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Nono;
