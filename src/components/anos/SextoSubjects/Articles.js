import { View, Text, ScrollView, Image } from "react-native";
import React from "react";

import styles from "../../../assets/style";

const Articles = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.txtBody}>
          <Text style={styles.txtBold}>Artigos</Text> são palavras que definem
          um substantivo como específico ou genérico. O inglês tem dois tipos de
          artigos: <Text style={styles.txtBold}>definidos e indefinidos</Text>.
        </Text>
        <Text style={styles.txtH2}>Definite Article (Artigo Definido)</Text>
        <Image
          style={styles.img}
          source={require("../../../../assets/the.png")}
        />
        <Text style={styles.txtBody}>
          O artigo definido em inglês é a palavra{" "}
          <Text style={styles.txtBold}>the</Text>. A sua tradução pode ser{" "}
          <Text style={styles.txtBold}> o, os, a, as</Text>. Esse artigo limita
          o significado de um substantivo a uma coisa particular. Por exemplo: “
          <Text style={styles.txtBold}>A</Text> canção que mencionei...” A frase
          anterior se refere a uma canção específica e não a qualquer uma.{" "}
          <Text style={styles.txtBold}>The </Text>
          pode ser usado com substantivos no singular no plural como visto na
          tradução.
        </Text>
        <Text style={styles.txtHR} />
        <Text style={styles.txtH2}>Indefinite Article (Artigo Indefinido)</Text>
        <Image
          style={styles.img}
          source={require("../../../../assets/a.jpg")}
        />
        <Text style={styles.txtBody}>
          Em inglês, os dois artigos indefinidos são{" "}
          <Text style={styles.txtBold}>a/an</Text>. Como outros artigos, os
          artigos indefinidos são invariáveis. Usa{" "}
          <Text style={styles.txtBold}>'a'</Text> quando a próxima palavra
          começar com uma consoante ou som de consoante (palavras que começam em
          "u" e "eu" quando soarem como "you"). Usa{" "}
          <Text style={styles.txtBold}>'an'</Text> quando a próxima palavra
          começar com uma vogal (a, e, i, o, u) ou com um h mudo. Vê os exemplos
          abaixo:
        </Text>
        <View style={styles.txtBodyExemplos}>
          <Text style={styles.txtExemplos}>
            a) <Text style={styles.txtRed}>a</Text> song b){" "}
            <Text style={styles.txtRed}>a</Text> guitar c){" "}
            <Text style={styles.txtRed}>a</Text> european rock band d){" "}
            <Text style={styles.txtRed}>a</Text> unit e){" "}
            <Text style={styles.txtRed}>an </Text>
            electric guitar f) <Text style={styles.txtRed}>an</Text> hour g){" "}
            <Text style={styles.txtRed}>an</Text> ugly bass player
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Articles;
