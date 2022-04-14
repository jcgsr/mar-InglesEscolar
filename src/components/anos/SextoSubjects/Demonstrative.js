import { View, Text, ScrollView } from "react-native";
import React, { useEffect } from "react";

import styles from "../../../assets/style";

import { AdMobBanner, setTestDeviceIDAsync } from "expo-ads-admob";

const Demonstrative = () => {
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
        Os <Text style={styles.txtBold}>Pronomes Demonstrativos</Text> são
        usados em vez de um sintagma nominal (nome e seus respectivos
        determinantes: sujeito e pelos complementos verbais) para indicar
        distância no tempo ou espaço em relação ao falante. Eles também indicam
        número gramatical - singular ou plural. São eles:
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
          <Text style={styles.txtCol}>This - esse(a), este(a)</Text>
          <Text style={styles.txtCol}>That - aquele(a)</Text>
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
          <Text style={styles.txtCol}>These </Text>
          <Text style={styles.txtCol}>Those</Text>
        </View>
      </View>
      <AdMobBanner
        bannerSize="smartBanner"
        adUnitID="ca-app-pub-2008019372085379/1007709159"
        servePersonalizedAds // true or false
        onDidFailToReceiveAdWithError={(e) => console.log(e)}
      />
      <Text style={styles.txtBody}>
        <Text style={styles.txtBold}>This/These</Text> é usado para indicar
        proximidade com o falante. Já{" "}
        <Text style={styles.txtBold}>That/Those</Text> é usado para indicar
        distância.
      </Text>
      <AdMobBanner
        bannerSize="smartBanner"
        adUnitID="ca-app-pub-2008019372085379/1007709159"
        servePersonalizedAds // true or false
        onDidFailToReceiveAdWithError={(e) => console.log(e)}
      />
    </ScrollView>
  );
};

export default Demonstrative;
