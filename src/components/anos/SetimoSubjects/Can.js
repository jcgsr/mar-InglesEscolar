import React, { useEffect } from "react";
import { View, Text, ScrollView } from "react-native";

import styles from "../../../assets/style";
// adMob
import { AdMobBanner, setTestDeviceIDAsync } from "expo-ads-admob";

const Can = () => {
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
          <Text style={styles.txtBold}>Can</Text> é um verbo modal, por isso
          jamais muda. Isso mesmo! Não muda sua forma com os pronomes (I, you,
          he...). E por ser modal, NÃO se coloca a partícula{" "}
          <Text style={styles.txtBold}>to</Text> depois dele para formar o
          infinitivo do verbo principal. "Como é?! 😧", perguntas? Relaxa. Só
          analisar os exemplos e... tranquilidade. Ele é usado para expressar{" "}
          <Text style={styles.txtBold}>habilidade</Text>, dizer que algo é{" "}
          <Text style={styles.txtBold}>possível</Text>, fazer um{" "}
          <Text style={styles.txtBold}>pedido</Text>, oferecer{" "}
          <Text style={styles.txtBold}>permissão</Text>. Na forma negativa,
          pode-se usar <Text style={styles.txtRed}>cannot</Text> além de{" "}
          <Text style={styles.txtRed}>can't</Text>.
        </Text>
        <Text style={styles.txtH2}>Conjugação</Text>
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
            <Text style={styles.txtCol}>AFIRMATIVA</Text>
            <Text style={styles.txtCol}>I can</Text>
            <Text style={styles.txtCol}>You can</Text>
            <Text style={styles.txtCol}>He can</Text>
            <Text style={styles.txtCol}>She can</Text>
            <Text style={styles.txtCol}>It can</Text>
            <Text style={styles.txtCol}>We can</Text>
            <Text style={styles.txtCol}>You can</Text>
            <Text style={styles.txtCol}>They can</Text>
          </View>
          <View
            style={{
              backgroundColor: "#040644",
              flex: 1,
              alignItems: "center",
              padding: 5,
            }}
          >
            <Text style={styles.txtCol}>CAN - PODER</Text>
            <Text style={styles.txtCol}>Eu posso</Text>
            <Text style={styles.txtCol}>Você pode</Text>
            <Text style={styles.txtCol}>Ele pode</Text>
            <Text style={styles.txtCol}>Ela pode</Text>
            <Text style={styles.txtCol}>Ele/Ela pode</Text>
            <Text style={styles.txtCol}>Nós podemos</Text>
            <Text style={styles.txtCol}>Vocês podem</Text>
            <Text style={styles.txtCol}>Eles/Elas podem</Text>
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
              backgroundColor: "#B60D22",
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              padding: 5,
            }}
          >
            <Text style={styles.txtCol}>NEGATIVA</Text>
            <Text style={styles.txtCol}>I can't</Text>
            <Text style={styles.txtCol}>You can't</Text>
            <Text style={styles.txtCol}>He can't</Text>
            <Text style={styles.txtCol}>She can't</Text>
            <Text style={styles.txtCol}>It can't</Text>
            <Text style={styles.txtCol}>We can't</Text>
            <Text style={styles.txtCol}>You can't</Text>
            <Text style={styles.txtCol}>They can't</Text>
          </View>
          <View
            style={{
              backgroundColor: "blue",
              flex: 1,
              alignItems: "center",
              padding: 5,
            }}
          >
            <Text style={styles.txtCol}>CAN - PODER</Text>
            <Text style={styles.txtCol}>Eu não posso</Text>
            <Text style={styles.txtCol}>Você não pode</Text>
            <Text style={styles.txtCol}>Ele não pode</Text>
            <Text style={styles.txtCol}>Ela não pode</Text>
            <Text style={styles.txtCol}>Ele/Ela não pode</Text>
            <Text style={styles.txtCol}>Nós não podemos</Text>
            <Text style={styles.txtCol}>Vocês não podem</Text>
            <Text style={styles.txtCol}>Eles/Elas não podem</Text>
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
              backgroundColor: "#B60D22",
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              padding: 5,
            }}
          >
            <Text style={styles.txtCol}>INTERROGATIVA</Text>
            <Text style={styles.txtCol}>Can I?</Text>
            <Text style={styles.txtCol}>Can you?</Text>
            <Text style={styles.txtCol}>Can he?</Text>
            <Text style={styles.txtCol}>Can she?</Text>
            <Text style={styles.txtCol}>Can it?</Text>
            <Text style={styles.txtCol}>Can we?</Text>
            <Text style={styles.txtCol}>Can you?</Text>
            <Text style={styles.txtCol}>Can they?</Text>
          </View>
          <View
            style={{
              backgroundColor: "#040644",
              flex: 1,
              alignItems: "center",
              padding: 5,
            }}
          >
            <Text style={styles.txtCol}>CAN - PODER</Text>
            <Text style={styles.txtCol}>Eu posso?</Text>
            <Text style={styles.txtCol}>Você pode?</Text>
            <Text style={styles.txtCol}>Ele pode?</Text>
            <Text style={styles.txtCol}>Ela pode?</Text>
            <Text style={styles.txtCol}>Ele/Ela pode?</Text>
            <Text style={styles.txtCol}>Nós podemos?</Text>
            <Text style={styles.txtCol}>Vocês podem?</Text>
            <Text style={styles.txtCol}>Eles/Elas podem?</Text>
          </View>
        </View>
        <AdMobBanner
          bannerSize="smartBanner"
          adUnitID="ca-app-pub-2008019372085379/1007709159"
          servePersonalizedAds // true or false
          onDidFailToReceiveAdWithError={(e) => console.log(e)}
        />
        <Text style={styles.txtH2}>Exemplos</Text>
        <Text style={styles.txtExemplos}>
          I <Text style={styles.txtRed}>can </Text> play the guitar. (Eu{" "}
          <Text style={styles.txtRed}>posso </Text>
          tocar violão.) - Presta atenção que aqui também poderia ser "Eu{" "}
          <Text style={styles.txtRed}>sei </Text>
          (tenho a habilidade de) tocar violão." De novo: a tradução vai
          depender se se trata de{" "}
          <Text style={styles.txtBold}>possibilidade </Text> ou de{" "}
          <Text style={styles.txtBold}>habilidade </Text>.
        </Text>
        <Text style={styles.txtExemplos}>
          I <Text style={styles.txtRed}>can't </Text> play the guitar. (Eu{" "}
          <Text style={styles.txtRed}>não posso/não sei </Text>
          tocar violão.)
        </Text>
        <Text style={styles.txtExemplos}>
          <Text style={styles.txtRed}>Can </Text> you please stop talking about
          BBB?! (Você <Text style={styles.txtRed}>pode</Text> parar de falar
          sobre BBB, por favor?!)
        </Text>
        <Text style={styles.txtExemplos}>
          He <Text style={styles.txtRed}>can </Text> come with us. (Ele{" "}
          <Text style={styles.txtRed}>pode </Text> vir conosco.)
        </Text>
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

export default Can;
