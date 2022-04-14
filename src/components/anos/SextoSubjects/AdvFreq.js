import {
  View,
  Text,
  ScrollView,
  Linking,
  TouchableOpacity,
} from "react-native";

import React, { useEffect } from "react";

import styles from "../../../assets/style";

import { AdMobBanner, setTestDeviceIDAsync } from "expo-ads-admob";

const AdvFreq = () => {
  useEffect(() => {
    setTestDeviceIDAsync("EMULATOR");
  }, []);
  return (
    <ScrollView>
      <AdMobBanner
        bannerSize="smartBanner"
        adUnitID="ca-app-pub-2008019372085379/1007709159"
        servePersonalizedAds // true or false
        onDidFailToReceiveAdWithError={(e) => console.log(e)}
      />
      <Text style={styles.txtBody}>
        Os
        <Text style={styles.txtBody}>Advérbios de Frequência</Text>
        advérbios de tempo que respondem à pergunta "Com que frequência?". Eles
        permitem expressar com que regularidade algo acontece. Abaixo segue uma
        pequena (pois existem muito mais! Como aqui é só para o 6º ano...) lista
        com os advérbios mais comuns de frequência:
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
          <Text style={styles.txtCol}>always</Text>
          <Text style={styles.txtCol}>usually</Text>
          <Text style={styles.txtCol}>often</Text>
          <Text style={styles.txtCol}>sometimes</Text>
          <Text style={styles.txtCol}>hardly ever/rarely</Text>
          <Text style={styles.txtCol}>never</Text>
        </View>
        <View
          style={{
            backgroundColor: "#040644",
            flex: 1,
            alignItems: "center",
            padding: 5,
          }}
        >
          <Text style={styles.txtCol}>sempre</Text>
          <Text style={styles.txtCol}>geralmente</Text>
          <Text style={styles.txtCol}>frequentemente</Text>
          <Text style={styles.txtCol}>às vezes</Text>
          <Text style={styles.txtCol}>quase nunca/raramente</Text>
          <Text style={styles.txtCol}>nunca </Text>
        </View>
      </View>
      <AdMobBanner
        bannerSize="smartBanner"
        adUnitID="ca-app-pub-2008019372085379/1007709159"
        servePersonalizedAds // true or false
        onDidFailToReceiveAdWithError={(e) => console.log(e)}
      />
      <Text style={styles.txtH3}>
        Explicações Com Exemplos De Uso Dos Advérbios Acima.
      </Text>
      <View style={styles.txtBodyExemplos}>
        <Text style={styles.txtExemplos}>
          A regra geral para a posição correta de advérbios de frequência em
          frases é <Text style={styles.txtBold}>entre</Text> o sujeito (I, you ,
          he, etc) e o verbo. Porém, certos advérbios podem quebrar essa regra.
          Se se quer enfatizar o advérbio, pode-se colocá-lo no início da frase.
          Isso é comum para advérbios que sugerem frequência "média", como{" "}
          <Text style={styles.txtBold}>usually, often, sometimes</Text>. Alguns
          exemplos:
        </Text>
        <Text style={styles.txtExemplos}>
          a) I <Text style={styles.txtRed}>sometimes</Text> play the bass. (Às
          vezes, eu toco baixo.)
        </Text>
        <Text style={styles.txtExemplos}>
          b) I <Text style={styles.txtRed}>always</Text> watch Náutico games.
          (Eu sempre assisto aos jogos do Náutico.)
        </Text>
        <Text style={styles.txtExemplos}>
          c) I <Text style={styles.txtRed}>never</Text> listen to pagode.
          <Text style={styles.txtRed}> Never</Text>! (Eu nunca escuto pacote.
          Nunca!)
        </Text>
        <Text style={styles.txtExemplos}>
          d) I play the drums <Text style={styles.txtRed}>rarely</Text>. (Eu
          raramente toco bateria.)
        </Text>
        <Text style={styles.txtExemplos}>
          Se tu estás achando essa lista muito pequena, espertinho, ou já
          conheces todos esses advérbios, sabichão, e queres mais, donzela,
          clica{" "}
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                "https://fisk.com.br/blog/os-adverbios-de-frequencia-em-ingles"
              )
            }
          >
            <Text>→ aqui</Text>
          </TouchableOpacity>{" "}
          para ver mais.
        </Text>
        <AdMobBanner
          bannerSize="smartBanner"
          adUnitID="ca-app-pub-2008019372085379/1007709159"
          servePersonalizedAds // true or false
          onDidFailToReceiveAdWithError={(e) => console.log(e)}
        />
      </View>
    </ScrollView>
  );
};

export default AdvFreq;
