import { View, Text, ScrollView } from "react-native";
import React, { useEffect } from "react";

import styles from "../../../assets/style";

import { AdMobBanner, setTestDeviceIDAsync } from "expo-ads-admob";

const PresentSimple = () => {
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
        O <Text style={styles.txtBold}>Presente Simples</Text> é usado quando se
        fala de: a) algo que é verdade no presente. Ex.: I live in Recife. (Eu
        moro em Recife.) b) algo que acontece regularmente no presente. Ex.: I
        play the electric guitar every weekend. (Eu toco guitarra todo fim de
        semana.) c) algo que é sempre verdade. Ex.: The human body contains 206
        bones. (O corpo humano contém 206 ossos. - Menos o de Ivar the
        Boneless). Muitas vezes usamos advérbios de frequência como:
        <Text style={styles.txtBold}> às vezes, sempre e nunca</Text> com o
        presente simples: I sometimes go to the cinema. (Às vezes eu vou ao
        cinema.)
      </Text>
      <View style={styles.containerExemplos}>
        <Text style={styles.txtH1}>Afirmativa</Text>
        <Text style={styles.txtExemplos}>
          Basta repetir a forma básica do verbo sem o "
          <Text style={styles.txtBold}>to</Text>". Só isso! Ex.: ( verbo{" "}
          <Text style={styles.txtBold}>to</Text> play - jogar) I play chess. (Eu
          jogo xadrez.) Mas com a terceira pessoa do singular,{" "}
          <Text style={styles.txtBold}> he/she/it</Text>, adicionar um{" "}
          <Text style={styles.txtBold}>s</Text> à forma básica do verbo. Ex.:
          She play<Text style={styles.txtBold}>s</Text> chess. (Ela joga
          xadrez.) Atenção: 1 - se algum verbo terminar com{" "}
          <Text style={styles.txtBold}>o, s, ss, sh, ch, x, z</Text> , adiciona
          <Text style={styles.txtBold}> es</Text> na terceira pessoa do
          singular. Ex.: (verbo <Text style={styles.txtBold}>to do</Text> -
          fazer) She do<Text style={styles.txtBold}>es</Text> the job well. (Ela
          faz o trabalho bem.) 2 - se o verbo terminar com{" "}
          <Text style={styles.txtBold}>y</Text> e antes dele tiver uma
          consoante, por exemplo, <Text style={styles.txtBold}>to study</Text>,
          deve-se retirar o <Text style={styles.txtBold}>y</Text> e adicionar
          <Text style={styles.txtBold}> ies</Text> no lugar quando for a
          terceira pessoa do singular
          <Text style={styles.txtBold}> he/she/it</Text>. Ex.: (verbo{" "}
          <Text style={styles.txtBold}>to cry</Text> - chorar) He cr
          <Text style={styles.txtBold}>ies</Text> a lot. (Ele chora muito.)
        </Text>
        <Text style={styles.txtH1}>Negativa</Text>
        <Text style={styles.txtExemplos}>
          O verbo sempre ficará em sua forma básica. Sempre! Nunca mudará! Ou
          seja, não recebe <Text style={styles.txtBold}>s, es, ies</Text>, pelo
          contrário: se tiver algum desses sufixos, perde-os. Deve-se usar os
          auxiliares <Text style={styles.txtBold}>do/does</Text> seguidos de{" "}
          <Text style={styles.txtBold}>not</Text> antes do verbo.{" "}
          <Text style={styles.txtBold}>do not = don't </Text>
          sempre com <Text style={styles.txtBold}>I, you, we, they</Text>.{" "}
          <Text style={styles.txtBold}>does not = doesn't </Text> sempre com{" "}
          <Text style={styles.txtBold}>he, she, it</Text>. Vê os exemplos: a) I
          <Text style={styles.txtRed}> do not/don't </Text> see. (Eu não vejo.)
          b) She <Text style={styles.txtRed}> does not/doesn't </Text> see. (Ela
          não vê.) c) We <Text style={styles.txtRed}> do not/don't </Text> work.
          (Nós não trabalhamos.) d) He{" "}
          <Text style={styles.txtRed}> does not/doesn't </Text> work. (Ele não
          trabalha.)
        </Text>
        <Text style={styles.txtH1}>Interrogativa</Text>
        <Text style={styles.txtExemplos}>
          O verbo sempre ficará em sua forma básica. Sempre! Nunca mudará! Ou
          seja, não recebe <Text style={styles.txtBold}>s, es, ies</Text>{" "}
          igualzinho como na negativa. Deve-se usar os auxiliares{" "}
          <Text style={styles.txtBold}>do/does</Text> no INÍCIO da frase com as
          mesmas pessoas da negativa. Vê os exemplos: a)
          <Text style={styles.txtRed}> Do </Text> you live here? (Você mora
          aqui?) b) <Text style={styles.txtRed}> Does </Text> he live here? (Ele
          mora aqui?)
        </Text>
        <Text style={styles.txtH3}>
          Confere a conjugação completa abaixo do verbo "to die" (morrer):
        </Text>
      </View>
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
          <Text style={styles.txtCol}>I die</Text>
          <Text style={styles.txtCol}>You die</Text>
          <Text style={styles.txtCol}>He dies</Text>
          <Text style={styles.txtCol}>She dies</Text>
          <Text style={styles.txtCol}>It dies</Text>
          <Text style={styles.txtCol}>We die</Text>
          <Text style={styles.txtCol}>You die</Text>
          <Text style={styles.txtCol}>They die</Text>
        </View>
        <View
          style={{
            backgroundColor: "#040644",
            flex: 1,
            alignItems: "center",
            padding: 5,
          }}
        >
          <Text style={styles.txtCol}>TO DIE - MORRER</Text>
          <Text style={styles.txtCol}>Eu morro</Text>
          <Text style={styles.txtCol}>Você morre</Text>
          <Text style={styles.txtCol}>Ele morre</Text>
          <Text style={styles.txtCol}>Ela morre</Text>
          <Text style={styles.txtCol}>Ele/Ela morre</Text>
          <Text style={styles.txtCol}>Nós morremos</Text>
          <Text style={styles.txtCol}>Vocês morrem</Text>
          <Text style={styles.txtCol}>Eles/Elas morrem</Text>
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
          <Text style={styles.txtCol}>I don't die</Text>
          <Text style={styles.txtCol}>You don't die</Text>
          <Text style={styles.txtCol}>He doesn't die</Text>
          <Text style={styles.txtCol}>She doesn't die</Text>
          <Text style={styles.txtCol}>It doesn't die</Text>
          <Text style={styles.txtCol}>We don't die</Text>
          <Text style={styles.txtCol}>You don't die</Text>
          <Text style={styles.txtCol}>They don't die</Text>
        </View>
        <View
          style={{
            backgroundColor: "#040644",
            flex: 1,
            alignItems: "center",
            padding: 5,
          }}
        >
          <Text style={styles.txtCol}>TO DIE - MORRER</Text>
          <Text style={styles.txtCol}>Eu não morro</Text>
          <Text style={styles.txtCol}>Você não morre</Text>
          <Text style={styles.txtCol}>Ele não morre</Text>
          <Text style={styles.txtCol}>Ela não morre</Text>
          <Text style={styles.txtCol}>Ele/Ela não morre</Text>
          <Text style={styles.txtCol}>Nós não morremos</Text>
          <Text style={styles.txtCol}>Vocês não morrem</Text>
          <Text style={styles.txtCol}>Eles/Elas não morrem</Text>
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
          <Text style={styles.txtCol}>Do I die?</Text>
          <Text style={styles.txtCol}>Do you die?</Text>
          <Text style={styles.txtCol}>Does he die?</Text>
          <Text style={styles.txtCol}>Does she die?</Text>
          <Text style={styles.txtCol}>Does it die?</Text>
          <Text style={styles.txtCol}>Do we die?</Text>
          <Text style={styles.txtCol}>Do you die?</Text>
          <Text style={styles.txtCol}>Do they die?</Text>
        </View>
        <View
          style={{
            backgroundColor: "#040644",
            flex: 1,
            alignItems: "center",
            padding: 5,
          }}
        >
          <Text style={styles.txtCol}>TO DIE - MORRER</Text>
          <Text style={styles.txtCol}>Eu morro?</Text>
          <Text style={styles.txtCol}>Você morre?</Text>
          <Text style={styles.txtCol}>Ele morre?</Text>
          <Text style={styles.txtCol}>Ela morre?</Text>
          <Text style={styles.txtCol}>Ele/Ela morre?</Text>
          <Text style={styles.txtCol}>Nós morremos?</Text>
          <Text style={styles.txtCol}>Vocês morrem?</Text>
          <Text style={styles.txtCol}>Eles/Elas morrem?</Text>
        </View>
      </View>
      <AdMobBanner
        bannerSize="smartBanner"
        adUnitID="ca-app-pub-2008019372085379/1007709159"
        servePersonalizedAds // true or false
        onDidFailToReceiveAdWithError={(e) => console.log(e)}
      />
      <Text style={styles.txtHR} />
    </ScrollView>
  );
};

export default PresentSimple;
