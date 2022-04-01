import React from "react";
import { View, Text, ScrollView } from "react-native";

import styles from "../../../assets/style";

const PrepTime = () => {
  return (
    <View>
      <ScrollView>
        <Text style={styles.txtBody}>
          As Preposições de Tempo (são várias:{" "}
          <Text style={styles.txtBold}>during, before, after, since,</Text> etc)
          servem para informar sobre o tempo em que algo acontece. Nessa página,
          o foco será <Text style={styles.txtBold}>at, in, on</Text>. Os três
          podem ter a tradução de{" "}
          <Text style={styles.txtBold}>em, no(s), na(s), às, aos</Text>. Nesse
          caso específico, não te preocupes com a tradução em si, mas com o{" "}
          <Text style={styles.txtBold}>uso </Text>
          de cada um. Como forma geral, <Text style={styles.txtRed}>
            at{" "}
          </Text>{" "}
          serve para informar hora precisa;{" "}
          <Text style={styles.txtRed}>in </Text> para períodos mais longos
          (meses, anos, séculos. etc) e <Text style={styles.txtRed}>on </Text>
          para dias e datas. Vê a tabela abaixo e alguns exemplos.
        </Text>
        <Text style={styles.txtH2}>Usos</Text>
        <View style={styles.containerTableCol}>
          <View
            style={{
              backgroundColor: "#B60D22",
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              padding: 5,
            }}
          >
            <Text style={styles.txtCol}>AT</Text>
            <Text style={styles.txtCol}>horas, épocas festivas</Text>
          </View>
          <View
            style={{
              backgroundColor: "#040644",
              flex: 1,
              alignItems: "center",
              padding: 5,
            }}
          >
            <Text style={styles.txtCol}>IN</Text>
            <Text style={styles.txtCol}>
              meses, estações do ano, anos, séculos, partes do dia, períodos de
              tempo mais longo
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#064906",
              flex: 1,
              alignItems: "center",
              padding: 5,
              marginBottom: 20,
            }}
          >
            <Text style={styles.txtCol}>ON</Text>
            <Text style={styles.txtCol}>
              dias da semana, dias + partes do dia, datas, dias especiais
            </Text>
          </View>
          <Text style={styles.txtH2}>Exemplos</Text>
          {/*AT*/}
          <Text style={styles.txtExemplos}>
            <Text style={styles.txtRed}>AT</Text> → Spider-Man arrived{" "}
            <Text style={styles.txtRed}>at</Text> 08:38 p.m. (O Homem-Aranha
            chegou <Text style={styles.txtRed}>às</Text> 20:38.)
          </Text>
          <Text style={styles.txtExemplos}>
            Spider-Man always gets in trouble{" "}
            <Text style={styles.txtRed}>at</Text> Christmas. (O Homem-Aranha
            sempre se mete em problemas <Text style={styles.txtRed}>no</Text>
          </Text>

          <Text style={styles.txtExemplos}>
            ATENÇÃO: <Text style={styles.txtRed}>at</Text> night (à noite);{" "}
            <Text style={styles.txtRed}>at</Text> the weekend (no fim de semana)
          </Text>
          {/*IN*/}
          <Text style={styles.txtHR}></Text>
          <Text style={styles.txtExemplos}>
            <Text style={styles.txtRed}>IN</Text> → Spider-Man was born{" "}
            <Text style={styles.txtRed}>in </Text>
            August. (O Homem-Aranha nasceu <Text style={styles.txtRed}>
              em
            </Text>{" "}
            agosto.)
          </Text>
          <Text style={styles.txtExemplos}>
            <Text style={styles.txtRed}>In </Text> the summer of 1962,
            Spider-Man was born. (<Text style={styles.txtRed}>No </Text> verão
            de 1962, o Homem-Aranha nasceu.)
          </Text>
          <Text style={styles.txtExemplos}>
            Spider-Man was born <Text style={styles.txtRed}>in</Text> 1962. (O
            Homem-Aranha nasceu <Text style={styles.txtRed}>em </Text> 1962.)
          </Text>

          <Text style={styles.txtExemplos}>
            Every Spider Man <Text style={styles.txtRed}>in</Text> the 21st
            century was ranked. (Cada Homem-Aranha{" "}
            <Text style={styles.txtRed}>no </Text> século 21 foi classificado.)
          </Text>
          <Text style={styles.txtExemplos}>
            ATENÇÃO: <Text style={styles.txtRed}>in</Text> the morning (de/pela
            manhã); <Text style={styles.txtRed}>in</Text> the evening (à/pela
            noite); <Text style={styles.txtRed}>in</Text> the afternoon (à/pela
            tarde); <Text style={styles.txtRed}>in</Text> the past (no passado);
          </Text>
          {/*ON*/}
          <Text style={styles.txtHR}></Text>
          <Text style={styles.txtExemplos}>
            <Text style={styles.txtRed}>ON</Text> →{" "}
            <Text style={styles.txtRed}>On</Text> August 10th, Spider-Man
            appeared for the first time. (<Text style={styles.txtRed}>Em</Text>{" "}
            10 de agosto, o Homem-Aranha aranha apareceu pela primeira vez.)
          </Text>
          <Text style={styles.txtExemplos}>
            <Text style={styles.txtRed}>On</Text> Fridays I always play the
            Spider-Man game on my imaginary PS5. (
            <Text style={styles.txtRed}>Às</Text> sextas-feiras, sempre jogo o
            jogo do Homem-Aranha no meu PS5 imaginário)
          </Text>
          <Text style={styles.txtExemplos}>
            Dias especiais: <Text style={styles.txtRed}>on</Text> Spider-Man's
            birthday (<Text style={styles.txtRed}>no</Text> aniversário do
            Homem-Aranha); <Text style={styles.txtRed}>on</Text> New Year's Eve
            (<Text style={styles.txtRed}>na</Text> véspera de ano novo)
          </Text>

          <Text style={styles.txtExemplos}>
            Dias + partes do dia: <Text style={styles.txtRed}>on</Text> Tuesday
            afternoon (na/pela terça à tarde)
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default PrepTime;
