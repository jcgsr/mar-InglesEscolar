import { View, Text, ScrollView } from "react-native";
import React from "react";

import styles from "../../../assets/style";
const PrepPlace = () => {
  return (
    <ScrollView>
      <Text style={styles.txtBody}>
        As <Text style={styles.txtBold}>Preposições de Lugar </Text>
        são usadas para mostrar a posição ou localização de uma coisa em relação
        à outra. As preposições respondem a pergunta "Onde?" Abaixo segue uma
        lista com as preposições mais comuns de lugar:
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
          <Text style={styles.txtCol}>above</Text>
          <Text style={styles.txtCol}>among</Text>
          <Text style={styles.txtCol}>at</Text>
          <Text style={styles.txtCol}>behind</Text>
          <Text style={styles.txtCol}>below</Text>
          <Text style={styles.txtCol}>between</Text>
          <Text style={styles.txtCol}>in</Text>
          <Text style={styles.txtCol}>in front of</Text>
          <Text style={styles.txtCol}>next to</Text>
          <Text style={styles.txtCol}>near</Text>
          <Text style={styles.txtCol}>on</Text>
          <Text style={styles.txtCol}>over</Text>
          <Text style={styles.txtCol}>under</Text>
        </View>
        <View
          style={{
            backgroundColor: "#040644",
            flex: 1,
            alignItems: "center",
            padding: 5,
          }}
        >
          <Text style={styles.txtCol}>em cima, sobre</Text>
          <Text style={styles.txtCol}>entre</Text>
          <Text style={styles.txtCol}>no, na</Text>
          <Text style={styles.txtCol}>atrás</Text>
          <Text style={styles.txtCol}>abaixo</Text>
          <Text style={styles.txtCol}>entre</Text>
          <Text style={styles.txtCol}>em, no, na</Text>
          <Text style={styles.txtCol}>na frente</Text>
          <Text style={styles.txtCol}>ao lado</Text>
          <Text style={styles.txtCol}>próximo</Text>
          <Text style={styles.txtCol}>no, na</Text>
          <Text style={styles.txtCol}>acima, sobre</Text>
          <Text style={styles.txtCol}>embaixo, sob</Text>
        </View>
      </View>
      <Text style={styles.txtH3}>
        Explicações Com Exemplos De Uso Das Preposições Mais Duvidosas.
      </Text>
      <View style={styles.containerExemplos}>
        <Text style={styles.txtExemplos}>
          <Text style={styles.txtBold}>Above</Text>- quando se quer falar que
          algo/alguém está "mais alto do que", sem haver contato. Ex.:
          Spider-Man is <Text style={styles.txtRed}>above</Text> the building.
          (O Homem-Aranha está{" "}
          <Text style={styles.txtRed}>sobre (por cima do)</Text> o prédio.)
        </Text>
        <Text style={styles.txtExemplos}>
          <Text style={styles.txtBold}>Between</Text> - entre duas coisas ou
          pessoas. Ex.: Spider-Man is <Text style={styles.txtRed}>between</Text>{" "}
          Mary Jane and Gwen Stacy. (O Homem-Aranha está{" "}
          <Text style={styles.txtRed}>entre</Text> Mary Jane e Gwen Stacy.)
        </Text>
        <Text style={styles.txtExemplos}>
          <Text style={styles.txtBold}>Among</Text> - entre três ou mais
          coisas/pessoas. Ex.: Spider-Man is{" "}
          <Text style={styles.txtRed}>among</Text> Mary Jane, Gwen Stacy and
          Betty Brant. (O Homem-Aranha está{" "}
          <Text style={styles.txtRed}>entre</Text> Mary Jane, Gwen Stacy e Betty
          Brant.).
        </Text>
        <Text style={styles.txtExemplos}>
          <Text style={styles.txtBold}>In</Text> - quando se quer falar em estar
          dentro de uma área, de um lugar fechado, de um bairro, de uma cidade,
          de um país ou de um continente. Ex.: Spider-Man is{" "}
          <Text style={styles.txtRed}>in</Text> New York. (O Homem-Aranha está{" "}
          <Text style={styles.txtRed}>em</Text> Nova York.)
        </Text>
        <Text style={styles.txtExemplos}>
          <Text style={styles.txtBold}>On</Text> - quando se quer indicar a
          superfície de alguma coisa havendo contato ou o endereço incompleto, a
          rua ou o andar. Ex.: Peter Parker lived{" "}
          <Text style={styles.txtRed}>on</Text> Ingram St. (Peter Parker morou{" "}
          <Text style={styles.txtRed}>na</Text> Rua Ingram.)
          <Text style={styles.txtExemplos}></Text>
        </Text>
        <Text style={styles.txtExemplos}>
          <Text style={styles.txtBold}>At</Text> - quando se quer falar um
          endereço completo ou uma localização específica. Ex.: Peter Parker
          lived <Text style={styles.txtRed}>at</Text> 20 Ingram St. (Peter
          Parker morou <Text style={styles.txtRed}>na</Text> Rua Ingram, nº 20.)
        </Text>

        <Text style={styles.txtExemplos}>
          <Text style={styles.txtBold}>In front of</Text> - quando se quer
          indicar que há um pequeno espaço em relação ao que está em frente.
          Ex.: Spider-Man is <Text style={styles.txtRed}>in front of</Text>{" "}
          Green Goblin. (O Homem-Aranha está{" "}
          <Text style={styles.txtRed}>na frente do </Text> Duende Verde.){" "}
        </Text>
        <Text style={styles.txtExemplos}>
          <Text style={styles.txtBold}> Next to</Text> - quando se quer indicar
          algo/alguém que está/é 'vizinho'. Ex.: Mary Jane lives{" "}
          <Text style={styles.txtRed}>next to</Text> Peter Parker. ((Mary Jane
          mora <Text style={styles.txtRed}>ao lado de</Text> Peter Parker.)
        </Text>
      </View>
    </ScrollView>
  );
};

export default PrepPlace;
