import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";

import styles from "../../../assets/style";

import { useNavigation } from "@react-navigation/native";

const Will = () => {
  const navigation = useNavigation();
  const navegaBeGoingTo = () => {
    navigation.navigate("Be Going To");
  };
  return (
    <ScrollView>
      <Text style={styles.txtBody}>
        O futuro com <Text style={styles.txtBold}>will</Text> expressa uma
        decisão espontânea, uma suposição em relação ao futuro ou uma ação no
        futuro que não pode ser influenciada. Em português, esse auxiliar não
        terá tradução, servindo apenas para colocar o verbo principal no futuro
        simples, que quase não é mais usado. Ex.: "Ele{" "}
        <Text style={styles.txtBold}>vencerá</Text>." → "He{" "}
        <Text style={styles.txtBold}>will </Text>
        win." <Text style={styles.txtBold}>Will</Text> nunca muda de forma,
        sendo o mesmo para todas as pessoas (I, you, he, etc). Existe também
        <Text style={styles.txtBold}> shall</Text>, que tem a mesma função de
        <Text style={styles.txtBold}> will</Text>. Essa forma é usada somente
        com os pronomes pessoais "I" e "We". Porém, é uma forma muito antiquada.
        O verbo principal não recebe a partícula "
        <Text style={styles.txtBold}>to</Text>" para formar o infinitivo. Na
        forma negativa, basta adicionar <Text style={styles.txtBold}>not</Text>{" "}
        após <Text style={styles.txtBold}>will</Text> ={" "}
        <Text style={styles.txtBold}>will not</Text>. Essa forma pode ser
        contraída, ficando <Text style={styles.txtBold}>won't</Text>. Na
        interrogativa, basta colocar <Text style={styles.txtBold}>will</Text> no
        início da frase. Vê a estrutura do
        <Text style={styles.txtBold}> will</Text>, as contrações e depois a
        tabela com a conjugação completa do verbo to win no futuro simples. Não
        te esqueças das observações.
      </Text>
      <Text style={styles.txtH2}>Estrutura Afirmativa e Negativa</Text>
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
          <Text style={styles.txtCol}>I/you/he etc</Text>
        </View>
        <View
          style={{
            backgroundColor: "#040644",
            flex: 1,
            alignItems: "center",
            padding: 5,
          }}
        >
          <Text style={styles.txtCol}>will/won't</Text>
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
      <Text style={styles.txtH2}>Estrutura Interrogativa</Text>
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
          <Text style={styles.txtCol}>will/won't</Text>
        </View>
        <View
          style={{
            backgroundColor: "#040644",
            flex: 1,
            alignItems: "center",
            padding: 5,
          }}
        >
          <Text style={styles.txtCol}>I/you/he etc</Text>
        </View>
        <View
          style={{
            backgroundColor: "#064906",
            flex: 1,
            alignItems: "center",
            padding: 5,
          }}
        >
          <Text style={styles.txtCol}>verbo?</Text>
        </View>
      </View>
      <Text style={styles.txtH2}>Contrações</Text>
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
          <Text style={styles.txtCol}>I will - I'll</Text>
          <Text style={styles.txtCol}>You will - You'll</Text>
          <Text style={styles.txtCol}>He will - He'll</Text>
          <Text style={styles.txtCol}>She will - She'll</Text>
          <Text style={styles.txtCol}>It will - It'll</Text>
          <Text style={styles.txtCol}>We will - We'll</Text>
          <Text style={styles.txtCol}>You will - You'll</Text>
          <Text style={styles.txtCol}>They will - They'll</Text>
        </View>
      </View>
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
          <Text style={styles.txtCol}>WIN</Text>
          <Text style={styles.txtCol}>I will win</Text>
          <Text style={styles.txtCol}>You will win</Text>
          <Text style={styles.txtCol}>He will win</Text>
          <Text style={styles.txtCol}>She will win</Text>
          <Text style={styles.txtCol}>It will win</Text>
          <Text style={styles.txtCol}>We will win</Text>
          <Text style={styles.txtCol}>You will win</Text>
          <Text style={styles.txtCol}>They will win</Text>
        </View>
        <View
          style={{
            backgroundColor: "#040644",
            flex: 1,
            alignItems: "center",
            padding: 5,
          }}
        >
          <Text style={styles.txtCol}>VENCER</Text>
          <Text style={styles.txtCol}>Eu vencerei</Text>
          <Text style={styles.txtCol}>Você vencerá</Text>
          <Text style={styles.txtCol}>Ele vencerá</Text>
          <Text style={styles.txtCol}>Ela vencerá</Text>
          <Text style={styles.txtCol}>Ele/Ela vencerá</Text>
          <Text style={styles.txtCol}>Nós venceremos</Text>
          <Text style={styles.txtCol}>Vocês vencerão</Text>
          <Text style={styles.txtCol}>Eles/Elas vencerão</Text>
        </View>
      </View>
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
          <Text style={styles.txtCol}>I won't win</Text>
          <Text style={styles.txtCol}>You won't win</Text>
          <Text style={styles.txtCol}>He won't win</Text>
          <Text style={styles.txtCol}>She won't win</Text>
          <Text style={styles.txtCol}>It won't win</Text>
          <Text style={styles.txtCol}>We won't win</Text>
          <Text style={styles.txtCol}>You won't win</Text>
          <Text style={styles.txtCol}>They won't win</Text>
        </View>
        <View
          style={{
            backgroundColor: "#040644",
            flex: 1,
            alignItems: "center",
            padding: 5,
          }}
        >
          <Text style={styles.txtCol}>VENCER</Text>
          <Text style={styles.txtCol}>Eu não vencerei</Text>
          <Text style={styles.txtCol}>Você não vencerá</Text>
          <Text style={styles.txtCol}>Ele não vencerá</Text>
          <Text style={styles.txtCol}>Ela não vencerá</Text>
          <Text style={styles.txtCol}>Ele/Ela não vencerá</Text>
          <Text style={styles.txtCol}>Nós não venceremos</Text>
          <Text style={styles.txtCol}>Vocês não vencerão</Text>
          <Text style={styles.txtCol}>Eles/Elas não vencerão</Text>
        </View>
      </View>
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
          <Text style={styles.txtCol}>Will I win?</Text>
          <Text style={styles.txtCol}>Will you win?</Text>
          <Text style={styles.txtCol}>Will he win?</Text>
          <Text style={styles.txtCol}>Will she win?</Text>
          <Text style={styles.txtCol}>Will it win?</Text>
          <Text style={styles.txtCol}>Will we win?</Text>
          <Text style={styles.txtCol}>Will you win?</Text>
          <Text style={styles.txtCol}>Will they win?</Text>
        </View>
        <View
          style={{
            backgroundColor: "#040644",
            flex: 1,
            alignItems: "center",
            padding: 5,
          }}
        >
          <Text style={styles.txtCol}>VENCER</Text>
          <Text style={styles.txtCol}>Eu vencerei?</Text>
          <Text style={styles.txtCol}>Você vencerá?</Text>
          <Text style={styles.txtCol}>Ele vencerá?</Text>
          <Text style={styles.txtCol}>Ela vencerá?</Text>
          <Text style={styles.txtCol}>Ele/Ela vencerá?</Text>
          <Text style={styles.txtCol}>Nós venceremos?</Text>
          <Text style={styles.txtCol}>Vocês vencerão?</Text>
          <Text style={styles.txtCol}>Eles/Elas vencerão?</Text>
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
          <Text style={styles.txtCol}>DECISÃO ESPONTÂNEA</Text>
          <Text style={styles.txtCol}>
            <Text style={styles.txtBold}>I'll</Text> help you now. (Ajudar-te-ei
            agora.)
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
            OPINIÃO, ESPERANÇA, INCERTEZA OU SUPOSIÇÃO
          </Text>
          <Text style={styles.txtCol}>
            Dad <Text style={styles.txtBold}>will</Text> probably come back
            tomorrow. (Painho deverá voltar amanhã provavelmente.)
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
          <Text style={styles.txtCol}>PROMESSA</Text>
          <Text style={styles.txtCol}>
            I <Text style={styles.txtBold}>will</Text> stop playing PS4.
            (Pararei de jogar PS4.)
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#393A39",
            flex: 1,
            alignItems: "center",
            padding: 5,
          }}
        >
          <Text style={styles.txtCol}>AÇÃO NO FUTURO</Text>
          <Text style={styles.txtCol}>
            It <Text style={styles.txtBold}>will</Text> rain tomorrow. (Choverá
            amanhã. - Essa ação no futuro não pode ser influenciada)
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#686A03",
            flex: 1,
            alignItems: "center",
            padding: 5,
          }}
        >
          <Text style={styles.txtCol}>RELUTÂNCIA</Text>
          <Text style={styles.txtCol}>
            Na forma negativa, para expressar relutância: The baby{" "}
            <Text style={styles.txtBold}>won't</Text> eat his soup.(O bebê não
            tomará sua sopa.) - Nesse uso específico, uma possível tradução mais
            adequada seria "não quer" (O bebê{" "}
            <Text style={styles.txtBold}>não quer</Text> tomar sua sopa.).
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#6A0354",
            flex: 1,
            alignItems: "center",
            padding: 5,
            marginBottom: 20,
          }}
        >
          <Text style={styles.txtCol}>SHALL</Text>
          <Text style={styles.txtCol}>
            No inglês moderno, prefere-se usar{" "}
            <Text style={styles.txtBold}>will</Text> a{" "}
            <Text style={styles.txtBold}>shall</Text>, que só deve ser usado com
            (I - eu e we - nós) para fazer uma oferta ou sugestão, ou para pedir
            conselhos. Ex.: a) <Text style={styles.txtBold}>Shall</Text> I open
            the window? (Devo abrir a janela?). Percebe que nessa frase a
            tradução ao pé da letra ficaria inadequada: "Abrirei a janela?"; b)
            <Text style={styles.txtBold}> Shall</Text> we go to the cinema
            tonight? (Vamos ao cinema hoje à noite?); What{" "}
            <Text style={styles.txtBold}>shall</Text> I tell mom about the
            broken window? (O que direi a mainha sobre a janela quebrada?)
          </Text>
        </View>
        <Text style={styles.txtH2}>Diferenças Entre Will/Be Going To</Text>

        <Text style={styles.txtExemplos}>
          <TouchableOpacity style={styles.btn} onPress={navegaBeGoingTo}>
            <Text style={styles.txt}>Be Going To</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </ScrollView>
  );
};

export default Will;
