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
  const navegaArticles = () => {
    navigation.navigate("Articles");
  };
  const navegaPossessiveAdj = () => {
    navigation.navigate("Possessive Adjectives");
  };
  const navegaCardinals = () => {
    navigation.navigate("Cardinals Numbers");
  };
  const navegaGenitive = () => {
    navigation.navigate("Genitive");
  };
  const navegaDemonstrative = () => {
    navigation.navigate("Demonstrative");
  };
  const navegaThereBe = () => {
    navigation.navigate("There Be");
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={navegaSubjPronouns}>
        <Text style={styles.txt}>Subject Pronouns</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={navegaBe}>
        <Text style={styles.txt}>To Be</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={navegaArticles}>
        <Text style={styles.txt}>Articles</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={navegaPossessiveAdj}>
        <Text style={styles.txt}>Possessive Adj.</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={navegaCardinals}>
        <Text style={styles.txt}>Cardinal Numbers</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={navegaGenitive}>
        <Text style={styles.txt}>Genitive</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={navegaDemonstrative}>
        <Text style={styles.txt}>Demonstrative</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={navegaThereBe}>
        <Text style={styles.txt}>There Be</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Sexto;
