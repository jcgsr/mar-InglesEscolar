import React from "react";
import { View, Text, ScrollView } from "react-native";

import styles from "../../../assets/style";

const ObjectPronouns = () => {
  return (
    <View>
      <ScrollView>
        <Text style={styles.txtBody}>
          O Passado Simples é um tempo verbal usado para falar sobre coisas que
          aconteceram ou existiram antes do momento em que se fala, ou seja, do
          momento atual. Ele mostra que você está falando sobre algo que já
          aconteceu, enfatiza que a ação terminou por completo.
        </Text>
      </ScrollView>
    </View>
  );
};

export default ObjectPronouns;
