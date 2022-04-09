import { View, Text, ScrollView, Linking, Button } from "react-native";
import React from "react";

import styles from "../../../assets/style";

const Imperative = () => {
  return (
    <ScrollView>
      <Text style={styles.txtBody}>
        O <Text style={styles.txtBold}>Imperativo</Text> é usado pelo falante
        para dar uma{" "}
        <Text style={styles.txtBold}>
          sugestão, uma ordem, um conselho ou uma instrução
        </Text>{" "}
        para que uma determinada ação aconteça. No inglês, utiliza-se o verbo em
        sua forma natural sem a partícula{" "}
        <Text style={styles.txtBold}>"to"</Text> para formar uma sentença no
        imperativo (to listen - escutar →{" "}
        <Text style={styles.txtBold}>listen</Text> -
        escuta/escute/escutai/escutem). Também não é necessário informar o
        sujeito, pois entende-se que este receberá a ordem, sugestão ou conselho
        implicitamente. Vê os exemplos: a){" "}
        <Text style={styles.txtBold}>Listen</Text> to Rock'n'Roll!
        (Escuta/Escute/Escutai/Escutem Rock'n'Roll!) b){" "}
        <Text style={styles.txtBold}>Watch</Text> Black Mirror!
        (Assiste/Assista/Assisti/Assistam à Black Mirror!)
      </Text>
      <Text style={styles.txtHR} />

      <Text style={styles.txtH2}>Negativa</Text>
      <Text style={styles.txtBody}>
        Basta acrescentar o auxiliar <Text style={styles.txtBold}>"do"</Text>{" "}
        mais o <Text style={styles.txtBold}>"not"</Text> no começo da frase. Há
        também a forma contraída <Text style={styles.txtBold}>don't</Text>.
        Ambas, obviamente, significam <Text style={styles.txtBold}>"não"</Text>{" "}
        e tampouco usam "to". Exemplos: a){" "}
        <Text style={styles.txtBold}>Do not/Don't</Text> listen to brega music,
        please! (Não escutes/escute/escuteis/escutem brega, por favor!) b){" "}
        <Text style={styles.txtBold}>Do not/Don't</Text> watch The Vampire
        Diaries, please! (Não assistas/assista/assistais/assistam/ à série
        Diários de um Vampiro, por favor!)
      </Text>
      <Text style={styles.txtHR} />
      <Text style={styles.txtBody}>
        Gostastes, bonecas?! Quereis saber mais sobre imperativo, em particular,
        e sobre conjugação, em geral, em português, curiosas?! Ide a{" "}
        <Button
          title="esse site"
          onPress={() =>
            Linking.openURL(
              "https://www.conjugacao.com.br/verbos-no-imperativo/"
            )
          }
        />
        para conhecer mais sobre o Imperativo em Português,{" "}
        <Button
          title="nesse"
          onPress={() => Linking.openURL("https://www.conjugacao.com.br/")}
        />{" "}
        para conjugar qualquer verbo em nossa língua,{" "}
        <Button
          title="nesse outro"
          onPress={() =>
            Linking.openURL(
              "https://www.wizard.com.br/idiomas/aprenda-a-usar-o-imperativo-em-ingles/"
            )
          }
        />
        aqui para ver mais sobre o imperativo em inglês, e{" "}
        <Button
          title="aqui"
          onPress={() =>
            Linking.openURL(
              "https://conjugator.reverso.net/conjugation-english.html"
            )
          }
        />{" "}
        para conjugar qualquer verbo em inglês.
      </Text>
    </ScrollView>
  );
};

export default Imperative;
