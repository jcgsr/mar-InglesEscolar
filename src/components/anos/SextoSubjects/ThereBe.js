import { View, Text, ScrollView } from "react-native";
import React from "react";

import styles from "../../../assets/style";

const ThereBe = () => {
  return (
    <ScrollView>
      <Text style={styles.txtBody}>
        <Text style={styles.txtBold}>There to Be</Text> é usado quando se quer
        fazer refência à existência ou presença de alguém ou algo. Ele posssui
        uma forma no singular:
        <Text style={styles.txtBold}>there is (there's)</Text>; e outra no
        plural <Text style={styles.txtBold}>there are</Text>. Ambas as formas só
        possuem uma tradução em português:{" "}
        <Text style={styles.txtBold}>há</Text>. Na linguagem coloquial, ao invés
        de <Text style={styles.txtBold}>há</Text>, a tradução será{" "}
        <Text style={styles.txtBold}>tem</Text>. Vê os exemplos:
      </Text>
      <View style={styles.txtBodyExemplos}>
        <Text style={styles.txtExemplos}>
          a)<Text style={styles.txtRed}> There is/there's</Text> a guitar over
          there. (<Text style={styles.txtRed}> Há/tem</Text> uma guitarra ali.)
        </Text>
        <Text style={styles.txtExemplos}>
          b)<Text style={styles.txtRed}> There are</Text> two guitars over
          there. (<Text style={styles.txtRed}> Há/tem</Text> duas guitarras
          ali.)
        </Text>
      </View>
      <Text style={styles.txtBody}>
        Para negar basta usar <Text style={styles.txtBold}>not</Text> após{" "}
        <Text style={styles.txtBold}>is/are</Text>, e para fazer perguntas,
        basta começar com os mesmos <Text style={styles.txtBold}>is/are</Text>.
        Confere os exemplos:{" "}
      </Text>
      <View style={styles.txtBodyExemplos}>
        <Text style={styles.txtExemplos}>
          c)<Text style={styles.txtRed}> There is not/There isn't</Text> a
          guitar over there. (<Text style={styles.txtRed}>Não há/tem</Text> uma
          guitarra ali.)
        </Text>
        <Text style={styles.txtExemplos}>
          d)<Text style={styles.txtRed}> There are not/There aren't</Text> two
          guitars over there. (<Text style={styles.txtRed}>Não há/tem</Text>{" "}
          duas guitarras ali.)
        </Text>
        <Text style={styles.txtExemplos}>
          Na interrogativa: <Text style={styles.txtRed}> Is there</Text> a
          guitar over there? (<Text style={styles.txtRed}>Há/tem</Text> uma
          guitarra ali?). <Text style={styles.txtRed}> Are there</Text> two
          guitars over there? (<Text style={styles.txtRed}>Há/tem</Text> duas
          guitarras ali?).
        </Text>
      </View>
    </ScrollView>
  );
};

export default ThereBe;
