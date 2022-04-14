import React, { useEffect } from "react";
import { View, Text, ScrollView } from "react-native";

import styles from "../../../assets/style";
// adMob
import { AdMobBanner, setTestDeviceIDAsync } from "expo-ads-admob";
const BePast = () => {
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
          O Passado Simples do verbo <Text style={styles.txtBold}>To Be</Text>{" "}
          tem duas formas quando conjugado:{" "}
          <Text style={styles.txtRed}>was</Text>, usado com as pessoas
          <Text style={styles.txtBold}> I, he, she, it</Text> e
          <Text style={styles.txtRed}> were</Text>, usado com o restante{" "}
          <Text style={styles.txtBold}> you, we, they</Text>. A tradução dessas
          duas formas, como de constume, depende das pessoas em questão. Presta
          atenção que onde houver as traduções{" "}
          <Text style={styles.txtBold}> era, eram, éramos</Text>, pode-se
          perfeitamente trocá-las por{" "}
          <Text style={styles.txtBold}>estava, estavam, estávamos</Text>. Outra
          coisa: não existe contração das formas{" "}
          <Text style={styles.txtRed}>was</Text>,{" "}
          <Text style={styles.txtRed}>were</Text> na afirmativa como existe no
          presente <Text style={styles.txtBold}> (I'm, you're, he's, etc)</Text>
          . Na negativa, pode ser tanto{" "}
          <Text style={styles.txtRed}>was not/wasn't, were not/weren't</Text>.
          Confere as tabelas abaixo para a conjugação completa.
        </Text>
        <Text style={styles.txtH2}>Conjugação</Text>
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
            <Text style={styles.txtCol}>AFIRMATIVA</Text>
            <Text style={styles.txtCol}>I was</Text>
            <Text style={styles.txtCol}>You were</Text>
            <Text style={styles.txtCol}>He was</Text>
            <Text style={styles.txtCol}>She was</Text>
            <Text style={styles.txtCol}>It was</Text>
            <Text style={styles.txtCol}>We were</Text>
            <Text style={styles.txtCol}>You were</Text>
            <Text style={styles.txtCol}>They were</Text>
          </View>
          <View
            style={{
              backgroundColor: "blue",
              flex: 1,
              alignItems: "center",
              padding: 5,
            }}
          >
            <Text style={styles.txtCol}>WAS/WERE</Text>
            <Text style={styles.txtCol}>Eu era</Text>
            <Text style={styles.txtCol}>Você era</Text>
            <Text style={styles.txtCol}>Ele era</Text>
            <Text style={styles.txtCol}>Ela era</Text>
            <Text style={styles.txtCol}>Ele/Ela era</Text>
            <Text style={styles.txtCol}>Nós éramos</Text>
            <Text style={styles.txtCol}>Vocês eram</Text>
            <Text style={styles.txtCol}>Eles/Elas eram</Text>
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
            <Text style={styles.txtCol}>NEGATIVA</Text>
            <Text style={styles.txtCol}>I wasn't</Text>
            <Text style={styles.txtCol}>You weren't</Text>
            <Text style={styles.txtCol}>He wasn't</Text>
            <Text style={styles.txtCol}>She wasn't</Text>
            <Text style={styles.txtCol}>It wasn't</Text>
            <Text style={styles.txtCol}>We weren't</Text>
            <Text style={styles.txtCol}>You weren't</Text>
            <Text style={styles.txtCol}>They weren't</Text>
          </View>
          <View
            style={{
              backgroundColor: "blue",
              flex: 1,
              alignItems: "center",
              padding: 5,
            }}
          >
            <Text style={styles.txtCol}>WASN'T/WEREN'T</Text>
            <Text style={styles.txtCol}>Eu não era</Text>
            <Text style={styles.txtCol}>Você não era</Text>
            <Text style={styles.txtCol}>Ele não era</Text>
            <Text style={styles.txtCol}>Ela não era</Text>
            <Text style={styles.txtCol}>Ele/Ela não era</Text>
            <Text style={styles.txtCol}>Nós não éramos</Text>
            <Text style={styles.txtCol}>Vocês não eram</Text>
            <Text style={styles.txtCol}>Eles/Elas não eram</Text>
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
            <Text style={styles.txtCol}>INTERROGATIVA</Text>
            <Text style={styles.txtCol}>Was I?</Text>
            <Text style={styles.txtCol}>Were you?</Text>
            <Text style={styles.txtCol}>Was he?</Text>
            <Text style={styles.txtCol}>Was she?</Text>
            <Text style={styles.txtCol}>Was it?</Text>
            <Text style={styles.txtCol}>Were we?</Text>
            <Text style={styles.txtCol}>Were you?</Text>
            <Text style={styles.txtCol}>Were they?</Text>
          </View>
          <View
            style={{
              backgroundColor: "blue",
              flex: 1,
              alignItems: "center",
              padding: 5,
            }}
          >
            <Text style={styles.txtCol}>WAS/WERE?</Text>
            <Text style={styles.txtCol}>Eu era?</Text>
            <Text style={styles.txtCol}>Você era?</Text>
            <Text style={styles.txtCol}>Ele era?</Text>
            <Text style={styles.txtCol}>Ela era?</Text>
            <Text style={styles.txtCol}>Ele/Ela era?</Text>
            <Text style={styles.txtCol}>Nós éramos?</Text>
            <Text style={styles.txtCol}>Vocês eram?</Text>
            <Text style={styles.txtCol}>Eles/Elas eram?</Text>
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

export default BePast;
