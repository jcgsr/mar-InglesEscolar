import React, { useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";

import styles from "../../../assets/style";

import { useNavigation } from "@react-navigation/native";
// adMob
import { AdMobBanner, setTestDeviceIDAsync } from "expo-ads-admob";

const Could = () => {
  useEffect(() => {
    setTestDeviceIDAsync("EMULATOR");
  }, []);
  const navigation = useNavigation();
  const navegaCan = () => {
    navigation.navigate("Can");
  };
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
          <Text style={styles.txtBold}>Could</Text> é um verbo modal, é o
          passado de can. Ele é usado para expressar{" "}
          <Text style={styles.txtBold}>habilidade </Text> no passado, dizer que
          algo era <Text style={styles.txtBold}>possível</Text>, fazer um{" "}
          <Text style={styles.txtBold}>pedido </Text>
          com maior formalidade assim como oferecer/pedir{" "}
          <Text style={styles.txtBold}>permissão</Text> mais polidamente. Na
          forma negativa, pode-se usar{" "}
          <Text style={styles.txtRed}>could not</Text> ou
          <Text style={styles.txtRed}> couldn't</Text>. DETALHE: As três tabelas
          abaixo usando <Text style={styles.txtBold}>podia </Text> como
          tradução, poderiam ter sido feitas tanto com{" "}
          <Text style={styles.txtBold}>poderia </Text> quanto{" "}
          <Text style={styles.txtBold}>pude </Text>. Fica a teu critério,
          entendido? Reforçando: tudo o que foi falado lá na tab de{" "}
          <TouchableOpacity onPress={navegaCan}>
            <Text>Can</Text>
          </TouchableOpacity>{" "}
          sobre ele, se aplica também ao{" "}
          <Text style={styles.txtBold}>could</Text>, mas o contexto sendo no
          passado, obviamente.
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
            <Text style={styles.txtCol}>I could</Text>
            <Text style={styles.txtCol}>You could</Text>
            <Text style={styles.txtCol}>He could</Text>
            <Text style={styles.txtCol}>She could</Text>
            <Text style={styles.txtCol}>It could</Text>
            <Text style={styles.txtCol}>We could</Text>
            <Text style={styles.txtCol}>You could</Text>
            <Text style={styles.txtCol}>They could</Text>
          </View>
          <View
            style={{
              backgroundColor: "#040644",
              flex: 1,
              alignItems: "center",
              padding: 5,
            }}
          >
            <Text style={styles.txtCol}>COULD - PODIA</Text>
            <Text style={styles.txtCol}>Eu podia</Text>
            <Text style={styles.txtCol}>Você podia</Text>
            <Text style={styles.txtCol}>Ele podia</Text>
            <Text style={styles.txtCol}>Ela podia</Text>
            <Text style={styles.txtCol}>Ele/Ela podia</Text>
            <Text style={styles.txtCol}>Nós podíamos</Text>
            <Text style={styles.txtCol}>Vocês podiam</Text>
            <Text style={styles.txtCol}>Eles/Elas podiam</Text>
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
            <Text style={styles.txtCol}>I couldn't</Text>
            <Text style={styles.txtCol}>You couldn't</Text>
            <Text style={styles.txtCol}>He couldn't</Text>
            <Text style={styles.txtCol}>She couldn't</Text>
            <Text style={styles.txtCol}>It couldn't</Text>
            <Text style={styles.txtCol}>We couldn't</Text>
            <Text style={styles.txtCol}>You couldn't</Text>
            <Text style={styles.txtCol}>They couldn't</Text>
          </View>
          <View
            style={{
              backgroundColor: "#040644",
              flex: 1,
              alignItems: "center",
              padding: 5,
            }}
          >
            <Text style={styles.txtCol}>COULDN'T</Text>
            <Text style={styles.txtCol}>Eu não podia</Text>
            <Text style={styles.txtCol}>Você não podia</Text>
            <Text style={styles.txtCol}>Ele não podia</Text>
            <Text style={styles.txtCol}>Ela não podia</Text>
            <Text style={styles.txtCol}>Ele/Ela não podia</Text>
            <Text style={styles.txtCol}>Nós não podíamos</Text>
            <Text style={styles.txtCol}>Vocês não podiam</Text>
            <Text style={styles.txtCol}>Eles/Elas não podiam</Text>
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
            <Text style={styles.txtCol}>Could I?</Text>
            <Text style={styles.txtCol}>Could you?</Text>
            <Text style={styles.txtCol}>Could he?</Text>
            <Text style={styles.txtCol}>Could she?</Text>
            <Text style={styles.txtCol}>Could it?</Text>
            <Text style={styles.txtCol}>Could we?</Text>
            <Text style={styles.txtCol}>Could you?</Text>
            <Text style={styles.txtCol}>Could they?</Text>
          </View>
          <View
            style={{
              backgroundColor: "#040644",
              flex: 1,
              alignItems: "center",
              padding: 5,
            }}
          >
            <Text style={styles.txtCol}>COULD - PODIA</Text>
            <Text style={styles.txtCol}>Eu podia?</Text>
            <Text style={styles.txtCol}>Você podia?</Text>
            <Text style={styles.txtCol}>Ele podia?</Text>
            <Text style={styles.txtCol}>Ela podia?</Text>
            <Text style={styles.txtCol}>Ele/Ela podia?</Text>
            <Text style={styles.txtCol}>Nós podíamos?</Text>
            <Text style={styles.txtCol}>Vocês podiam?</Text>
            <Text style={styles.txtCol}>Eles/Elas podiam?</Text>
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

export default Could;
