import React from "react";
import { Text, View, ScrollView } from "react-native";

import styles from "../../../assets/style";

const SubjectPronouns = () => {
  return (
    <ScrollView>
      <Text style={styles.txtBody}>
        Os <Text style={styles.txtBold}>Pronomes Pessoais</Text> são os sujeitos
        dos verbos. O pronome pessoal <Text style={styles.txtBold}>"I" </Text>
        deve ser sempre escrito com letra maiúscula.{" "}
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
          <Text style={styles.txtCol}>I</Text>
          <Text style={styles.txtCol}>You</Text>
          <Text style={styles.txtCol}>He</Text>
          <Text style={styles.txtCol}>She</Text>
          <Text style={styles.txtCol}>It</Text>
          <Text style={styles.txtCol}>We</Text>
          <Text style={styles.txtCol}>You</Text>
          <Text style={styles.txtCol}>They</Text>
        </View>
        <View
          style={{
            backgroundColor: "#040644",
            flex: 1,
            alignItems: "center",
            padding: 5,
          }}
        >
          <Text style={styles.txtCol}>Eu</Text>
          <Text style={styles.txtCol}>Você</Text>
          <Text style={styles.txtCol}>Ele</Text>
          <Text style={styles.txtCol}>Ela</Text>
          <Text style={styles.txtCol}>Ele/Ela</Text>
          <Text style={styles.txtCol}>Nós</Text>
          <Text style={styles.txtCol}>Vocês</Text>
          <Text style={styles.txtCol}>Eles/Elas</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default SubjectPronouns;
