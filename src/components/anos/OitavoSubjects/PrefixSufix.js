import { View, Text, ScrollView } from "react-native";
import React from "react";

import styles from "../../../assets/style";
const PrefixSufix = () => {
  return (
    <ScrollView>
      <Text style={styles.txtBody}>
        Prefixos são letras que são adicionadas no início de uma palavra para
        formar uma nova palavra com um significado diferente. Os prefixos podem,
        por exemplo, criar uma nova palavra de significado oposto ao da palavra
        à qual o prefixo está anexado. Eles também podem tornar uma palavra
        negativa ou expressar relações de tempo, lugar ou maneira. Sufixos, por
        sua vez, são letras ou grupos de letras adicionadas no final de uma
        palavra formando uma nova, sendo essa nova palavra, na maioria das
        vezes, de uma classe gramatical diferente. Obs.: Não há absolutamente
        nenhuma regra sobre usar ou não usar hífen. Vê as tabelas abaixo para
        consulta dos prefixos e sufixos mais comuns.
      </Text>
      <Text style={styles.txtH2}>Prefixos</Text>
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
          <Text style={styles.txtCol}>PREFIXO</Text>
          <Text style={styles.txtCol}>anti-</Text>
          <Text style={styles.txtCol}>auto-</Text>
          <Text style={styles.txtCol}>de-</Text>
          <Text style={styles.txtCol}>dis-</Text>
          <Text style={styles.txtCol}>il-, im-, in-, ir</Text>
          <Text style={styles.txtCol}>mid-</Text>
          <Text style={styles.txtCol}>mis-</Text>
          <Text style={styles.txtCol}>over-</Text>
          <Text style={styles.txtCol}>post-</Text>
          <Text style={styles.txtCol}>pre-</Text>
          <Text style={styles.txtCol}>pro-</Text>
          <Text style={styles.txtCol}>re-</Text>
          <Text style={styles.txtCol}>semi-</Text>
          <Text style={styles.txtCol}>un-</Text>
        </View>
        <View
          style={{
            backgroundColor: "#040644",
            flex: 1,
            alignItems: "center",
            padding: 5,
          }}
        >
          <Text style={styles.txtCol}>EXEMPLO</Text>
          <Text style={styles.txtCol}>oposto a (anti-war)</Text>
          <Text style={styles.txtCol}>próprio (autobiography)</Text>
          <Text style={styles.txtCol}>reverter (demotivate)</Text>
          <Text style={styles.txtCol}>reverter (disagree)</Text>
          <Text style={styles.txtCol}>não (illegal)</Text>
          <Text style={styles.txtCol}>meio (midday)</Text>
          <Text style={styles.txtCol}>mal (misunderstanding)</Text>
          <Text style={styles.txtCol}>demais (overcook)</Text>
          <Text style={styles.txtCol}>depois (post-war)</Text>
          <Text style={styles.txtCol}>pré (pre-war)</Text>
          <Text style={styles.txtCol}>a favor de (pro-war)</Text>
          <Text style={styles.txtCol}>de novo (reconsider)</Text>
          <Text style={styles.txtCol}>metade (semicircle)</Text>
          <Text style={styles.txtCol}>não (unhappy)</Text>
        </View>
      </View>
      <Text style={styles.txtH2}>Sufixos</Text>
      <Text style={styles.txtH3}>Substantivos</Text>
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
          <Text style={styles.txtCol}>SUFIXO</Text>
          <Text style={styles.txtCol}>-acy</Text>
          <Text style={styles.txtCol}>-al</Text>
          <Text style={styles.txtCol}>-ance, -ence</Text>
          <Text style={styles.txtCol}>-dom</Text>
          <Text style={styles.txtCol}>-er, -or</Text>
          <Text style={styles.txtCol}>-ism</Text>
          <Text style={styles.txtCol}>-ist</Text>
          <Text style={styles.txtCol}>-ity, -ty</Text>
          <Text style={styles.txtCol}>-ment</Text>
          <Text style={styles.txtCol}>-ness</Text>
          <Text style={styles.txtCol}>-ship</Text>
          <Text style={styles.txtCol}>-sion, -tion</Text>
        </View>
        <View
          style={{
            backgroundColor: "#040644",
            flex: 1,
            alignItems: "center",
            padding: 5,
          }}
        >
          <Text style={styles.txtCol}>EXEMPLO</Text>
          <Text style={styles.txtCol}>qualidade (privacy)</Text>
          <Text style={styles.txtCol}>ato (refusal)</Text>
          <Text style={styles.txtCol}>estado (maintenance)</Text>
          <Text style={styles.txtCol}>estado (freedom)</Text>
          <Text style={styles.txtCol}>quem faz (trainer)</Text>
          <Text style={styles.txtCol}>doutrina (skepticism)</Text>
          <Text style={styles.txtCol}>alguém que (plagiarist)</Text>
          <Text style={styles.txtCol}>qualidade de (serenity)</Text>
          <Text style={styles.txtCol}>condição (punishment)</Text>
          <Text style={styles.txtCol}>estado (sadness)</Text>
          <Text style={styles.txtCol}>posição (fellowship)</Text>
          <Text style={styles.txtCol}>estado (transition)</Text>
        </View>
      </View>
      <Text style={styles.txtHR} />
      <Text style={styles.txtH3}>Verbos</Text>
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
          <Text style={styles.txtCol}>SUFIXO</Text>
          <Text style={styles.txtCol}>-ate</Text>
          <Text style={styles.txtCol}>-en</Text>
          <Text style={styles.txtCol}>-ify, -fye</Text>
          <Text style={styles.txtCol}>-ize, -ise</Text>
        </View>
        <View
          style={{
            backgroundColor: "#040644",
            flex: 1,
            alignItems: "center",
            padding: 5,
          }}
        >
          <Text style={styles.txtCol}>EXEMPLO</Text>
          <Text style={styles.txtCol}>tornar-se (regulate)</Text>
          <Text style={styles.txtCol}>tornar-se (enlighten)</Text>
          <Text style={styles.txtCol}>fazer (terrify)</Text>
          <Text style={styles.txtCol}>tornar-se (socialize)</Text>
        </View>
      </View>
      <Text style={styles.txtHR} />
      <Text style={styles.txtH3}>Adjetivos</Text>
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
          <Text style={styles.txtCol}>SUFIXO</Text>
          <Text style={styles.txtCol}>-able, -ible</Text>
          <Text style={styles.txtCol}>-al</Text>
          <Text style={styles.txtCol}>-esque</Text>
          <Text style={styles.txtCol}>-ful</Text>
          <Text style={styles.txtCol}>-ic, -ical</Text>
          <Text style={styles.txtCol}>-ious, -ous</Text>
          <Text style={styles.txtCol}>-ish</Text>
          <Text style={styles.txtCol}>-ive</Text>
          <Text style={styles.txtCol}>-less</Text>
          <Text style={styles.txtCol}>-y</Text>
        </View>
        <View
          style={{
            backgroundColor: "#040644",
            flex: 1,
            alignItems: "center",
            padding: 5,
          }}
        >
          <Text style={styles.txtCol}>EXEMPLO</Text>
          <Text style={styles.txtCol}>capaz de (edible)</Text>
          <Text style={styles.txtCol}>pertencente (regional)</Text>
          <Text style={styles.txtCol}>refere a (poesque)</Text>
          <Text style={styles.txtCol}>cheio de (resentful)</Text>
          <Text style={styles.txtCol}>pertencente (musical)</Text>
          <Text style={styles.txtCol}>caracterizado (pious)</Text>
          <Text style={styles.txtCol}>ter qualidade (blackish)</Text>
          <Text style={styles.txtCol}>ter natureza (creative)</Text>
          <Text style={styles.txtCol}>sem (endless)</Text>
          <Text style={styles.txtCol}>caracterizado (lazy)</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default PrefixSufix;
