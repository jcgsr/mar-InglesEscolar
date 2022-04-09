import { View, Text, ScrollView } from "react-native";
import React from "react";

import styles from "../../../assets/style";

const Dates = () => {
  return (
    <ScrollView>
      <Text style={styles.txtBody}>
        As datas são escritas de maneiras diferentes na língua inglesa. A forma
        mais comum, no <Text style={styles.txtBold}>inglês britânico</Text>, é
        escrever o dia do mês primeiro, depois o mês (sempre começando com uma
        letra maiúscula) e depois o ano. Veja alguns exemplos:
      </Text>
      <View style={styles.txtBodyExemplos}>
        <Text style={styles.txtExemplos}>a) 28 Jan</Text>
        <Text style={styles.txtExemplos}>b) 28 January</Text>
        <Text style={styles.txtExemplos}>c) 28 January 1981</Text>
        <Text style={styles.txtExemplos}>d) 28th January 1981</Text>
        <Text style={styles.txtExemplos}>e) the 28th of January 1981</Text>
        <Text style={styles.txtExemplos}>f) the 28th of January, 1981</Text>
        <Text style={styles.txtExemplos}>g) Wednesday, 28 January 1981</Text>
        <Text style={styles.txtExemplos}>
          h) Wednesday the 28th of January, 1981
        </Text>
        <Text style={styles.txtExemplos}>
          i) 28/01/1981, 28.01.1981, 28-01-1981
        </Text>
        <Text style={styles.txtExemplos}>j) 8/1/81, 8.1.19, 8-1-81</Text>
        <Text style={styles.txtExemplos}>k) 8Jan1981, 8-Jan-81</Text>
        <Text style={styles.txtExemplos}>
          l) Se decidir usar <Text style={styles.txtBold}>the</Text>, é
          obrigatório usar também <Text style={styles.txtBold}>of</Text>
        </Text>
      </View>
      <Text style={styles.txtHR} />
      <Text style={styles.txtBody}>
        No <Text style={styles.txtBold}>inglês americano</Text> escrito, o mês
        da data vem antes do dia e do ano. Vê os exemplos:
      </Text>
      <View style={styles.txtBodyExemplos}>
        <Text style={styles.txtExemplos}>a) Jan 28</Text>
        <Text style={styles.txtExemplos}>b) January 28 </Text>
        <Text style={styles.txtExemplos}>c) January 28, 1981</Text>
        <Text style={styles.txtExemplos}>d) Wednesday, January 28 1981</Text>
        <Text style={styles.txtExemplos}>
          e) January the 28th, January 28th - são menos comuns
        </Text>
        <Text style={styles.txtExemplos}>f) 01/28/81, 01.28.81, 01-28-81</Text>
        <Text style={styles.txtExemplos}>
          g) 01/28/1981, 01.28.1981, 01-28-1981{" "}
        </Text>
        <Text style={styles.txtExemplos}>h) Jan. 28, 1981</Text>
      </View>
      <Text style={styles.txtHR} />
      <Text style={styles.txtExemplos}>
        No <Text style={styles.txtBold}>Padrão Internacional</Text> a sequência
        deve ser ano, mês e dia: AAAA-MM-DD. a) 1981-01-28 b) 1981 January 28
        (sem vírgula)
      </Text>
    </ScrollView>
  );
};

export default Dates;
