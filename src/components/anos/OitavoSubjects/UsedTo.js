import { Text, ScrollView } from "react-native";
import React from "react";

import styles from "../../../assets/style";

const UsedTo = () => {
  return (
    <ScrollView>
      <Text style={styles.txtBody}>
        <Text style={styles.txtBold}>Used to</Text> + verbo é usado para falar
        sobre estados ou ações que eram verdadeiras ou ocorriam no passado
        regularmente, mas não são verdadeiras ou não acontecem mais agora. Não
        te esqueças: <Text style={styles.txtBold}>used to</Text> sempre se
        refere ao <Text style={styles.txtBold}>passado</Text>. A tradução fica:
        <Text style={styles.txtBold}> costumava</Text>. Em frases afirmativas,
        sua forma jamais muda. Nas negativas a estrutura fica:
        <Text style={styles.txtBold}> did not/didn't use to + verbo</Text>.
        Percebe que fica <Text style={styles.txtBold}> use</Text> e não{" "}
        <Text style={styles.txtBold}>used</Text>. Nas interrogativas, fica:{" "}
        <Text style={styles.txtBold}>did you/he/she use to + verbo</Text>. Aqui
        também: <Text style={styles.txtBold}>use</Text> e não{" "}
        <Text style={styles.txtBold}>used</Text>. Vê os exemplos abaixo. a) He
        <Text style={styles.txtRed}> used to</Text> play the guitar. (Ele
        <Text style={styles.txtRed}> costumava</Text> tocar violão.) - Ele não
        toca mais... b) He <Text style={styles.txtRed}>didn't use to</Text> play
        the piano.(Ele não <Text style={styles.txtRed}>costumava</Text> tocar
        piano.) c) <Text style={styles.txtRed}> Did she use to</Text> play the
        violin? (Ela <Text style={styles.txtRed}>costumava</Text> tocar
        violino?)
      </Text>
    </ScrollView>
  );
};

export default UsedTo;
