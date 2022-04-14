import { View, Text, ScrollView } from "react-native";
import React, { useEffect } from "react";

import styles from "../../../assets/style";

import { AdMobBanner, setTestDeviceIDAsync } from "expo-ads-admob";

const Ordinals = () => {
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
        Os <Text style={styles.txtBold}>Números Ordinais</Text>, como o próprio
        nome diz, servem para mostrar uma ordem, uma posição, uma classificação
        ou uma sequência. Confere a tabela abaixo do primeiro até o centésimo:
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
          <Text style={styles.txtCol}>0th</Text>
          <Text style={styles.txtCol}>1st</Text>
          <Text style={styles.txtCol}>2nd</Text>
          <Text style={styles.txtCol}>3rd</Text>
          <Text style={styles.txtCol}>4th</Text>
          <Text style={styles.txtCol}>5th</Text>
          <Text style={styles.txtCol}>6th</Text>
          <Text style={styles.txtCol}>7th</Text>
          <Text style={styles.txtCol}>8th</Text>
          <Text style={styles.txtCol}>9th</Text>
          <Text style={styles.txtCol}>10th</Text>
          <Text style={styles.txtCol}>11th</Text>
          <Text style={styles.txtCol}>12th</Text>
          <Text style={styles.txtCol}>13th</Text>
          <Text style={styles.txtCol}>14th</Text>
          <Text style={styles.txtCol}>15th</Text>
          <Text style={styles.txtCol}>16th</Text>
          <Text style={styles.txtCol}>17th</Text>
          <Text style={styles.txtCol}>18th</Text>
          <Text style={styles.txtCol}>19th</Text>
          <Text style={styles.txtCol}>20th</Text>
          <Text style={styles.txtCol}>21st</Text>
          <Text style={styles.txtCol}>22nd</Text>
          <Text style={styles.txtCol}>23rd</Text>
          <Text style={styles.txtCol}>24th</Text>
          <Text style={styles.txtCol}>25th</Text>
          <Text style={styles.txtCol}>26th</Text>
          <Text style={styles.txtCol}>27th</Text>
          <Text style={styles.txtCol}>28th</Text>
          <Text style={styles.txtCol}>29th</Text>
          <Text style={styles.txtCol}>30th</Text>
          <Text style={styles.txtCol}>40th</Text>
          <Text style={styles.txtCol}>50th</Text>
          <Text style={styles.txtCol}>60th</Text>
          <Text style={styles.txtCol}>70th</Text>
          <Text style={styles.txtCol}>80th</Text>
          <Text style={styles.txtCol}>90th</Text>
          <Text style={styles.txtCol}>100th</Text>
        </View>
        <View
          style={{
            backgroundColor: "#040644",
            flex: 1,
            alignItems: "center",
            padding: 5,
          }}
        >
          <Text style={styles.txtCol}>zeroth</Text>
          <Text style={styles.txtCol}>first</Text>
          <Text style={styles.txtCol}>second</Text>
          <Text style={styles.txtCol}>third</Text>
          <Text style={styles.txtCol}>fourth</Text>
          <Text style={styles.txtCol}>fifth</Text>
          <Text style={styles.txtCol}>sixth</Text>
          <Text style={styles.txtCol}>seventh</Text>
          <Text style={styles.txtCol}>eighth</Text>
          <Text style={styles.txtCol}>ninth</Text>
          <Text style={styles.txtCol}>tenth</Text>
          <Text style={styles.txtCol}>eleventh</Text>
          <Text style={styles.txtCol}>twelfth</Text>
          <Text style={styles.txtCol}>thirteenth</Text>
          <Text style={styles.txtCol}>fourteenth</Text>
          <Text style={styles.txtCol}>fifteenth</Text>
          <Text style={styles.txtCol}>sixteenth</Text>
          <Text style={styles.txtCol}>seventeenth</Text>
          <Text style={styles.txtCol}>eighteenth</Text>
          <Text style={styles.txtCol}>nineteenth</Text>
          <Text style={styles.txtCol}>twentieth</Text>
          <Text style={styles.txtCol}>twenty-first</Text>
          <Text style={styles.txtCol}>twenty-second</Text>
          <Text style={styles.txtCol}>twenty-third</Text>
          <Text style={styles.txtCol}>twenty-fourth</Text>
          <Text style={styles.txtCol}>twenty-fifth</Text>
          <Text style={styles.txtCol}>twenty-sixth</Text>
          <Text style={styles.txtCol}>twenty-seventh</Text>
          <Text style={styles.txtCol}>twenty-eighth</Text>
          <Text style={styles.txtCol}>twenty-ninth</Text>
          <Text style={styles.txtCol}>thirtieth</Text>
          <Text style={styles.txtCol}>fortieth</Text>
          <Text style={styles.txtCol}>fiftieth</Text>
          <Text style={styles.txtCol}>sixtieth</Text>
          <Text style={styles.txtCol}>seventieth</Text>
          <Text style={styles.txtCol}>eightieth</Text>
          <Text style={styles.txtCol}>ninetieth</Text>
          <Text style={styles.txtCol}>one hundredth</Text>
        </View>
      </View>
      <AdMobBanner
        bannerSize="smartBanner"
        adUnitID="ca-app-pub-2008019372085379/1007709159"
        servePersonalizedAds // true or false
        onDidFailToReceiveAdWithError={(e) => console.log(e)}
      />
      <Text style={styles.txtH2}>Dicas</Text>
      <View style={styles.txtBodyExemplos}>
        <Text style={styles.txtExemplos}>
          a) <Text style={styles.txtBold}>th</Text> - com exceção de primeiro
          (1º), segundo (2º), terceiro (3º) e de todos os seus derivados a
          partir do vigésimo primeiro (21º), vigésimo segundo (22º), vigésimo
          terceiro (23º) etc, basta adicionar{" "}
          <Text style={styles.txtBold}>th</Text> para formar o ordinal tanto o
          número em si quanto por extenso. Se liga na tabela aí em cima.
        </Text>
        <Text style={styles.txtExemplos}>
          b) <Text style={styles.txtBold}>5th, 9th, 12th, 15th</Text> e todas as
          dezenas, que sempre terminam com{" "}
          <Text style={styles.txtBold}>ty</Text> (twenty, thirty, etc) mudam um
          pouquinho a sua grafia ao ser adicionado o{" "}
          <Text style={styles.txtBold}>th</Text>.
        </Text>
        <Text style={styles.txtExemplos}>
          c) só sobraram agora{" "}
          <Text style={styles.txtBold}>
            first (1st), second (2nd), third (3rd)...
          </Text>{" "}
          isso mesmo, observador👁️! É só colocar as duas últimas letras{" "}
          <Text style={styles.txtBold}>st, nd, rd</Text> toda vez que
          aparecerem.
        </Text>
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

export default Ordinals;
