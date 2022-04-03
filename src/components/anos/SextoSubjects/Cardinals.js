import { View, Text, ScrollView } from "react-native";
import React from "react";

import styles from "../../../assets/style";

const Cardinal = () => {
  return (
    <ScrollView>
      <Text style={styles.txtBody}>
        Os <Text style={styles.txtBold}>Números Cardinais</Text> (um, dois,
        três, etc.) são adjetivos que se referem à quantidade. Confere a tabela
        abaixo de 0 a 100:
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
          <Text style={styles.txtCol}>0</Text>
          <Text style={styles.txtCol}>1</Text>
          <Text style={styles.txtCol}>2</Text>
          <Text style={styles.txtCol}>3</Text>
          <Text style={styles.txtCol}>4</Text>
          <Text style={styles.txtCol}>5</Text>
          <Text style={styles.txtCol}>6</Text>
          <Text style={styles.txtCol}>7</Text>
          <Text style={styles.txtCol}>8</Text>
          <Text style={styles.txtCol}>9</Text>
          <Text style={styles.txtCol}>10</Text>
          <Text style={styles.txtCol}>11</Text>
          <Text style={styles.txtCol}>12</Text>
          <Text style={styles.txtCol}>13</Text>
          <Text style={styles.txtCol}>14</Text>
          <Text style={styles.txtCol}>15</Text>
          <Text style={styles.txtCol}>16</Text>
          <Text style={styles.txtCol}>17</Text>
          <Text style={styles.txtCol}>18</Text>
          <Text style={styles.txtCol}>19</Text>
          <Text style={styles.txtCol}>20</Text>
          <Text style={styles.txtCol}>21</Text>
          <Text style={styles.txtCol}>22</Text>
          <Text style={styles.txtCol}>23</Text>
          <Text style={styles.txtCol}>24</Text>
          <Text style={styles.txtCol}>25</Text>
          <Text style={styles.txtCol}>26</Text>
          <Text style={styles.txtCol}>27</Text>
          <Text style={styles.txtCol}>28</Text>
          <Text style={styles.txtCol}>29</Text>
          <Text style={styles.txtCol}>30</Text>
          <Text style={styles.txtCol}>40</Text>
          <Text style={styles.txtCol}>50</Text>
          <Text style={styles.txtCol}>60</Text>
          <Text style={styles.txtCol}>70</Text>
          <Text style={styles.txtCol}>80</Text>
          <Text style={styles.txtCol}>90</Text>
          <Text style={styles.txtCol}>100</Text>
        </View>
        <View
          style={{
            backgroundColor: "#040644",
            flex: 1,
            alignItems: "center",
            padding: 5,
          }}
        >
          <Text style={styles.txtCol}>zero</Text>
          <Text style={styles.txtCol}>one</Text>
          <Text style={styles.txtCol}>two</Text>
          <Text style={styles.txtCol}>three</Text>
          <Text style={styles.txtCol}>four</Text>
          <Text style={styles.txtCol}>five</Text>
          <Text style={styles.txtCol}>six</Text>
          <Text style={styles.txtCol}>seven</Text>
          <Text style={styles.txtCol}>eight</Text>
          <Text style={styles.txtCol}>nine</Text>
          <Text style={styles.txtCol}>ten</Text>
          <Text style={styles.txtCol}>eleven</Text>
          <Text style={styles.txtCol}>twelve</Text>
          <Text style={styles.txtCol}>thirteen</Text>
          <Text style={styles.txtCol}>fourteen</Text>
          <Text style={styles.txtCol}>fifteen</Text>
          <Text style={styles.txtCol}>sixteen</Text>
          <Text style={styles.txtCol}>seventeen</Text>
          <Text style={styles.txtCol}>eighteen</Text>
          <Text style={styles.txtCol}>nineteen</Text>
          <Text style={styles.txtCol}>twenty</Text>
          <Text style={styles.txtCol}>twenty-one</Text>
          <Text style={styles.txtCol}>twenty-two</Text>
          <Text style={styles.txtCol}>twenty-three</Text>
          <Text style={styles.txtCol}>twenty-four</Text>
          <Text style={styles.txtCol}>twenty-five</Text>
          <Text style={styles.txtCol}>twenty-six</Text>
          <Text style={styles.txtCol}>twenty-seven</Text>
          <Text style={styles.txtCol}>twenty-eight</Text>
          <Text style={styles.txtCol}>twenty-nine</Text>
          <Text style={styles.txtCol}>thirty</Text>
          <Text style={styles.txtCol}>forty</Text>
          <Text style={styles.txtCol}>fifty</Text>
          <Text style={styles.txtCol}>sixty</Text>
          <Text style={styles.txtCol}>seventy</Text>
          <Text style={styles.txtCol}>eighty</Text>
          <Text style={styles.txtCol}>ninety</Text>
          <Text style={styles.txtCol}>one hundred</Text>
        </View>
      </View>
      <Text style={styles.txtH2}>Dicas</Text>
      <View style={styles.txtBodyExemplos}>
        <Text style={styles.txtExemplos}>
          a) do 13 até o 19, o uso do sufixo inglês
          <Text style={styles.txtBold}>teen</Text> significa "10" (se tirar um
          <Text style={styles.txtBold}>e</Text> fica ten - dez). Por isso, tenta
          lembrar que estás juntando o 3, 4, 5, 6, 7, 8, 9 com 10. Ex.: 4 + 10 =
          14 (four + <Text style={styles.txtBold}>teen</Text> = fourteen). Só
          cuidado com o 13 e 15 que muda um pouquinho a escrita do 'three' e do
          'five'. O restante é só acrescentar{" "}
          <Text style={styles.txtBold}>teen</Text> ao número.{" "}
        </Text>
        <Text style={styles.txtExemplos}>
          b) o sufixo inglês <Text style={styles.txtBold}>ty</Text> das dezenas
          (twen<Text style={styles.txtBold}>ty</Text>, thir
          <Text style={styles.txtBold}>ty</Text> etc...) equivale ao nosso "
          <Text style={styles.txtBold}>inte</Text>", "
          <Text style={styles.txtBold}>inta</Text>", "
          <Text style={styles.txtBold}>enta</Text>" do 20 até 90.
        </Text>
        <Text style={styles.txtExemplos}>
          c) <Text style={styles.txtBold}>hundred</Text> significa{" "}
          <Text style={styles.txtBold}>centena</Text>, então two hundred (sem
          "s") = duas centenas, ou seja, duzentos. Com essa última dica, tu já
          podes escrever até 999 em inglês 😁 seguindo a tabela acima. Por
          exemplo: 888 = eight hundred (and) eighty-eight.
        </Text>
      </View>
    </ScrollView>
  );
};

export default Cardinal;
