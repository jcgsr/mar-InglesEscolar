import React from "react";
import { Text, View, ScrollView } from "react-native";

import styles from "../../../assets/style";

const PossessiveAdj = () => {
  return (
    <ScrollView>
      <Text style={styles.txtBody}>
        Os <Text style={styles.txtBold}>Adjetivos Possessivos</Text> são usados
        para mostrar
        <Text style={styles.txtBold}> posse</Text> ou{" "}
        <Text style={styles.txtBold}>propriedade</Text> de algo. Embora os
        utilizemos quando nos referimos a pessoas, é mais no sentido de
        relacionamento do que de posse. Podem ser usados tanto no singular
        quanto no plural. Confere a tabela abaixo:
      </Text>
      <View style={styles.containerTable}>
        <View
          style={{
            backgroundColor: "#B60D22",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            padding: 5,
          }}
        >
          <Text style={styles.txtCol}>My</Text>
          <Text style={styles.txtCol}>Your</Text>
          <Text style={styles.txtCol}>His</Text>
          <Text style={styles.txtCol}>Her</Text>
          <Text style={styles.txtCol}>Its</Text>
          <Text style={styles.txtCol}>Our</Text>
          <Text style={styles.txtCol}>Your</Text>
          <Text style={styles.txtCol}>Their</Text>
        </View>
        <View
          style={{
            backgroundColor: "#040644",
            flex: 1,
            alignItems: "center",
            padding: 5,
          }}
        >
          <Text style={styles.txtCol}>Meu(s)/Minha(s)</Text>
          <Text style={styles.txtCol}>Seu(s)/Suas</Text>
          <Text style={styles.txtCol}>Dele</Text>
          <Text style={styles.txtCol}>Dela</Text>
          <Text style={styles.txtCol}>Dele/Dela</Text>
          <Text style={styles.txtCol}>Nosso</Text>
          <Text style={styles.txtCol}>Seus</Text>
          <Text style={styles.txtCol}>Deles/Delas</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default PossessiveAdj;
