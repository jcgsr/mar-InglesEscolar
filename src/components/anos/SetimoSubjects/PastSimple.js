import React, { useEffect } from "react";
import { View, Text, ScrollView, Linking } from "react-native";

import styles from "../../../assets/style";

import { AdMobBanner, setTestDeviceIDAsync } from "expo-ads-admob";

const PastSimple = () => {
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
          O Passado Simples é um tempo verbal usado para falar sobre coisas que
          aconteceram ou existiram antes do momento em que se fala, ou seja, do
          momento atual. Ele mostra que você está falando sobre algo que já
          aconteceu, enfatiza que a ação terminou por completo.
        </Text>
        <View style={styles.containerExemplos}>
          <Text style={styles.txtH1}>Verbos Regulares</Text>
          <Text style={styles.txtBody}>
            Um verbo regular é aquele verbo que sempre termina da mesma forma,
            por isso seu nome: "regular". No caso do inglês, todos os regulares
            - e eles são a maioria dos verbos - terminam com ed (ou d se ele já
            tiver e no final). Presta atenção que todas as pessoas (I, you, he,
            etc) terminarão em ed. Todas! Inglês é muito fácil 🙄. Então, vamos
            às regrinhas:
          </Text>
          <Text style={styles.txtHR} />
          <Text style={styles.txtH2}>Afirmativa (+)</Text>
          <Text style={styles.txtExemplos}>
            <Text style={styles.txtRed}>ed</Text> - to kill (matar) → kill
            <Text style={styles.txtBold}>ed </Text>
            (matou/matava)
          </Text>

          <Text style={styles.txtExemplos}>
            <Text style={styles.txtRed}>d</Text> - to dance (dançar) → danc
            <Text style={styles.txtBold}>ed</Text> (dançou/dançava)
          </Text>
          <Text style={styles.txtExemplos}>
            Se o verbo terminar com uma sequência{" "}
            <Text style={styles.txtRed}>
              CVC (Consoante + Vogal + Consoante)
            </Text>{" "}
            e for oxítono, dobra-se a última consoante e só depois acrescenta-se
            <Text style={styles.txtBold}> ed </Text>. Ex.: to stop (parar) →
            stop
            <Text style={styles.txtBold}>ped </Text>. (parou/parou); to prefer
            (preferir) → prefer<Text style={styles.txtBold}>red </Text>.
            (preferia/preferiu). Se o verbo terminar com{" "}
            <Text style={styles.txtBold}> y </Text> e antes dele tiver uma
            consoante, deve-se trocar o <Text style={styles.txtBold}> y </Text>{" "}
            por <Text style={styles.txtBold}> i </Text> e só depois adicionar{" "}
            <Text style={styles.txtBold}> ed </Text> . Ex.: to cr
            <Text style={styles.txtBold}>y </Text> (chorar) → cr
            <Text style={styles.txtBold}>ied </Text>
            (chorava/chorou).
          </Text>
          <Text style={styles.txtHR} />
          <Text style={styles.txtH2}>Negativa (-)</Text>
          <Text style={styles.txtExemplos}>
            O verbo sempre ficará em sua forma básica. Sempre! Nunca mudará! Ou
            seja, não recebe <Text style={styles.txtBold}> ed </Text> por causa
            da seguinte regra: deve-se usar o auxiliar{" "}
            <Text style={styles.txtRed}> did </Text> seguido de{" "}
            <Text style={styles.txtBold}> not </Text> antes do verbo.{" "}
            <Text style={styles.txtBold}> Did not = Didn't </Text> com todas as
            pessoas: I, you, he, she, it, we, they.
          </Text>
          <Text style={styles.txtHR} />
          <Text style={styles.txtH2}>Interrogativa (?)</Text>
          <Text style={styles.txtExemplos}>
            O verbo sempre ficará em sua forma básica. Sempre! Nunca mudará!
            Igualzinho como na negativa... Inglês é muito fácil 🙄. Deve-se usar
            o auxiliar <Text style={styles.txtRed}> did </Text> no INÍCIO da
            frase com todas as pessoas igual como na negativa 🙄. Vê a tabela
            abaixo com um exemplo de cada forma com um verbo bem importante:{" "}
            <Text style={styles.txtRed}> to piss </Text>
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              alignItems: "stretch",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                backgroundColor: "#B60D22",
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                padding: 5,
              }}
            >
              <Text style={styles.txtCol}>
                + : I/you/he piss<Text style={styles.txtBold}>ed</Text>.
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "#040644",
                flex: 1,
                alignItems: "center",
                padding: 5,
              }}
            >
              <Text style={styles.txtCol}>
                - : I/you/he <Text style={styles.txtBold}>did not/didn't</Text>{" "}
                piss.
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "grey",
                flex: 1,
                alignItems: "center",
                padding: 5,
              }}
            >
              <Text style={styles.txtCol}>
                ? : <Text style={styles.txtBold}>Did </Text> I/you/he piss?
              </Text>
            </View>
          </View>
          <Text style={styles.txtHR} />
          <AdMobBanner
            bannerSize="smartBanner"
            adUnitID="ca-app-pub-2008019372085379/1007709159"
            servePersonalizedAds // true or false
            onDidFailToReceiveAdWithError={(e) => console.log(e)}
          />
          <Text style={styles.txtH1}>Verbos Irregulares</Text>
          <Text style={styles.txtBody}>
            Bem... (participating in a Google Meeting - Riachuelo... Using
            Sublime Text - 20220319T0815 - was listening to What's inside a
            girl... What a song! Long live the Cramps! Using
            VSCode/Sublime/Vim/NVim - 20220303T0819), os verbos irregulares -
            que são a minoria - não seguem uma forma quando conjugados no Past
            Simple na forma afirmativa. Eles podem ser escritos de modo
            diferente, como se fossem outra palavras, ou até ficar do mesmo
            jeito. O principal: não apresentam a terminação{" "}
            <Text style={styles.txtBold}>ed </Text>. Então a moleza que foi com
            os regulares acaba aqui. Porém, na negativa e na interrogativa, os
            irregulares seguem a mesma regrinha dos regulares. Vê a tabela
            abaixo com um exemplo de cada forma com o verbo irregular{" "}
            <Text style={styles.txtRed}>to lose </Text>. Presta atenção que ele
            só muda na afirmativa.
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              alignItems: "stretch",
              justifyContent: "space-between",
              marginTop: 20,
            }}
          >
            <View
              style={{
                backgroundColor: "#B60D22",
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                padding: 5,
              }}
            >
              <Text style={styles.txtCol}>
                + : I/you/he <Text style={styles.txtBold}>lost</Text>.
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "#040644",
                flex: 1,
                alignItems: "center",
                padding: 5,
              }}
            >
              <Text style={styles.txtCol}>
                - : I/you/he <Text style={styles.txtBold}>did not/didn't</Text>{" "}
                lose.
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "grey",
                flex: 1,
                alignItems: "center",
                padding: 5,
                marginBottom: 20,
              }}
            >
              <Text style={styles.txtCol}>
                ? : <Text style={styles.txtBold}>Did </Text> I/you/he lose?
              </Text>
            </View>
          </View>
          <Text style={styles.txtBody}>
            Para uma lista dos regulares mais usados, clica →{" "}
            <Text
              onPress={() =>
                Linking.openURL(
                  "https://www.yazigi.com.br/noticias/ingles/verbos-regulares-em-ingles-voce-sabe-quais-sao-os-mais-usados"
                )
              }
              title="aqui"
              style={{ color: "red" }}
            >
              aqui
            </Text>
            . Para uma outra lista, dos irregulares, clica →{" "}
            <Text
              onPress={() =>
                Linking.openURL(
                  "https://www.yazigi.com.br/noticias/ingles/60-verbos-irregulares-em-ingles-que-voce-precisa-saber"
                )
              }
              title="aqui"
              style={{ color: "red" }}
            >
              aqui
            </Text>
            .
          </Text>
          <AdMobBanner
            bannerSize="smartBanner"
            adUnitID="ca-app-pub-2008019372085379/1007709159"
            servePersonalizedAds // true or false
            onDidFailToReceiveAdWithError={(e) => console.log(e)}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default PastSimple;
