import React from "react";
import { View, Text, ScrollView } from "react-native";

import styles from "../../../assets/style";

const Modals = () => {
  return (
    <View>
      <ScrollView>
        <Text style={styles.txtBody}>
          Os Verbos Modais são sobre a atitude de uma pessoa em relação ao
          mundo. Ela pode expressar
          <Text style={styles.txtBold}>
            {" "}
            certeza, possibilidade, vontade, obrigação, necessidade e habilidade{" "}
          </Text>
          usando esses tais verbos modais.
        </Text>
        <View style={styles.table}>
          <View style={styles.tableCol}>
            <Text style={styles.txtColdHeader}>MODAIS</Text>
            <Text style={styles.txtHR} />
            <Text style={styles.txtCol}>
              • <Text style={styles.txtRed}>can</Text> - poder, "ser capaz de";
            </Text>
            <Text style={styles.txtCol}>
              • <Text style={styles.txtRed}>could</Text> - poderia, podia
              (passado de can);
            </Text>
            <Text style={styles.txtCol}>
              • <Text style={styles.txtRed}>may</Text> - poder, dever;
            </Text>
            <Text style={styles.txtCol}>
              • <Text style={styles.txtRed}>might</Text> - poder, dever;
            </Text>
            <Text style={styles.txtCol}>
              • <Text style={styles.txtRed}>will</Text> - coloca o verbo
              principal no futuro;
            </Text>
            <Text style={styles.txtCol}>
              • <Text style={styles.txtRed}>shall</Text> - modal, usado somente
              com I (eu), we (nós), que coloca o verbo principal no futuro,
              dever;
            </Text>
            <Text style={styles.txtCol}>
              • <Text style={styles.txtRed}>would</Text> - modal que coloca o
              verbo principal no futuro do pretérito;
            </Text>
            <Text style={styles.txtCol}>
              • <Text style={styles.txtRed}>should</Text> - deveria;
            </Text>
            <Text style={styles.txtCol}>
              • <Text style={styles.txtRed}>must</Text> - dever, ter que;
            </Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.txtColdHeader}>SEMIMODAIS</Text>
            <Text style={styles.txtHR} />
            <Text style={styles.txtCol}>
              • <Text style={styles.txtRed}>dare</Text> - ousar;
            </Text>
            <Text style={styles.txtCol}>
              • <Text style={styles.txtRed}>need</Text> - precisar de;
            </Text>
            <Text style={styles.txtCol}>
              • <Text style={styles.txtRed}>ought to</Text> ought to - dever;
            </Text>
            <Text style={styles.txtCol}>
              • <Text style={styles.txtRed}>used to</Text> - costumava;
            </Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.containerExemplos}>
            <Text style={styles.txtH1}>USOS e EXEMPLOS</Text>
            <View>
              <Text style={styles.txtH2}>Possibilidade</Text>
              <Text style={styles.txtExemplos}>
                <Text style={styles.txtRed}>may</Text>: Peter Parker may come by
                bus. (Peter Parker deve vir de ônibus.) - Se a frase contiver
                qualquer dúvida, se o "deve" puder ser substituído por "talvez",
                mete um may sem medo → Peter Parker talvez venha de ônibus.
              </Text>
              <Text style={styles.txtExemplos}>
                <Text style={styles.txtRed}>might</Text>: Peter Parker might
                come by bus. (Peter Parker deve vir de ônibus.) - Quando a frase
                expressar uma possibilidade menos provável do que com "may",
                quando implicitamene existe um "acho que não" → Peter Parker
                talvez venha de ônibus (mas acho que não).
              </Text>
              <Text style={styles.txtExemplos}>
                <Text style={styles.txtRed}>can</Text>: The dog can be
                dangerous. (O cachorro pode ser perigoso.) - Quando a frase
                expressar afirmações generalizadas sobre a possibilidade de
                algo.
              </Text>
              <Text style={styles.txtHR} />
              <Text style={styles.txtH2}>Certeza</Text>
              <Text style={styles.txtExemplos}>
                <Text style={styles.txtRed}>must</Text>: He must be starving.
                (Ele deve estar morrendo de fome.) - Quando se tem certeza que
                algo é verdadeiro e se tem motivos para se acreditar nisso.
              </Text>
              <Text style={styles.txtExemplos}>
                <Text style={styles.txtRed}>should</Text>: She should know. (Ela
                deve saber.) - Quando se quer sugerir que algo é verdadeiro e se
                tem motivos para isso.
              </Text>
              <Text style={styles.txtHR} />
              <Text style={styles.txtH2}>Habilidade/Capacidade</Text>
              <Text style={styles.txtExemplos}>
                <Text style={styles.txtRed}>can</Text>: He can speak three
                languages. (Ele pode, sabe, é capaz de falar três idiomas.) -
                Toda vez que can se referir à capacidade de se fazer algo,
                pode-se usar aqui também be able to como sinônimo (He is able to
                speak three languages.)
              </Text>
              <Text style={styles.txtExemplos}>
                <Text style={styles.txtRed}>could</Text>: He could speak three
                languages. (Ele podia/sabia/tinha a capacidade de falar três
                idiomas.) - Passado de can.
              </Text>
              <Text style={styles.txtHR} />
              <Text style={styles.txtH2}>Permissão</Text>
              <Text style={styles.txtExemplos}>
                <Text style={styles.txtRed}>can</Text>: Can I go now? (Posso ir
                agora?) - Quando se for perdir permissão ou conceder. You can go
                now. (Você pode ir agora.)
              </Text>
              <Text style={styles.txtExemplos}>
                <Text style={styles.txtRed}>could</Text>: Could I go now? (Eu
                poderia ir agora?) - Quando se for perdir permissão com mais
                educação ou formalidade.
              </Text>
              <Text style={styles.txtExemplos}>
                <Text style={styles.txtRed}>may</Text>: May I go now? (Posso ir
                agora?) - Quando se for perdir permissão ou conceder com mais
                educação ou formalidade. You may go now. (Você pode ir agora).
              </Text>
              <Text style={styles.txtHR} />
              <Text style={styles.txtH2}>Solicitações, ofertas e convites</Text>
              <Text style={styles.txtExemplos}>
                <Text style={styles.txtRed}>can</Text>: Can you carry this for
                me, please? (Você pode carregar isso para mim, por favor?) -
                Forma menos educada de se fazer uma solicitação, oferta ou
                convite.
              </Text>
              <Text style={styles.txtExemplos}>
                <Text style={styles.txtRed}>could</Text>: Could you carry this
                for me, please? (Você poderia carregar isso para mim, por
                favor?) - Forma educada de se fazer uma solicitação.
              </Text>
              <Text style={styles.txtExemplos}>
                <Text style={styles.txtRed}>would</Text>: Would you carry this
                for me, please? (Você carregaria isso para mim, por favor?) -
                Forma educada de se fazer uma solicitação.
              </Text>
              <Text style={styles.txtExemplos}>
                <Text style={styles.txtRed}>will</Text>: Will you carry this for
                me, please? (Você pode/quer carregar isso para mim, por favor?)
                - Forma menos educada de se fazer uma solicitação.
              </Text>
              <Text style={styles.txtExemplos}>
                <Text style={styles.txtRed}>shall</Text>: Shall I help you?
                (Devo/Posso te ajudar com isso?) - Aqui, shall nada tem a ver
                com o futuro, mas com "oferta"..
              </Text>
              <Text style={styles.txtHR} />
              <Text style={styles.txtH2}>Sugestões e obrigações</Text>
              <Text style={styles.txtExemplos}>
                <Text style={styles.txtRed}>should</Text>: You should study
                more. (Você deve(ria) estudar mais.) - Quando se quiser dar uma
                sugestão ou conselho, should é a pedida certa. Pode-se aqui
                substituir should por ought to sem problema algum.
              </Text>
              <Text style={styles.txtExemplos}>
                <Text style={styles.txtRed}>must</Text>: You must stop at a red
                light. (Você deve parar no sinal vermelho.) - Quando o sentido
                da frase for de obrigação, de algo necessário, quando o deve
                tiver sentido de tem que, must deve ser usado. Há a
                possibilidade de se usar have (got) to ou need com o mesmo
                sentido nessa frase.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Modals;
