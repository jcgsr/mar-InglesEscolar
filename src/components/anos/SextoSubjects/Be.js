import React, { useEffect } from "react";
import { Text, View, ScrollView } from "react-native";

import styles from "../../../assets/style";

import { AdMobBanner, setTestDeviceIDAsync } from "expo-ads-admob";

const Be = () => {
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
        Um dos verbos mais importantes em inglês, o verbo{" "}
        <Text style={styles.txtBold}>"to be" (ser/estar)</Text> é o mais usado
        nessa língua. Ele serve para{" "}
        <Text style={styles.txtBold}>descrever</Text> algo ou alguém. Pode ser
        usado para dizer coisas diferentes de acordo com o contexto. Possui três
        flexões no Presente Simples:
        <Text style={styles.txtBold}> am, is, are</Text>. Confere os seus usos
        nas tabelas abaixo. Dica: <Text style={styles.txtBold}> am</Text> sempre
        com <Text style={styles.txtBold}> I</Text>;{" "}
        <Text style={styles.txtBold}> is</Text> sempre com{" "}
        <Text style={styles.txtBold}> he, she, it</Text> e{" "}
        <Text style={styles.txtBold}>are</Text> com todos os outros. Presta
        atenção que onde houver as traduções{" "}
        <Text style={styles.txtBold}> sou, é, somos, são</Text>, pode-se
        perfeitamente trocá-las por{" "}
        <Text style={styles.txtBold}> estou, está, estamos, estão</Text>{" "}
        respectivamente. Outra coisa: na negativa, pode ser{" "}
        <Text style={styles.txtBold}> is not, are not, isn't, aren't</Text>.
        Porém, <Text style={styles.txtBold}>"I am not"</Text> não contrai!
        Confere as tabelas abaixo para a conjugação completa.
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
          <Text style={styles.txtCol}>I am</Text>
          <Text style={styles.txtCol}>You are</Text>
          <Text style={styles.txtCol}>He is</Text>
          <Text style={styles.txtCol}>She is</Text>
          <Text style={styles.txtCol}>It is</Text>
          <Text style={styles.txtCol}>We are</Text>
          <Text style={styles.txtCol}>You are</Text>
          <Text style={styles.txtCol}>They are</Text>
        </View>
        <View
          style={{
            backgroundColor: "#040644",
            flex: 1,
            alignItems: "center",
            padding: 5,
          }}
        >
          <Text style={styles.txtCol}>BE - SER/ESTAR</Text>
          <Text style={styles.txtCol}>Eu sou</Text>
          <Text style={styles.txtCol}>Você é</Text>
          <Text style={styles.txtCol}>Ele é</Text>
          <Text style={styles.txtCol}>Ela é</Text>
          <Text style={styles.txtCol}>Ele/Ela é</Text>
          <Text style={styles.txtCol}>Nós somos</Text>
          <Text style={styles.txtCol}>Vocês são</Text>
          <Text style={styles.txtCol}>Eles/Elas são</Text>
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
          <Text style={styles.txtCol}>AFIRM. CONTRAÍDA</Text>
          <Text style={styles.txtCol}>I'm</Text>
          <Text style={styles.txtCol}>You're</Text>
          <Text style={styles.txtCol}>He's</Text>
          <Text style={styles.txtCol}>She's</Text>
          <Text style={styles.txtCol}>It's</Text>
          <Text style={styles.txtCol}>We're</Text>
          <Text style={styles.txtCol}>You're</Text>
          <Text style={styles.txtCol}>They're</Text>
        </View>
        <View
          style={{
            backgroundColor: "#040644",
            flex: 1,
            alignItems: "center",
            padding: 5,
          }}
        >
          <Text style={styles.txtCol}>BE - SER/ESTAR</Text>
          <Text style={styles.txtCol}>Eu sou</Text>
          <Text style={styles.txtCol}>Você é</Text>
          <Text style={styles.txtCol}>Ele é</Text>
          <Text style={styles.txtCol}>Ela é</Text>
          <Text style={styles.txtCol}>Ele/Ela é</Text>
          <Text style={styles.txtCol}>Nós somos</Text>
          <Text style={styles.txtCol}>Vocês são</Text>
          <Text style={styles.txtCol}>Eles/Elas são</Text>
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
          <Text style={styles.txtCol}>I am not</Text>
          <Text style={styles.txtCol}>You are not</Text>
          <Text style={styles.txtCol}>He is not</Text>
          <Text style={styles.txtCol}>She is not</Text>
          <Text style={styles.txtCol}>It is not</Text>
          <Text style={styles.txtCol}>We are not</Text>
          <Text style={styles.txtCol}>You are not</Text>
          <Text style={styles.txtCol}>They are not</Text>
        </View>
        <View
          style={{
            backgroundColor: "#040644",
            flex: 1,
            alignItems: "center",
            padding: 5,
          }}
        >
          <Text style={styles.txtCol}>BE - SER/ESTAR</Text>
          <Text style={styles.txtCol}>Eu não sou</Text>
          <Text style={styles.txtCol}>Você não é</Text>
          <Text style={styles.txtCol}>Ele não é</Text>
          <Text style={styles.txtCol}>Ela não é</Text>
          <Text style={styles.txtCol}>Ele/Ela não é</Text>
          <Text style={styles.txtCol}>Nós não somos</Text>
          <Text style={styles.txtCol}>Vocês não são</Text>
          <Text style={styles.txtCol}>Eles/Elas não são</Text>
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
          <Text style={styles.txtCol}>NEG. CONTRAÍDA</Text>
          <Text style={styles.txtCol}>I am not</Text>
          <Text style={styles.txtCol}>You aren't</Text>
          <Text style={styles.txtCol}>He isn't</Text>
          <Text style={styles.txtCol}>She isn't</Text>
          <Text style={styles.txtCol}>It isn't</Text>
          <Text style={styles.txtCol}>We aren't</Text>
          <Text style={styles.txtCol}>You aren't</Text>
          <Text style={styles.txtCol}>They aren't</Text>
        </View>
        <View
          style={{
            backgroundColor: "#040644",
            flex: 1,
            alignItems: "center",
            padding: 5,
          }}
        >
          <Text style={styles.txtCol}>BE - SER/ESTAR</Text>
          <Text style={styles.txtCol}>Eu não sou</Text>
          <Text style={styles.txtCol}>Você não é</Text>
          <Text style={styles.txtCol}>Ele não é</Text>
          <Text style={styles.txtCol}>Ela não é</Text>
          <Text style={styles.txtCol}>Ele/Ela não é</Text>
          <Text style={styles.txtCol}>Nós não somos</Text>
          <Text style={styles.txtCol}>Vocês não são</Text>
          <Text style={styles.txtCol}>Eles/Elas não são</Text>
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
          <Text style={styles.txtCol}>Am I?</Text>
          <Text style={styles.txtCol}>Are you?</Text>
          <Text style={styles.txtCol}>Is he?</Text>
          <Text style={styles.txtCol}>Is she?</Text>
          <Text style={styles.txtCol}>Is it? </Text>
          <Text style={styles.txtCol}>Are we?</Text>
          <Text style={styles.txtCol}>Are you?</Text>
          <Text style={styles.txtCol}>Are they?</Text>
        </View>
        <View
          style={{
            backgroundColor: "#040644",
            flex: 1,
            alignItems: "center",
            padding: 5,
          }}
        >
          <Text style={styles.txtCol}>BE - SER/ESTAR</Text>
          <Text style={styles.txtCol}>Eu sou?</Text>
          <Text style={styles.txtCol}>Você é?</Text>
          <Text style={styles.txtCol}>Ele é?</Text>
          <Text style={styles.txtCol}>Ela é?</Text>
          <Text style={styles.txtCol}>Ele/Ela é?</Text>
          <Text style={styles.txtCol}>Nós somos?</Text>
          <Text style={styles.txtCol}>Vocês são?</Text>
          <Text style={styles.txtCol}>Eles/Elas são?</Text>
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

export default Be;
