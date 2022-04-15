import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Button,
} from "react-native";
import * as Linking from "expo-linking";
import React, { useEffect } from "react";

import styles from "../assets/style";

import { AdMobBanner, setTestDeviceIDAsync } from "expo-ads-admob";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const Home = () => {
  useEffect(() => {
    setTestDeviceIDAsync("EMULATOR");
  }, []);
  return (
    <ScrollView>
      <View style={styles.container}>
        <AdMobBanner
          bannerSize="smartBanner"
          adUnitID="ca-app-pub-2008019372085379/1007709159"
          servePersonalizedAds // true or false
          onDidFailToReceiveAdWithError={(e) => console.log(e)}
        />
        <Text style={styles.txtH1Home}>Inglês Fundamental Maior</Text>
        <Image
          style={styles.img}
          source={require("../../assets/brEflag.jpg")}
        />
        <Text style={styles.txtBodyHome}>
          App feito para servir de consulta rápida com relação aos principais
          tópicos gramaticais da língua inglesa do Ensino Fundamental Maior.
          Totalmente dedicado aos meus alunos idos, aos que são e aos que serão.
          Se quiser dar alguma sugestão, fazer alguma crítica ou elogio, basta
          entrar em contato pelo{" "}
          <MaterialCommunityIcons
            onPress={() => {
              Linking.openURL(
                "http://api.whatsapp.com/send?phone=+5579988284730&text=Olá, Gostaria de falar sobre o App Inglês Fundamental Maior."
              );
            }}
            name="whatsapp"
            size={32}
            color="green"
          />{" "}
          ou pelo{" "}
          <MaterialCommunityIcons
            onPress={() => {
              Linking.openURL("https://telegram.me/jcgsr");
            }}
            name="telegram"
            size={32}
            color="grey"
          />
          . Há ainda o site{" "}
          <Text
            style={styles.txtH2}
            onPress={() => {
              Linking.openURL("https://www.englisheasyfm.com.br/");
            }}
          >
            English?! Easy...
          </Text>
          , se preferires.
          <Text style={styles.txtBold}>Disclaimer</Text>Eu utilizei,
          primordialmente, dois livros para consulta ao construir esse app. São
          eles:{" "}
          <Text
            style={styles.txtH2}
            onPress={() => {
              Linking.openURL(
                "https://issuu.com/editoraftd/docs/bridges-ingles-mp-6_divulgacao_59f2c8c6110c27"
              );
            }}
          >
            Bridges
          </Text>{" "}
          e{" "}
          <Text
            style={styles.txtH2}
            onPress={() => {
              Linking.openURL(
                "https://www.edocente.com.br/pnld/2020/obra/time-to-share-6-ano-saraiva/"
              );
            }}
          >
            Time to Share
          </Text>
          . Ambas as edições do 6º ao 9º ano obviamente. Se teu livro for
          diferente desses que mencionei, há a possibilidade de que o assunto
          que procuras esteja em outro ano aqui no app. Ex.: estudo no 9º ano,
          quero o assunto Linking Words, mas não há esse assunto aqui no app na
          tab do 9º ano... É porque esse assunto está coberto no 7º ano. Ficou
          claro? Qualquer dúvida, novamente, só entrar em contato pelos meios
          acima mencionados. Bons estudos!
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

export default Home;
