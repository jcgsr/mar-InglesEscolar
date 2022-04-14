import { View, Text, ScrollView } from "react-native";
import React, { useEffect } from "react";

import styles from "../../../assets/style";
import { AdMobBanner, setTestDeviceIDAsync } from "expo-ads-admob";

const Countable = () => {
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
        Os substantivos podem ser contáveis ou incontáveis. Substantivos
        <Text style={styles.txtBold}> contáveis</Text> podem ser contados: um
        cachorro, dois cachorros, etc. Substantivos{" "}
        <Text style={styles.txtBold}> incontáveis</Text> não podem ser contados:
        ar, água, etc. Simples assim.
      </Text>
      <Text style={styles.txtH2}>Substantivos Contáveis</Text>
      <Text style={styles.txtBody}>
        Os contáveis podem ser singular ou plural. Para frases afirmativas no
        singular, usa-se <Text style={styles.txtBold}> a/an (um, uma)</Text> e{" "}
        <Text style={styles.txtBold}>some</Text> (alguns, algumas) no plural.
        Ex.: a) I have <Text style={styles.txtRed}>a</Text> guitar. (Eu tenho{" "}
        <Text style={styles.txtRed}>um </Text>
        violão.) b) I have <Text style={styles.txtRed}>some</Text> friends. (Eu
        tenho <Text style={styles.txtRed}>alguns</Text> amigos.) Para frases
        negativas e interrogatvas, usa-se{" "}
        <Text style={styles.txtBold}> a/an (um, uma)</Text> e{" "}
        <Text style={styles.txtBold}>any</Text> (alguns, algumas) no plural.
        Ex.: a) I don't have <Text style={styles.txtRed}>a</Text> guitar. (Eu
        não tenho <Text style={styles.txtRed}>um</Text> violão.) b) I don't have
        <Text style={styles.txtRed}> any</Text> friends. (Eu não tenho{" "}
        <Text style={styles.txtRed}>nenhum </Text>
        amigo.) c) Do you have <Text style={styles.txtRed}>a</Text> guitar?
        (Você tem <Text style={styles.txtRed}>um</Text> violão?) d) Do you have
        <Text style={styles.txtRed}> any</Text> friend? (Você tem{" "}
        <Text style={styles.txtRed}>algum</Text> amigo?).{" "}
        <Text style={styles.txtBold}>
          A few (um pouco, poucos) e many (muitos)
        </Text>{" "}
        são usados com os contáveis. Ex.:{" "}
        <Text style={styles.txtRed}> many/a few</Text> dollars. Atenta para o
        detalhe de que nas frases interrrogativas e negativas no plural, a
        tradução mais indicada de <Text style={styles.txtBold}>any</Text> é "
        <Text style={styles.txtBold}>nenhum, algum</Text>", ou seja, no
        singular.
      </Text>
      <Text style={styles.txtHR} />
      <Text style={styles.txtH2}>Substantivos Incontáveis</Text>
      <Text style={styles.txtBody}>
        Diferente dos contáveis, os incontáveis são{" "}
        <Text style={styles.txtBold}>substâncias, conceitos</Text> que não podem
        ser divididos em elementos separados. Por isso ficam no singular
        geralmente. Não se pode "contá-los". Por exemplo, não se pode contar
        "leite", mas se pode contar "garrafas de leite" ou "litros de leite". Vê
        abaixo mais alguns substantivos incontáveis que podem confundir um
        pouco, uma vez que alguns deles podem ser contados em português:{" "}
        <Text style={styles.txtBold}>
          music, art, love, happiness, advice, information, news furniture,
          luggage, rice, sugar, butter, water electricity, gas, power, money,
          currency
        </Text>
        .
      </Text>
      <Text style={styles.txtHR} />
      <Text style={styles.txtBody}>
        Como os incontáveis geralmente ficam no singular, não se usa{" "}
        <Text style={styles.txtBold}> a/an (um, uma)</Text> com eles, mas{" "}
        <Text style={styles.txtBold}>some</Text> na afirmativa e{" "}
        <Text style={styles.txtBold}>any</Text> na negativa e interrrogativa.
        Ex.: a) I have <Text style={styles.txtRed}>some</Text> money. (Eu tenho
        <Text style={styles.txtRed}> algum</Text> dinheiro.) b) Do you have{" "}
        <Text style={styles.txtRed}>any</Text> money? (Você tem{" "}
        <Text style={styles.txtRed}>algum</Text> dinheiro?).{" "}
        <Text style={styles.txtBold}>A little (um pouco) e much (muito)</Text>{" "}
        também são usados com os incontáveis. Ex.:{" "}
        <Text style={styles.txtRed}>a little/much</Text> money.
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

export default Countable;
