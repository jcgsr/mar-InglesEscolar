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
  const navegaPresentSimple = () => {
    navigation.navigate("Present Simple");
  };
  const navegaPrepPlace = () => {
    navigation.navigate("Preposition of Place");
  };
  const navegaPlural = () => {
    navigation.navigate("Plural");
  };
  const navegaPresentContinuous = () => {
    navigation.navigate("Present Continuous");
  };
  const navegaHave = () => {
    navigation.navigate("To Have");
  };
  const navegaTime = () => {
    navigation.navigate("Telling Time");
  };
  const navegaOrdinals = () => {
    navigation.navigate("Ordinal Numbers");
  };
  const navegaDates = () => {
    navigation.navigate("Dates");
  };
  return (
    <View style={styles.containerSexto}>
      <TouchableOpacity style={styles.btnSexto} onPress={navegaSubjPronouns}>
        <Text style={styles.txt}>Subject Pronouns</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnSexto} onPress={navegaBe}>
        <Text style={styles.txt}>To Be</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnSexto} onPress={navegaArticles}>
        <Text style={styles.txt}>Articles</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnSexto} onPress={navegaPossessiveAdj}>
        <Text style={styles.txt}>Possessive Adj.</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnSexto} onPress={navegaCardinals}>
        <Text style={styles.txt}>Cardinal Numbers</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnSexto} onPress={navegaGenitive}>
        <Text style={styles.txt}>Genitive</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnSexto} onPress={navegaDemonstrative}>
        <Text style={styles.txt}>Demonstrative</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnSexto} onPress={navegaThereBe}>
        <Text style={styles.txt}>There Be</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnSexto} onPress={navegaPresentSimple}>
        <Text style={styles.txt}>Present Simple</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnSexto} onPress={navegaPrepPlace}>
        <Text style={styles.txt}>Preposition of Place</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnSexto} onPress={navegaPlural}>
        <Text style={styles.txt}>Plural</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnSexto}
        onPress={navegaPresentContinuous}
      >
        <Text style={styles.txt}>Present Continuous</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnSexto} onPress={navegaHave}>
        <Text style={styles.txt}>To Have</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnSexto} onPress={navegaTime}>
        <Text style={styles.txt}>Telling Time</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnSexto} onPress={navegaOrdinals}>
        <Text style={styles.txt}>Ordinal Numbers</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnSexto} onPress={navegaDates}>
        <Text style={styles.txt}>Dates</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Sexto;
