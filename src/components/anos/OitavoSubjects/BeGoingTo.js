import React, { useEffect } from "react";
import { View, Text, ScrollView } from "react-native";

import styles from "../../../assets/style";
import { AdMobBanner, setTestDeviceIDAsync } from "expo-ads-admob";

const BeGoingTo = () => {
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
        O tempo futuro formado com a estrutura{" "}
        <Text style={styles.txtBold}>be + going to + verbo</Text> é comumente
        usado em estilos <Text style={styles.txtBold}>informais</Text>. A
        tradução em português, ao pé da letra, é "estar indo", mas a depender do
        sujeito (I, you, he, etc) o mais comum é traduzir como{" "}
        <Text style={styles.txtBold}>vou, vai, vamos, vão </Text>
        mais o infinitivo do verbo em vez de "estou indo, está indo, estão indo,
        estamos indo". Exemplos na afirmativa, negativa e interrogativa: "I{" "}
        <Text style={styles.txtRed}>am going to</Text> watch Spider-Man." (Eu{" "}
        <Text style={styles.txtRed}>vou</Text> assistir ao Homem-Aranha.) "I{" "}
        <Text style={styles.txtRed}>am not going to</Text> watch High School
        Musical." (Eu <Text style={styles.txtRed}>não vou</Text> assistir ao
        High School Musical.) "<Text style={styles.txtRed}>Am I going to</Text>{" "}
        watch Spider-Man?" (Eu <Text style={styles.txtRed}>vou</Text> assistir
        ao Homem-Aranha?)
      </Text>
      <Text style={styles.txtH2}>Estrutura</Text>
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
          <Text style={styles.txtCol}>am/is/are</Text>
        </View>
        <View
          style={{
            backgroundColor: "#040644",
            flex: 1,
            alignItems: "center",
            padding: 5,
          }}
        >
          <Text style={styles.txtCol}>going to</Text>
        </View>
        <View
          style={{
            backgroundColor: "#064906",
            flex: 1,
            alignItems: "center",
            padding: 5,
          }}
        >
          <Text style={styles.txtCol}>verbo</Text>
        </View>
      </View>
      <Text style={styles.txtH2}>Usos</Text>
      <View style={styles.containerTableCol}>
        <View
          style={{
            backgroundColor: "#B60D22",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            padding: 5,
          }}
        >
          <Text style={styles.txtCol}>INTENÇÕES</Text>
          <Text style={styles.txtCol}>
            'be going to' é usado para falar sobre{" "}
            <Text style={styles.txtBold}>planos e intenções </Text>
            futuras. Normalmente, a decisão sobre os planos futuros já foi
            feita. Ex.: <Text style={styles.txtBold}>I am going to </Text> watch
            Spider-man next Friday at the cimena. (Eu{" "}
            <Text style={styles.txtBold}>vou </Text> assistir Homem-Aranha no
            cinema próxima sexta.) - Nessa frase, já está decidido o que e
            quando eu vou realizar o planejado.
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
          <Text style={styles.txtCol}>COMANDOS E ORDENS</Text>
          <Text style={styles.txtCol}>
            'be going to' é usado para dar{" "}
            <Text style={styles.txtBold}>ordens </Text> ou afirmar que algo é{" "}
            <Text style={styles.txtBold}>obrigatório </Text>. Ex.: "You{" "}
            <Text style={styles.txtBold}>are going to </Text> kiss me." (Você{" "}
            <Text style={styles.txtBold}>vai </Text> me beijar.) - Nessa frase,
            Homem-Aranha está mandando, dando uma ordem para Mary Jane beijá-lo.
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#064906",
            flex: 1,
            alignItems: "center",
            padding: 5,
          }}
        >
          <Text style={styles.txtCol}>PREVISÕES</Text>
          <Text style={styles.txtCol}>
            'be going to' é usado para prever algo que é pensado como certo que{" "}
            <Text style={styles.txtBold}>vai </Text> acontecer ou para o qual se
            tem evidências por enquanto. Ex.: It
            <Text style={styles.txtBold}>is going to </Text> rain. (
            <Text style={styles.txtBold}>Vai </Text>
            chover.) - Nessa frase, provavelmente a pessoa que disse isso está
            vendo nuvens carregadas.
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#393A39",
            flex: 1,
            alignItems: "center",
            padding: 5,
            marginBottom: 20,
          }}
        >
          <Text style={styles.txtCol}>GONNA</Text>
          <Text style={styles.txtCol}>
            contração de 'going to'. Usado em contextos muito informais,
            especialmente na fala e em canções. Ex.: "It's{" "}
            <Text style={styles.txtBold}>gonna</Text> be alright."(
            <Text style={styles.txtBold}>Vai </Text>
            ficar tudo bem.) - The Ramones
          </Text>
        </View>
        <AdMobBanner
          bannerSize="smartBanner"
          adUnitID="ca-app-pub-2008019372085379/1007709159"
          servePersonalizedAds // true or false
          onDidFailToReceiveAdWithError={(e) => console.log(e)}
        />
        <Text style={styles.txtH2}>Diferenças Entre Be Going To/Will</Text>

        <Text style={styles.txtExemplos}>
          <Text style={styles.txtBold}>Will </Text> é usado para expressar
          futuras ações decididas no momento em que se fala, enquanto{" "}
          <Text style={styles.txtBold}>be going to </Text> descreve planos
          futuros decididos antes do momento em que se fala. Ex.: a) I{" "}
          <Text style={styles.txtRed}>will </Text>
          kill you now. (Matar-te-ei agora) - Nessa frase, acabei de decidir o
          que fazer. b) I <Text style={styles.txtRed}>am going to </Text> kill
          you now. (Eu vou te matar agora.) - Nessa frase, a decisão já tinha
          sido tomada.
        </Text>
        <Text style={styles.txtExemplos}>
          <Text style={styles.txtBold}>Will</Text> é usado para indicar uma
          previsão com base em opiniões ou experiências pessoais, enquanto{" "}
          <Text style={styles.txtBold}>be going to</Text> é usado para expressar
          uma previsão com base na evidência presente. Ex.: a) I think Náutico{" "}
          <Text style={styles.txtRed}>will </Text> win the game. (Acho que o
          Náutico <Text style={styles.txtRed}>vencerá </Text> o jogo) - O
          Náutico sempre ganha, experiências pessoais. b) Náutico{" "}
          <Text style={styles.txtRed}>is going to</Text> win: it's already 4x0.
          (O Náutico <Text style={styles.txtRed}>vai</Text> vencer: 4x0 já.) -
          Evidência atual.
        </Text>
        <Text style={styles.txtExemplos}>
          <Text style={styles.txtBold}>Will</Text> expressa um{" "}
          <Text style={styles.txtBold}>fato</Text> futuro, uma{" "}
          <Text style={styles.txtBold}>certeza</Text>;{" "}
          <Text style={styles.txtBold}>be going to</Text> é usado para descrever
          algo que está para acontecer. Ex.: a) The sun{" "}
          <Text style={styles.txtRed}>will</Text> rise. (O sol{" "}
          <Text style={styles.txtRed}>nascerá</Text>.) - Uma certeza. b) The
          alarm clock <Text style={styles.txtRed}>is going to</Text> go off. (O
          despertador <Text style={styles.txtRed}>vai</Text> tocar.) - Já está
          perto da hora marcada para ele tocar.
        </Text>
        <Text style={styles.txtExemplos}>
          <Text style={styles.txtBold}>Will</Text> é usado para fazer promessas,
          ofertas, ameaças, recusas. Lê os exemplos de cada um desses usos: a)
          <Text style={styles.txtBold}> Promessa</Text>: I{" "}
          <Text style={styles.txtRed}>will</Text> tell nobody. (Não{" "}
          <Text style={styles.txtRed}>contarei</Text> a ninguém.) b){" "}
          <Text style={styles.txtBold}>Oferta</Text>: I{" "}
          <Text style={styles.txtRed}>will</Text> take you home tomorrow. (Te
          <Text style={styles.txtRed}> levarei</Text> para casa amanhã.) c)
          <Text style={styles.txtBold}> Ameaça</Text>: I{" "}
          <Text style={styles.txtRed}>will</Text> break your face. ({" "}
          <Text style={styles.txtRed}>Quebrarei </Text>
          tua cara.) d) <Text style={styles.txtBold}>Recusa</Text>: I{" "}
          <Text style={styles.txtRed}>will not/won't</Text> do this. (Não{" "}
          <Text style={styles.txtRed}>farei</Text>
          isso.)
        </Text>
        <Text style={styles.txtH2}>
          Diferenças Entre Be Going To/Present Continuous
        </Text>
        <Text style={styles.txtBodyExemplos}>
          Embora tanto o <Text style={styles.txtBold}>Presente Contínuo</Text>{" "}
          quanto o <Text style={styles.txtBold}>be going to</Text> possam ser
          usados para expressar a mesma ideia de algo futuro, em alguns casos,
          há uma diferença de significado. Vê os exemplos:
        </Text>
        <Text style={styles.txtExemplos}>
          O <Text style={styles.txtBold}>Presente Contínuo</Text> é usado
          principalmente para falar sobre planos pessoais, concretos, quando já
          se sabe, por exemplo, a data, a hora, o local. O{" "}
          <Text style={styles.txtBold}>be going to </Text>também pode ser usado
          para expressar a mesma ideia, mas com ênfase extra na ideia de
          <Text style={styles.txtBold}> intenção</Text>. Ex.: a) I{" "}
          <Text style={styles.txtRed}>am going to</Text> buy a new car. (Eu{" "}
          <Text style={styles.txtRed}>vou </Text>
          comprar um novo carro.) - Há a{" "}
          <Text style={styles.txtBold}> intenção</Text> nessa frase. b) I{" "}
          <Text style={styles.txtRed}>am buying</Text> a new car. (
          <Text style={styles.txtRed}>Estou comprando/vou comprar</Text> um novo
          carro.) - O foco aqui é a decisão, o plano.
        </Text>
        <Text style={styles.txtExemplos}>
          Normalmente se usa o <Text style={styles.txtBold}>be going to</Text>{" "}
          para falar sobre eventos fora do controle das pessoas. Ex.: a) The
          price of gasoline <Text style={styles.txtRed}>is going to</Text> go
          up. (O preço da gasolina <Text style={styles.txtRed}>vai</Text>{" "}
          subir.)
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

export default BeGoingTo;
