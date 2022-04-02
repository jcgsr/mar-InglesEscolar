import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "../assets/style";

const Oitavo = () => {
  const navigation = useNavigation();
  const navegaAdjComparative = () => {
    navigation.navigate("Adjectives (Comparative)");
  };
  const navegaRelativePronouns = () => {
    navigation.navigate("Relative Pronouns");
  };
  const navegaAdjSuperlative = () => {
    navigation.navigate("Adjectives (Superlative)");
  };

  const navegaBeGoingTo = () => {
    navigation.navigate("Be Going To");
  };
  const navegaWill = () => {
    navigation.navigate("Will");
  };
  const navegaPrefixSufix = () => {
    navigation.navigate("Prefix and Sufix");
  };
  const navegaQuantifiers = () => {
    navigation.navigate("Quantifiers");
  };
  // const navegaPastContinuous = () => {
  //   navigation.navigate("Past Continuous");
  // };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={navegaAdjComparative}>
        <Text style={styles.txt}>Adjectives (Comparative)</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={navegaAdjSuperlative}>
        <Text style={styles.txt}>Adjectives (Superlative)</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={navegaRelativePronouns}>
        <Text style={styles.txt}>Relative Pronouns</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={navegaBeGoingTo}>
        <Text style={styles.txt}>Future (Be Going To)</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={navegaWill}>
        <Text style={styles.txt}>Future (Will)</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={navegaPrefixSufix}>
        <Text style={styles.txt}>Prefix and Sufix</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={navegaQuantifiers}>
        <Text style={styles.txt}>Quantifiers</Text>
      </TouchableOpacity>
      {/*<TouchableOpacity style={styles.btn} onPress={navegaPrepTime}>
        <Text style={styles.txt}>Prepositions of Time</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={navegaCan}>
        <Text style={styles.txt}>Can</Text>
      </TouchableOpacity>

     
    
      <TouchableOpacity style={styles.btn} onPress={navegaPastContinuous}>
        <Text style={styles.txt}>Past Continuous</Text>
      </TouchableOpacity>*/}
    </View>
  );
};

export default Oitavo;
