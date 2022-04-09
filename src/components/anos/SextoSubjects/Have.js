import { View, Text, ScrollView } from "react-native";
import React from "react";

import styles from "../../../assets/style";

const Have = () => {
  return (
    <ScrollView>
      <Text style={styles.txtBody}>
        Um dos verbos mais importantes em inglês, o verbo
        <Text style={styles.txtBold}>to have</Text>
        língua. Ele serve para indicar{" "}
        <Text style={styles.txtBold}>to posse</Text>. É um verbo irregular. Pode
        ser utilizado como verbo auxiliar para formar o "Presente Perfeito".
        Possui duas flexões no Presente Simples:{" "}
        <Text style={styles.txtBold}>have/has</Text>. Confere os seus usos nas
        tabelas abaixo. Dica: na afirmativa{" "}
        <Text style={styles.txtBold}>has</Text> sempre com{" "}
        <Text style={styles.txtBold}>he/she/it</Text> e{" "}
        <Text style={styles.txtBold}>have </Text>
        com todos os outros pronomes.
      </Text>
      <Text style={styles.txtH2}>Conjugação</Text>
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
          <Text style={styles.txtCol}>AFIRMATIVA</Text>
          <Text style={styles.txtCol}>I have</Text>
          <Text style={styles.txtCol}>You have</Text>
          <Text style={styles.txtCol}>He has</Text>
          <Text style={styles.txtCol}>She has</Text>
          <Text style={styles.txtCol}>It has</Text>
          <Text style={styles.txtCol}>We have</Text>
          <Text style={styles.txtCol}>You have</Text>
          <Text style={styles.txtCol}>They have</Text>
        </View>
        <View
          style={{
            backgroundColor: "#040644",
            flex: 1,
            alignItems: "center",
            padding: 5,
          }}
        >
          <Text style={styles.txtCol}>TO HAVE - TER</Text>
          <Text style={styles.txtCol}>Eu tenho</Text>
          <Text style={styles.txtCol}>Você tem</Text>
          <Text style={styles.txtCol}>Ele tem</Text>
          <Text style={styles.txtCol}>Ela tem</Text>
          <Text style={styles.txtCol}>Ele/Ela tem</Text>
          <Text style={styles.txtCol}>Nós temos</Text>
          <Text style={styles.txtCol}>Vocês têm</Text>
          <Text style={styles.txtCol}>Eles/Elas têm</Text>
        </View>
      </View>
      <Text style={styles.txtHR} />
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
          <Text style={styles.txtCol}>NEGATIVA</Text>
          <Text style={styles.txtCol}>I don't have</Text>
          <Text style={styles.txtCol}>You don't have</Text>
          <Text style={styles.txtCol}>He doesn't have</Text>
          <Text style={styles.txtCol}>She doesn't have</Text>
          <Text style={styles.txtCol}>It doesn't have</Text>
          <Text style={styles.txtCol}>We don't have</Text>
          <Text style={styles.txtCol}>You don't have</Text>
          <Text style={styles.txtCol}>They don't have</Text>
        </View>
        <View
          style={{
            backgroundColor: "blue",
            flex: 1,
            alignItems: "center",
            padding: 5,
          }}
        >
          <Text style={styles.txtCol}>TO HAVE - TER</Text>
          <Text style={styles.txtCol}>Eu não tenho</Text>
          <Text style={styles.txtCol}>Você não tem</Text>
          <Text style={styles.txtCol}>Ele não tem</Text>
          <Text style={styles.txtCol}>Ela não tem</Text>
          <Text style={styles.txtCol}>Ele/Ela não tem</Text>
          <Text style={styles.txtCol}>Nós não temos</Text>
          <Text style={styles.txtCol}>Vocês não têm</Text>
          <Text style={styles.txtCol}>Eles/Elas não têm</Text>
        </View>
      </View>
      <Text style={styles.txtHR} />
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
          <Text style={styles.txtCol}>INTERROGATIVA</Text>
          <Text style={styles.txtCol}>Do I have?</Text>
          <Text style={styles.txtCol}>Do you have?</Text>
          <Text style={styles.txtCol}>Does he have?</Text>
          <Text style={styles.txtCol}>Does she have?</Text>
          <Text style={styles.txtCol}>Does it have?</Text>
          <Text style={styles.txtCol}>Do we have?</Text>
          <Text style={styles.txtCol}>Do you have?</Text>
          <Text style={styles.txtCol}>Do they have?</Text>
        </View>
        <View
          style={{
            backgroundColor: "#040644",
            flex: 1,
            alignItems: "center",
            padding: 5,
          }}
        >
          <Text style={styles.txtCol}>TO HAVE - TER</Text>
          <Text style={styles.txtCol}>Eu tenho?</Text>
          <Text style={styles.txtCol}>Você tem?</Text>
          <Text style={styles.txtCol}>Ele tem?</Text>
          <Text style={styles.txtCol}>Ela tem?</Text>
          <Text style={styles.txtCol}>Ele/Ela tem?</Text>
          <Text style={styles.txtCol}>Nós temos?</Text>
          <Text style={styles.txtCol}>Vocês têm?</Text>
          <Text style={styles.txtCol}>Eles/Elas têm?</Text>
        </View>
      </View>
      <Text style={styles.txtHR} />
    </ScrollView>
  );
};

export default Have;
