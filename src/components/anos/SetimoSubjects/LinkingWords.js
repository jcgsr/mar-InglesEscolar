import React, { useEffect } from "react";
import { View, Text, ScrollView } from "react-native";

import styles from "../../../assets/style";
// adMob
import { AdMobBanner, setTestDeviceIDAsync } from "expo-ads-admob";

const LinkingWords = () => {
  useEffect(() => {
    setTestDeviceIDAsync("EMULATOR");
  }, []);
  return (
    <View>
      <ScrollView>
        <AdMobBanner
          bannerSize="smartBanner"
          adUnitID="ca-app-pub-2008019372085379/1007709159"
          servePersonalizedAds // true or false
          onDidFailToReceiveAdWithError={(e) => console.log(e)}
        />
        <Text style={styles.txtBody}>
          <Text style={styles.txtBold}>Linking Words (conjunções)</Text> são
          usadas para mostrar relações entre ideias. Elas podem ser usadas para
          juntar 2 ou mais palavras ou frases. Também podem ser usadas para
          <Text style={styles.txtBold}>
            adicionar ideias/informações, contrastá-las
          </Text>
          adicionar ideias/informações, contrastá-las ou mostrar o motivo de
          algo ou mostrar a ordem que as coisas acontecem. Elas jamais mudam sua
          forma. Confere a tabela abaixo para conhecer, não todas, mas as
          Linking Words (conjunções) mais usadas.
        </Text>
        <Text style={styles.txtH2}>Tipos De Linking Words</Text>
        <View style={styles.containerTable}>
          <View
            style={{
              backgroundColor: "red",
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              padding: 5,
            }}
          >
            <Text style={styles.txtCol}>ADIÇÃO</Text>
            <Text style={styles.txtCol}>and - e</Text>
            <Text style={styles.txtCol}>also/too - também</Text>
            <Text style={styles.txtCol}>besides - além de</Text>
            <Text style={styles.txtCol}>as well as - assim como, bem como</Text>
          </View>
          <View
            style={{
              backgroundColor: "blue",
              flex: 1,
              alignItems: "center",
              padding: 5,
            }}
          >
            <Text style={styles.txtCol}>CONTRASTE</Text>
            <Text style={styles.txtCol}>but - mas</Text>
            <Text style={styles.txtCol}>although - embora</Text>
            <Text style={styles.txtCol}>however - contudo</Text>
            <Text style={styles.txtCol}>despite/in spite of - apesar de</Text>
          </View>
        </View>
        <AdMobBanner
          bannerSize="smartBanner"
          adUnitID="ca-app-pub-2008019372085379/1007709159"
          servePersonalizedAds // true or false
          onDidFailToReceiveAdWithError={(e) => console.log(e)}
        />
        <Text style={styles.txtHR} />
        <View style={styles.containerTable}>
          <View
            style={{
              backgroundColor: "red",
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              padding: 5,
            }}
          >
            <Text style={styles.txtCol}>TEMPO</Text>
            <Text style={styles.txtCol}>while - enquanto, durante;</Text>
            <Text style={styles.txtCol}>before - antes (que);</Text>
            <Text style={styles.txtCol}>after (that) - depois (disso);</Text>
            <Text style={styles.txtCol}>during - durante;</Text>
          </View>
          <View
            style={{
              backgroundColor: "blue",
              flex: 1,
              alignItems: "center",
              padding: 5,
            }}
          >
            <Text style={styles.txtCol}>MOTIVO</Text>
            <Text style={styles.txtCol}>so - então</Text>
            <Text style={styles.txtCol}>because - porque;</Text>
            <Text style={styles.txtCol}>
              because of - por cause de, devido a;
            </Text>
            <Text style={styles.txtCol}>
              since/as - uma vez que, visto que/como;a
            </Text>
          </View>
        </View>
        <AdMobBanner
          bannerSize="smartBanner"
          adUnitID="ca-app-pub-2008019372085379/1007709159"
          servePersonalizedAds // true or false
          onDidFailToReceiveAdWithError={(e) => console.log(e)}
        />
      </ScrollView>
    </View>
  );
};

export default LinkingWords;
