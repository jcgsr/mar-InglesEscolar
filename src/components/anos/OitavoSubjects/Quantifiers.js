import { View, Text, ScrollView } from "react-native";
import React, { useEffect } from "react";

import styles from "../../../assets/style";
import { AdMobBanner, setTestDeviceIDAsync } from "expo-ads-admob";

const Quantifiers = () => {
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
        Um quantificador é uma palavra que geralmente vem antes de um
        substantivo para expressar a{" "}
        <Text style={styles.txtBold}>quantidade</Text> do objeto, por exemplo,
        "um pouco de leite". A maioria dos quantificadores é seguida por um
        substantivo. Um quantificador é usado quando se quer dar alguma
        informação sobre o número de algo, como que respondendo as perguntas:
        quanto(s)?. Vê a tabela abaixo com alguns dos quantificadores mais
        usados.
      </Text>
      <Text style={styles.txtH2}>Substantivos Contáveis E Incontáveis</Text>
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
          <Text style={styles.txtCol}>all</Text>
          <Text style={styles.txtCol}>some</Text>
          <Text style={styles.txtCol}>more</Text>
          <Text style={styles.txtCol}>a lot of</Text>
          <Text style={styles.txtCol}>enough</Text>
          <Text style={styles.txtCol}>less</Text>
          <Text style={styles.txtCol}>no</Text>
          <Text style={styles.txtCol}>any</Text>
          <Text style={styles.txtCol}>most</Text>
        </View>
        <View
          style={{
            backgroundColor: "#040644",
            flex: 1,
            alignItems: "center",
            padding: 5,
          }}
        >
          <Text style={styles.txtCol}>tudo, todo(s)</Text>
          <Text style={styles.txtCol}>algum(ns)</Text>
          <Text style={styles.txtCol}>mais</Text>
          <Text style={styles.txtCol}>um monte de</Text>
          <Text style={styles.txtCol}>suficiente, bastante</Text>
          <Text style={styles.txtCol}>menos</Text>
          <Text style={styles.txtCol}>nenhum(a)</Text>
          <Text style={styles.txtCol}>qualquer, algum(ns)</Text>
          <Text style={styles.txtCol}>maioria</Text>
        </View>
      </View>
      <AdMobBanner
        bannerSize="smartBanner"
        adUnitID="ca-app-pub-2008019372085379/1007709159"
        servePersonalizedAds // true or false
        onDidFailToReceiveAdWithError={(e) => console.log(e)}
      />
      <Text style={styles.txtH2}>Usos e Exemplos</Text>
      <Text style={styles.txtBodyExemplos}>
        <Text style={styles.txtExemplos}>
          Spider-Man has <Text style={styles.txtRed}>a lot of</Text> time.
          (Incontável - Homem-Aranha tem{" "}
          <Text style={styles.txtRed}>muito</Text> tempo.)
        </Text>
      </Text>
      <Text style={styles.txtBodyExemplos}>
        <Text style={styles.txtExemplos}>
          Spider-Man has <Text style={styles.txtRed}>a lot of</Text> enemies.
          (Incontável - Homem-Aranha tem{" "}
          <Text style={styles.txtRed}>muitos</Text> inimigos.)
        </Text>
      </Text>
      <Text style={styles.txtBodyExemplos}>
        <Text style={styles.txtExemplos}>
          <Text style={styles.txtRed}>some</Text> - usado em frases afirmativas
          como regra geral. Ex.: a) Spider-Man saw{" "}
          <Text style={styles.txtRed}>some</Text> enemies. (Homem-Aranha viu
          <Text style={styles.txtRed}> alguns</Text> inimigos.)
        </Text>
      </Text>
      <Text style={styles.txtBodyExemplos}>
        <Text style={styles.txtExemplos}>
          <Text style={styles.txtRed}>any</Text> - usado em frases
          interrogativas e negativas. Quando usado na negativa, a tradução mais
          adequada será "<Text style={styles.txtBold}>nenhum(a)</Text>". Ex.:
          Does Peter have <Text style={styles.txtRed}>any</Text> children?
          (Peter tem <Text style={styles.txtRed}>algum</Text> filho?); Peter
          didn't see <Text style={styles.txtRed}>any</Text> friends. (Peter não
          viu <Text style={styles.txtRed}>nenhum</Text> amigo.)
        </Text>
      </Text>
      <Text style={styles.txtH2}>Apenas Substantivos Contáveis</Text>
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
          <Text style={styles.txtCol}>(not) many</Text>
          <Text style={styles.txtCol}>each</Text>
          <Text style={styles.txtCol}>either</Text>
          <Text style={styles.txtCol}>(a) few</Text>
          <Text style={styles.txtCol}>a couple of</Text>
          <Text style={styles.txtCol}>neither</Text>
          <Text style={styles.txtCol}>several</Text>
          <Text style={styles.txtCol}>both</Text>
          <Text style={styles.txtCol}>fewer</Text>
        </View>
        <View
          style={{
            backgroundColor: "#040644",
            flex: 1,
            alignItems: "center",
            padding: 5,
          }}
        >
          <Text style={styles.txtCol}>(não) muitos</Text>
          <Text style={styles.txtCol}>cada</Text>
          <Text style={styles.txtCol}>qualquer, um ou outro</Text>
          <Text style={styles.txtCol}>(um), poucos monte de</Text>
          <Text style={styles.txtCol}>alguns, dois</Text>
          <Text style={styles.txtCol}>nenhum</Text>
          <Text style={styles.txtCol}>vários</Text>
          <Text style={styles.txtCol}>ambos</Text>
          <Text style={styles.txtCol}>menos</Text>
        </View>
      </View>
      <AdMobBanner
        bannerSize="smartBanner"
        adUnitID="ca-app-pub-2008019372085379/1007709159"
        servePersonalizedAds // true or false
        onDidFailToReceiveAdWithError={(e) => console.log(e)}
      />
      <Text style={styles.txtH2}>Usos e Exemplos</Text>
      <Text style={styles.txtBodyExemplos}>
        <Text style={styles.txtExemplos}>
          <Text style={styles.txtRed}>both, either, neither</Text> usados com
          duas pessoas ou coisas. Ex.: <Text style={styles.txtRed}>Both</Text>{" "}
          the schools were open. (<Text style={styles.txtRed}>Ambas </Text>
          as escolas estavam abertas.);{" "}
          <Text style={styles.txtRed}>Neither</Text> of the schools were open. (
          <Text style={styles.txtRed}>Nenhuma</Text> das escolas estava aberta.)
        </Text>
      </Text>
      <Text style={styles.txtH2}>Apenas Substantivos Incontáveis</Text>
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
          <Text style={styles.txtCol}>(not) much</Text>
          <Text style={styles.txtCol}>a bit of</Text>
          <Text style={styles.txtCol}>a little</Text>
        </View>
        <View
          style={{
            backgroundColor: "#040644",
            flex: 1,
            alignItems: "center",
            padding: 5,
          }}
        >
          <Text style={styles.txtCol}>(não) muito</Text>
          <Text style={styles.txtCol}>um pouco de</Text>
          <Text style={styles.txtCol}>um pouco</Text>
        </View>
      </View>
      <AdMobBanner
        bannerSize="smartBanner"
        adUnitID="ca-app-pub-2008019372085379/1007709159"
        servePersonalizedAds // true or false
        onDidFailToReceiveAdWithError={(e) => console.log(e)}
      />
    </ScrollView>
  );
};

export default Quantifiers;
