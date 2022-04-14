import { View, Text, ScrollView } from "react-native";
import React, { useEffect } from "react";

import styles from "../../../assets/style";

import { AdMobBanner, setTestDeviceIDAsync } from "expo-ads-admob";

const PresentContinuous = () => {
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
        Usa-se o{" "}
        <Text style={styles.txtBold}>Presente Contínuo (gerúndio)</Text> quando
        a ação acontece no momento da fala. A característica mais forte é a
        terminação <Text style={styles.txtBold}>ing</Text>, que em português
        pode ser <Text style={styles.txtBold}>ando, endo, indo</Text>. Vê os
        exemplos: walk<Text style={styles.txtBold}>ing</Text> (and
        <Text style={styles.txtBold}>ando</Text>) do
        <Text style={styles.txtBold}>ing</Text> (faz
        <Text style={styles.txtBold}>endo</Text>) build
        <Text style={styles.txtBold}>ing</Text> (constru
        <Text style={styles.txtBold}>indo</Text>) A forma completa para a
        construção do Presente Contínuo deve seguir as seguintes estruturas:
      </Text>
      <Text style={styles.txtH2}>Afirmativa</Text>
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
          <Text style={styles.txtCol}>I, you, he...</Text>
        </View>
        <View
          style={{
            backgroundColor: "#040644",
            flex: 1,
            alignItems: "center",
            padding: 5,
          }}
        >
          <Text style={styles.txtCol}>am/is/are</Text>
        </View>
        <View
          style={{
            backgroundColor: "#064906",
            flex: 1,
            alignItems: "center",
            padding: 5,
          }}
        >
          <Text style={styles.txtCol}>sing</Text>
        </View>
        <View
          style={{
            backgroundColor: "#393A39",
            flex: 1,
            alignItems: "center",
            padding: 5,
          }}
        >
          <Text style={styles.txtCol}>ing</Text>
        </View>
      </View>
      <Text style={styles.txtExemplos}>
        Ex.: I am singing. You are singing. He is singing.
      </Text>
      <Text style={styles.txtHR}></Text>
      <Text style={styles.txtH2}>Negativa</Text>
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
          <Text style={styles.txtCol}>I, you, he...</Text>
        </View>
        <View
          style={{
            backgroundColor: "#040644",
            flex: 1,
            alignItems: "center",
            padding: 5,
          }}
        >
          <Text style={styles.txtCol}>am/is/are not</Text>
        </View>
        <View
          style={{
            backgroundColor: "#064906",
            flex: 1,
            alignItems: "center",
            padding: 5,
          }}
        >
          <Text style={styles.txtCol}>learn</Text>
        </View>
        <View
          style={{
            backgroundColor: "#393A39",
            flex: 1,
            alignItems: "center",
            padding: 5,
          }}
        >
          <Text style={styles.txtCol}>ing</Text>
        </View>
      </View>
      <Text style={styles.txtExemplos}>
        Ex.: I am not learning. You are not learning. He is not learning. Obs.:
        Pode-se contrair is/are com o not ={" "}
        <Text style={styles.txtRed}> isn't, aren't</Text>.
      </Text>
      <Text style={styles.txtHR}></Text>
      <Text style={styles.txtH2}>Interrogativa</Text>
      <View style={styles.containerTable}>
        <View
          style={{
            backgroundColor: "#040644",
            flex: 1,
            alignItems: "center",
            padding: 5,
          }}
        >
          <Text style={styles.txtCol}>am/is/are</Text>
        </View>
        <View
          style={{
            backgroundColor: "#B60D22",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            padding: 5,
          }}
        >
          <Text style={styles.txtCol}>I, you, he...</Text>
        </View>
        <View
          style={{
            backgroundColor: "#064906",
            flex: 1,
            alignItems: "center",
            padding: 5,
          }}
        >
          <Text style={styles.txtCol}>watch</Text>
        </View>
        <View
          style={{
            backgroundColor: "#393A39",
            flex: 1,
            alignItems: "center",
            padding: 5,
          }}
        >
          <Text style={styles.txtCol}>ing?</Text>
        </View>
      </View>
      <Text style={styles.txtExemplos}>
        Ex.: am I watching? Are you watching? Is he watching?
      </Text>
      <Text style={styles.txtHR}></Text>
      <AdMobBanner
        bannerSize="smartBanner"
        adUnitID="ca-app-pub-2008019372085379/1007709159"
        servePersonalizedAds // true or false
        onDidFailToReceiveAdWithError={(e) => console.log(e)}
      />
      <View style={styles.containerTableCol}>
        <Text style={styles.txtH2}>Atenção</Text>
        {/*AT*/}
        <Text style={styles.txtExemplos}>
          a) se o verbo terminar com a vogal{" "}
          <Text style={styles.txtBold}>e</Text> e o mesmo não for oxítono (a
          última sílaba mais forte), deve-se omitir esse{" "}
          <Text style={styles.txtBold}>e</Text> e adicionar{" "}
          <Text style={styles.txtRed}>ing</Text>. Ex.: danc
          <Text style={styles.txtBold}>e</Text> → danc
          <Text style={styles.txtRed}>ing</Text>
        </Text>
        <Text style={styles.txtExemplos}>
          b) se o verbo terminar com a combinação{" "}
          <Text style={styles.txtBold}>ie</Text>, deve-se trocá-la por
          <Text style={styles.txtBold}> y</Text> e só depois adicionar{" "}
          <Text style={styles.txtRed}>ing</Text>. Ex.: l
          <Text style={styles.txtBold}>ie</Text> → l
          <Text style={styles.txtRed}>ying</Text>
        </Text>
        <Text style={styles.txtExemplos}>
          c) se o verbo terminar com a sequência{" "}
          <Text style={styles.txtBold}>
            CVC (Consoante + Vogal + Consoante)
          </Text>{" "}
          e for oxítono (vê lá em cima o que é oxítono, esquecido🤦) , dobra-se
          a última consoante e adiciona-se{" "}
          <Text style={styles.txtRed}>ing</Text>. Ex.: s
          <Text style={styles.txtBold}>top</Text> → stop
          <Text style={styles.txtRed}>ping</Text>
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

export default PresentContinuous;
