import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "../assets/style";

const Setimo = () => {
  const navigation = useNavigation();
  const navegaPastSimple = () => {
    navigation.navigate("Past Simple");
  };
  const navegaObjPronouns = () => {
    navigation.navigate("Object Pronouns");
  };
  const navegaPrepTime = () => {
    navigation.navigate("Prepositions of Time");
  };
  const navegaCan = () => {
    navigation.navigate("Can");
  };
  const navegaCould = () => {
    navigation.navigate("Could");
  };
  const navegaLinkingWords = () => {
    navigation.navigate("Linking Words");
  };
  const navegaBePast = () => {
    navigation.navigate("Be (Past Simple)");
  };
  const navegaPastContinuous = () => {
    navigation.navigate("Past Continuous");
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={navegaPastSimple}>
        <Text style={styles.txt}>Past Simple</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={navegaObjPronouns}>
        <Text style={styles.txt}>Object Pronouns</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={navegaPrepTime}>
        <Text style={styles.txt}>Prepositions of Time</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={navegaCan}>
        <Text style={styles.txt}>Can</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={navegaCould}>
        <Text style={styles.txt}>Could</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={navegaLinkingWords}>
        <Text style={styles.txt}>Linking Words</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={navegaBePast}>
        <Text style={styles.txt}>Be (Past Simple)</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={navegaPastContinuous}>
        <Text style={styles.txt}>Past Continuous</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Setimo;
