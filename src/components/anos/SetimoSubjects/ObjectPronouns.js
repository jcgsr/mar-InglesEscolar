import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";

import styles from "../../../assets/style";

import { useNavigation } from "@react-navigation/native";

const ObjectPronouns = () => {
  const navigation = useNavigation();
  const navegaSubjPronouns = () => {
    navigation.navigate("Subject Pronouns");
  };
  return (
    <View>
      <ScrollView>
        <Text style={styles.txtBody}>
          Os Pronomes Objetos são os objetos dos verbos 😁. Isso significa que
          eles <Text style={styles.txtBold}>recebem</Text> a ação do verbo, por
          isso, aparecem depois do verbo. Simples assim. O equivalente
          gramatical em português seria o{" "}
          <Text style={styles.txtBold}>pronome pessoal do caso oblíquo</Text> .
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
            <Text style={styles.txtCol}>SUBJECT</Text>
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
            <Text style={styles.txtCol}>OBJECT</Text>
            <Text style={styles.txtCol}>Me</Text>
            <Text style={styles.txtCol}>You</Text>
            <Text style={styles.txtCol}>Him</Text>
            <Text style={styles.txtCol}>Her</Text>
            <Text style={styles.txtCol}>It</Text>
            <Text style={styles.txtCol}>Us</Text>
            <Text style={styles.txtCol}>You</Text>
            <Text style={styles.txtCol}>Them</Text>
          </View>
          <View
            style={{
              backgroundColor: "grey",
              flex: 1,
              alignItems: "center",
              padding: 5,
            }}
          >
            <Text style={styles.txtCol}>TRANSLATION</Text>
            <Text style={styles.txtCol}>me/mim</Text>
            <Text style={styles.txtCol}>o/a/te/ti/lhe</Text>
            <Text style={styles.txtCol}>o/lhe</Text>
            <Text style={styles.txtCol}>a/lhe</Text>
            <Text style={styles.txtCol}>o/a/lhe</Text>
            <Text style={styles.txtCol}>nos</Text>
            <Text style={styles.txtCol}>lhes</Text>
            <Text style={styles.txtCol}>os/as/lhes</Text>
          </View>
        </View>
        <Text style={styles.txtBody}>
          Tens que estar afiado com os{" "}
          <TouchableOpacity style={styles.btn} onPress={navegaSubjPronouns}>
            <Text style={styles.txt}>Subject Pronouns</Text>
          </TouchableOpacity>{" "}
          para os <Text style={styles.txtBold}>Object Pronouns</Text> fazerem
          mais sentido. Abaixo, alguns exemplos dos dois tipos de pronomes:
        </Text>
        <Text style={styles.txtExemplos}>
          <Text style={styles.txtRed}>I </Text> like Spider-Man. Spider-Man
          saved <Text style={styles.txtRed}>me </Text>me.
        </Text>
        <Text style={styles.txtExemplos}>
          <Text style={styles.txtRed}>You </Text> listen to sertanejo... These
          types of music curse <Text style={styles.txtRed}>You </Text>.
        </Text>

        <Text style={styles.txtExemplos}>
          <Text style={styles.txtRed}>He </Text> made a Grateful Dead tattoo.
          This person tattoed <Text style={styles.txtRed}>him </Text>.
        </Text>

        <Text style={styles.txtExemplos}>
          <Text style={styles.txtRed}>She </Text> is a protester. The cops
          attacked <Text style={styles.txtRed}>her </Text>.
        </Text>

        <Text style={styles.txtExemplos}>
          <Text style={styles.txtRed}>It </Text> destroys the world. So, the
          people have to get rid of <Text style={styles.txtRed}>it </Text>{" "}
          first.
        </Text>

        <Text style={styles.txtExemplos}>
          <Text style={styles.txtRed}>We </Text> have to stop the nazibozo
          president! This evil creature is killing
          <Text style={styles.txtRed}>us </Text> all!
        </Text>

        <Text style={styles.txtExemplos}>
          <Text style={styles.txtRed}>They </Text> are ruining the country. It
          is about time to annihilate <Text style={styles.txtRed}>them </Text>.
        </Text>
      </ScrollView>
    </View>
  );
};

export default ObjectPronouns;
