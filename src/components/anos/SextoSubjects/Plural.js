import {
  View,
  Text,
  ScrollView,
  Linking,
  TouchableOpacity,
} from "react-native";
import React from "react";

import styles from "../../../assets/style";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const Plural = () => {
  return (
    <ScrollView>
      <Text style={styles.txtBody}>
        • Regra Geral: Basta adicionar "<Text style={styles.txtBold}>s</Text>"
        ao substantivo.
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
          <Text style={styles.txtCol}>SINGULAR</Text>
          <Text style={styles.txtCol}>guitar</Text>
          <Text style={styles.txtCol}>violin</Text>
        </View>
        <View
          style={{
            backgroundColor: "#040644",
            flex: 1,
            alignItems: "center",
            padding: 5,
          }}
        >
          <Text style={styles.txtCol}>PLURAL</Text>
          <Text style={styles.txtCol}>
            guitar<Text style={styles.txtBold}>s</Text>
          </Text>
          <Text style={styles.txtCol}>
            violin<Text style={styles.txtBold}>s</Text>
          </Text>
        </View>
      </View>
      <Text style={styles.txtHR} />
      <Text style={styles.txtBody}>
        • Casos especiais: a) e o substantivo terminar com{" "}
        <Text style={styles.txtBold}>s, ss, sh, ch, x, o</Text>: deve-se
        adicionar <Text style={styles.txtBold}>es</Text>
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
          <Text style={styles.txtCol}>SINGULAR</Text>
          <Text style={styles.txtCol}>gas</Text>
          <Text style={styles.txtCol}>class</Text>
          <Text style={styles.txtCol}>wish</Text>
          <Text style={styles.txtCol}>watch</Text>
          <Text style={styles.txtCol}>box</Text>
          <Text style={styles.txtCol}>potato</Text>
        </View>
        <View
          style={{
            backgroundColor: "#040644",
            flex: 1,
            alignItems: "center",
            padding: 5,
          }}
        >
          <Text style={styles.txtCol}>PLURAL</Text>
          <Text style={styles.txtCol}>
            gas<Text style={styles.txtBold}>es</Text>
          </Text>
          <Text style={styles.txtCol}>
            class<Text style={styles.txtBold}>es</Text>
          </Text>
          <Text style={styles.txtCol}>
            wish<Text style={styles.txtBold}>es</Text>
          </Text>
          <Text style={styles.txtCol}>
            watch<Text style={styles.txtBold}>es</Text>
          </Text>
          <Text style={styles.txtCol}>
            box<Text style={styles.txtBold}>es</Text>
          </Text>
          <Text style={styles.txtCol}>
            potato<Text style={styles.txtBold}>es</Text>
          </Text>
        </View>
      </View>
      <Text style={styles.txtHR} />
      <Text style={styles.txtBody}>
        b) Se o substantivo terminar com <Text style={styles.txtBold}>y</Text>,
        retira-se o <Text style={styles.txtBold}>y</Text> e se coloca{" "}
        <Text style={styles.txtBold}>ies</Text>.
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
          <Text style={styles.txtCol}>SINGULAR</Text>
          <Text style={styles.txtCol}>lady</Text>
          <Text style={styles.txtCol}>country</Text>
        </View>
        <View
          style={{
            backgroundColor: "#040644",
            flex: 1,
            alignItems: "center",
            padding: 5,
          }}
        >
          <Text style={styles.txtCol}>PLURAL</Text>
          <Text style={styles.txtCol}>
            lad<Text style={styles.txtBold}>ies</Text>
          </Text>
          <Text style={styles.txtCol}>
            countr<Text style={styles.txtBold}>ies</Text>
          </Text>
        </View>
      </View>
      <Text style={styles.txtHR} />
      <Text style={styles.txtBody}>
        c) Se o substantivo terminar com{" "}
        <Text style={styles.txtBold}>f ou fe</Text>, retira-se{" "}
        <Text style={styles.txtBold}>f ou fe</Text> e coloca-se{" "}
        <Text style={styles.txtBold}>ves</Text>.
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
          <Text style={styles.txtCol}>SINGULAR</Text>
          <Text style={styles.txtCol}>wolf</Text>
        </View>
        <View
          style={{
            backgroundColor: "#040644",
            flex: 1,
            alignItems: "center",
            padding: 5,
          }}
        >
          <Text style={styles.txtCol}>PLURAL</Text>
          <Text style={styles.txtCol}>
            wol<Text style={styles.txtBold}>ves</Text>
          </Text>
        </View>
      </View>
      <Text style={styles.txtHR} />
      <Text style={styles.txtBody}>d) Irregulares (mais usados)</Text>
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
          <Text style={styles.txtCol}>SINGULAR</Text>
          <Text style={styles.txtCol}>man</Text>
          <Text style={styles.txtCol}>woman</Text>
          <Text style={styles.txtCol}>child</Text>
          <Text style={styles.txtCol}>person</Text>
          <Text style={styles.txtCol}>foot</Text>
          <Text style={styles.txtCol}>tooth</Text>
        </View>
        <View
          style={{
            backgroundColor: "#040644",
            flex: 1,
            alignItems: "center",
            padding: 5,
          }}
        >
          <Text style={styles.txtCol}>PLURAL</Text>
          <Text style={styles.txtCol}>
            <Text style={styles.txtBold}>men</Text>
          </Text>
          <Text style={styles.txtCol}>
            <Text style={styles.txtBold}>women</Text>
          </Text>
          <Text style={styles.txtCol}>
            <Text style={styles.txtBold}>children</Text>
          </Text>
          <Text style={styles.txtCol}>
            <Text style={styles.txtBold}>people</Text>
          </Text>
          <Text style={styles.txtCol}>
            <Text style={styles.txtBold}>feet</Text>
          </Text>
          <Text style={styles.txtCol}>
            <Text style={styles.txtBold}>teeth</Text>
          </Text>
        </View>
      </View>
      <Text style={styles.txtHR} />
      <Text style={styles.txtBody}>
        e) Mais usados que nunca mudam no plural:{" "}
        <Text style={styles.txtBold}>
          sheep - fish - deer - swine - buffalo - shrimp - aircraft - spacecraft
        </Text>
        . Obs.: Quer saber o que significa cada um desses substantivos? Clica
        aqui no{" "}
        <TouchableOpacity
          onPress={() =>
            Linking.openURL("https://translate.google.com.br/?hl=pt-BR")
          }
        >
          <MaterialCommunityIcons
            name="google-translate"
            size={28}
            color="black"
          />
        </TouchableOpacity>
        , preguiça! 😁
      </Text>
    </ScrollView>
  );
};

export default Plural;
