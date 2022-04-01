import React from "react";
import { View, Text, ScrollView } from "react-native";

import styles from "../../../assets/style";

const PastContinuous = () => {
  return (
    <View>
      <ScrollView>
        <Text style={styles.txtBody}>
          O<Text style={styles.txtBold}> Passado Contínuo (gerúndio)</Text> é
          feito a partir do passado do verbo
          <Text style={styles.txtBold}> to be (</Text>
          <Text style={styles.txtRed}>was/were</Text>) e a forma{" "}
          <Text style={styles.txtRed}>-ing</Text> de um verbo. O Past Continuous
          é usado para falar do passado quando:{" "}
          <Text style={styles.txtExemplos}>
            a) algo estava acontecendo antes e depois de uma outra ação: "Os
            meninos <Text style={styles.txtBold}> estavam jogando</Text> bola
            quando cheguei em casa."{" "}
          </Text>
          <Text style={styles.txtExemplos}>
            b) algo estava acontecendo antes e depois de um tempo específico:
            "Eram 20:00 e eu ainda{" "}
            <Text style={styles.txtBold}> estava jogando </Text> Homem-Aranha."{" "}
          </Text>
          <Text style={styles.txtExemplos}>
            c) algo continuou por algum tempo: "Todos{" "}
            <Text style={styles.txtBold}> estavam chorando</Text>.
          </Text>
          <Text style={styles.txtExemplos}>
            {""}
            d) algo acontecia repetidamente: "Todos{" "}
            <Text style={styles.txtBold}> estavam protestando</Text>. depois dos
            aumentos."
          </Text>{" "}
          {""}A característica mais forte é a terminação{" "}
          <Text style={styles.txtRed}>ing</Text>, que em português pode ser as
          terminações <Text style={styles.txtRed}>ando/endo/indo</Text>. Vê os
          exemplos: walk<Text style={styles.txtRed}>ing</Text> (and
          <Text style={styles.txtRed}>ando</Text>), do
          <Text style={styles.txtRed}>ing</Text>(faz
          <Text style={styles.txtRed}>endo</Text>), build
          <Text style={styles.txtRed}>ing</Text>
          (constru<Text style={styles.txtRed}>indo</Text>).
        </Text>
        <Text style={styles.txtHR} />
        <Text style={styles.txtBody}>
          A forma completa para a construção do Passado Contínuo deve seguir as
          seguintes estruturas:
        </Text>
        <Text style={styles.txtH2}>Afirmativa</Text>
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
            <Text style={styles.txtCol}>I, you, he...</Text>
          </View>
          <View
            style={{
              backgroundColor: "#040644",
              flex: 1,
              alignItems: "center",
              padding: 5,
            }}
          >
            <Text style={styles.txtCol}>was/were</Text>
          </View>
          <View
            style={{
              backgroundColor: "#064906",
              flex: 1,
              alignItems: "center",
              padding: 5,
            }}
          >
            <Text style={styles.txtCol}>look</Text>
          </View>
          <View
            style={{
              backgroundColor: "#393A39",
              flex: 1,
              alignItems: "center",
              padding: 5,
            }}
          >
            <Text style={styles.txtCol}>ing</Text>
          </View>
        </View>
        <Text style={styles.txtExemplos}>
          Ex.: I was looking. You were looking. He was looking.
        </Text>
        <Text style={styles.txtHR}></Text>
        <Text style={styles.txtH2}>Negativa</Text>
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
            <Text style={styles.txtCol}>I, you, he...</Text>
          </View>
          <View
            style={{
              backgroundColor: "#040644",
              flex: 1,
              alignItems: "center",
              padding: 5,
            }}
          >
            <Text style={styles.txtCol}>was not</Text>
          </View>
          <View
            style={{
              backgroundColor: "#064906",
              flex: 1,
              alignItems: "center",
              padding: 5,
            }}
          >
            <Text style={styles.txtCol}>learn</Text>
          </View>
          <View
            style={{
              backgroundColor: "#393A39",
              flex: 1,
              alignItems: "center",
              padding: 5,
            }}
          >
            <Text style={styles.txtCol}>ing</Text>
          </View>
        </View>
        <Text style={styles.txtExemplos}>
          Ex.: I was not learning. You were not learning. He was not learning.
          Obs.: Pode-se contrair was/were com o not ={" "}
          <Text style={styles.txtRed}> wasn't, weren't</Text>.
        </Text>
        <Text style={styles.txtHR}></Text>
        <Text style={styles.txtH2}>Interrogativa</Text>
        <View style={styles.containerTable}>
          <View
            style={{
              backgroundColor: "#040644",
              flex: 1,
              alignItems: "center",
              padding: 5,
            }}
          >
            <Text style={styles.txtCol}>was/were</Text>
          </View>
          <View
            style={{
              backgroundColor: "#B60D22",
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              padding: 5,
            }}
          >
            <Text style={styles.txtCol}>I, you, he...</Text>
          </View>
          <View
            style={{
              backgroundColor: "#064906",
              flex: 1,
              alignItems: "center",
              padding: 5,
            }}
          >
            <Text style={styles.txtCol}>watch</Text>
          </View>
          <View
            style={{
              backgroundColor: "#393A39",
              flex: 1,
              alignItems: "center",
              padding: 5,
            }}
          >
            <Text style={styles.txtCol}>ing?</Text>
          </View>
        </View>
        <Text style={styles.txtExemplos}>
          Ex.: Was I watching? Were you watching? Was he watching?
        </Text>
        <Text style={styles.txtHR}></Text>
        <View style={styles.containerTableCol}>
          <Text style={styles.txtH2}>Atenção</Text>
          {/*AT*/}
          <Text style={styles.txtExemplos}>
            a) se o verbo terminar com a vogal{" "}
            <Text style={styles.txtBold}>e</Text> e o mesmo não for oxítono (a
            última sílaba mais forte), deve-se omitir esse{" "}
            <Text style={styles.txtBold}>e</Text> e adicionar{" "}
            <Text style={styles.txtRed}>ing</Text>. Ex.: danc
            <Text style={styles.txtBold}>e</Text> → danc
            <Text style={styles.txtRed}>ing</Text>
          </Text>
          <Text style={styles.txtExemplos}>
            b) se o verbo terminar com a combinação{" "}
            <Text style={styles.txtBold}>ie</Text>, deve-se trocá-la por
            <Text style={styles.txtBold}> y</Text> e só depois adicionar{" "}
            <Text style={styles.txtRed}>ing</Text>. Ex.: l
            <Text style={styles.txtBold}>ie</Text> → l
            <Text style={styles.txtRed}>ying</Text>
          </Text>

          <Text style={styles.txtExemplos}>
            c) se o verbo terminar com a sequência{" "}
            <Text style={styles.txtBold}>
              CVC (Consoante + Vogal + Consoante)
            </Text>{" "}
            e for oxítono (vê lá em cima o que é oxítono, esquecido🤦) ,
            dobra-se a última consoante e adiciona-se{" "}
            <Text style={styles.txtRed}>ing</Text>. Ex.: pre
            <Text style={styles.txtBold}>fer</Text> → prefer
            <Text style={styles.txtRed}>ring</Text>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default PastContinuous;
