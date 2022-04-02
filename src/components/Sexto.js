import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "../assets/style";

const Sexto = () => {
  const navigation = useNavigation();
  const navegaSubjPronouns = () => {
    navigation.navigate("Subject Pronouns");
  };
  const navegaBe = () => {
    navigation.navigate("To Be");
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={navegaSubjPronouns}>
        <Text style={styles.txt}>Subject Pronouns</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={navegaBe}>
        <Text style={styles.txt}>To be</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity style={styles.btn} onPress={navegaPrepTime}>
        <Text style={styles.txt}>Prepositions of Time</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default Sexto;
