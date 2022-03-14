import React from "react";
import { View, Text, ScrollView } from "react-native";

import styles from "../../../assets/style";

const Conditionals = () => {
  return (
    <ScrollView>
      <Text style={styles.txtBody}>
        Os Condicionais descrevem o resultado de uma determinada condição. A
        oração condicional iniciada com <Text style={styles.txtBold}>if</Text>{" "}
        informa a condição ("se você estudar muito...") e a oração principal
        informa o resultado ("...você passará nos exames"). A ordem das orações
        não altera o significado. Abaixo, os quatro condicionais com exemplos.
      </Text>
      <View style={{ backgroundColor: "#ddd" }}>
        <Text style={styles.txtH2}>Zero Conditional (Zero Condicional)</Text>
        <Text style={styles.txtBodyExemplos}>
          É usado para falar sobre coisas que geralmente são verdadeiras,
          especialmente para leis e regras. Quando há 100% de chance de
          acontecer. Estrutura:
        </Text>
        <View style={styles.containerTable}>
          <View
            style={{
              backgroundColor: "red",
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              padding: 5,
            }}
          >
            <Text style={styles.txtCol}>if/when</Text>
          </View>
          <View
            style={{
              backgroundColor: "blue",
              flex: 1,
              alignItems: "center",
              padding: 5,
            }}
          >
            <Text style={styles.txtCol}>present simple</Text>
          </View>
          <View
            style={{
              backgroundColor: "grey",
              flex: 1,
              alignItems: "center",
              padding: 5,
            }}
          >
            <Text style={styles.txtCol}>present simple</Text>
          </View>
        </View>
        <Text style={styles.txtExemplos}>
          <Text style={styles.txtBold}>If </Text> you heat ice, it melts. - Se
          você esquenta(r) o gelo, ele derrete.
        </Text>
      </View>
      <View style={{ backgroundColor: "#d1d1d1" }}>
        <Text style={styles.txtH2}>
          First Conditional (Primeiro Condicional)
        </Text>
        <Text style={styles.txtBodyExemplos}>
          É usado para falar sobre situações futuras nas quais se acredia serem
          reais ou possíveis. Quando é provável que aconteça. Estrutura:
        </Text>
        <View style={styles.containerTable}>
          <View
            style={{
              backgroundColor: "red",
              flex: 1,
              alignItems: "center",
              padding: 5,
            }}
          >
            <Text style={styles.txtCol}>if/when</Text>
          </View>
          <View
            style={{
              backgroundColor: "blue",
              flex: 1,
              alignItems: "center",
              padding: 5,
            }}
          >
            <Text style={styles.txtCol}>present simple</Text>
          </View>
          <View
            style={{
              backgroundColor: "grey",
              flex: 1,
              alignItems: "center",
              padding: 5,
            }}
          >
            <Text style={styles.txtCol}>will + verb</Text>
          </View>
        </View>
        <Text style={styles.txtExemplos}>
          <Text style={styles.txtBold}>If </Text> tomorrow is sunny, I will go
          to the beach. - Se fizer/faz sol amanhã, eu irei à praia.
        </Text>
        <Text style={styles.txtExemplos}>
          <Text style={styles.txtBold}>When </Text>he finishes work, he will
          leave. - Quando ele terminar o trabalho, ele sairá.
        </Text>
      </View>
      <View style={{ backgroundColor: "#dcdcdc" }}>
        <Text style={styles.txtH2}>
          Second Conditional (Segundo Condicional)
        </Text>
        <Text style={styles.txtBodyExemplos}>
          É usado para imaginar situações presentes ou futuras que são
          impossíveis ou improváveis na realidade. Estrutura:
        </Text>
        <View style={styles.containerTable}>
          <View
            style={{
              backgroundColor: "red",
              flex: 1,
              alignItems: "center",
              padding: 5,
            }}
          >
            <Text style={styles.txtCol}>if</Text>
          </View>
          <View
            style={{
              backgroundColor: "blue",
              flex: 1,
              alignItems: "center",
              padding: 5,
            }}
          >
            <Text style={styles.txtCol}>past simple</Text>
          </View>
          <View
            style={{
              backgroundColor: "grey",
              flex: 1,
              alignItems: "center",
              padding: 5,
            }}
          >
            <Text style={styles.txtCol}>would + verb</Text>
          </View>
        </View>
        <Text style={styles.txtExemplos}>
          <Text style={styles.txtBold}>If </Text> I had space, I would have a
          dog. - Se eu tivesse espaço, eu teria um cachorro.
        </Text>
        <Text style={styles.txtExemplos}>
          Quando <Text style={styles.txtBold}>if </Text> for seguido por{" "}
          <Text style={styles.txtBold}>be </Text>, todas as formas assumem{" "}
          <Text style={styles.txtBold}>were </Text>
          (fosse, estivesse). Ex.: If I were, if you were, if he were, etc.
        </Text>
      </View>
      <View style={{ backgroundColor: "#cacaca" }}>
        <Text style={styles.txtH2}>
          Third Conditional (Terceiro Condicional)
        </Text>
        <Text style={styles.txtBodyExemplos}>
          É usado para imaginar um passado diferente, uma mudança em uma
          situação passada e o resultado diferente dessa mudança. Quando a
          situação for totalmente hipotética. Estrutura:
        </Text>
        <View style={styles.containerTable}>
          <View
            style={{
              backgroundColor: "red",
              flex: 1,
              alignItems: "center",
              padding: 5,
            }}
          >
            <Text style={styles.txtCol}>if</Text>
          </View>
          <View
            style={{
              backgroundColor: "blue",
              flex: 2,
              alignItems: "center",
              padding: 5,
            }}
          >
            <Text style={styles.txtCol}>past perfect</Text>
          </View>
          <View
            style={{
              backgroundColor: "grey",
              flex: 3,
              alignItems: "center",
              padding: 5,
            }}
          >
            <Text style={styles.txtCol}>would have + past participle</Text>
          </View>
        </View>
        <Text style={styles.txtExemplos}>
          <Text style={styles.txtBold}>If </Text> you had rented that apartment,
          you would have lived better. - Se você tivesse alugado aquele
          apartmento, você teria morado melhor.
        </Text>
      </View>
    </ScrollView>
  );
};

export default Conditionals;
