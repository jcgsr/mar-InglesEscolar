import { View, Text, ScrollView, Image } from "react-native";
import React from "react";

import styles from "../../../assets/style";

const Genitive = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.img}
          source={require("../../../../assets/s.jpeg")}
        />
        <Text style={styles.txtBody}>
          Também chamado de caso possessivo, o{" "}
          <Text style={styles.txtBold}> Caso Genitivo</Text> é quando
          adicionamos <Text style={styles.txtBold}>'s</Text> no final da palavra
          para mostrar posse, que algo pertence a outro ou um tipo de relação
          entre coisas e pessoas. A tradução pode ser{" "}
          <Text style={styles.txtBold}>"de", "do", "dos", "da", "das"</Text> .
          Vê o exemplo: Jimmy<Text style={styles.txtBold}>'s</Text> guitar. (A
          guitarra <Text style={styles.txtBold}>de</Text> Jimmy.)
        </Text>
        <Text style={styles.txtH2}>Regras</Text>
        <View style={styles.txtBodyExemplos}>
          <Text style={styles.txtExemplos}>
            1 - Substantivos no singular: adicionar{" "}
            <Text style={styles.txtBold}>'s</Text>. Ex.: My father
            <Text style={styles.txtRed}>'s </Text>
            favorite band. (A banda favorita{" "}
            <Text style={styles.txtRed}>de</Text> meu pai.)
          </Text>
          <Text style={styles.txtExemplos}>
            2 - Substantivos no plural terminados com a letra "s": adicionar
            apenas o apóstrofo <Text style={styles.txtRed}>' </Text> sem o "s".
            Ex.: The Beatles<Text style={styles.txtRed}>'</Text> second album.
            (O segundo disco <Text style={styles.txtRed}>dos</Text> Beatles.)
          </Text>
          <Text style={styles.txtExemplos}>
            3 - Substantivos no plural que não terminam em{" "}
            <Text style={styles.txtBold}>"s"</Text>: adicionar{" "}
            <Text style={styles.txtRed}>'s</Text>. Ex.: The children
            <Text style={styles.txtRed}>'s</Text> piano. (O piano{" "}
            <Text style={styles.txtRed}>das</Text> crianças.)
          </Text>
          <Text style={styles.txtExemplos}>
            4 - Substantivos no singular que terminam em{" "}
            <Text style={styles.txtBold}>"s"</Text> (nomes próprios): Adicionar
            <Text style={styles.txtRed}>'s</Text> na maioria. Ex.: James
            <Text style={styles.txtRed}>'s</Text> new guitar. (A nova guitarra{" "}
            <Text style={styles.txtRed}>de</Text> James.) Nomes clássicos ou
            religiosos: adicionar somente apóstrofo{" "}
            <Text style={styles.txtRed}>'</Text>. Ex.: Jesus
            <Text style={styles.txtRed}>'</Text> disciples. (Os discípulos{" "}
            <Text style={styles.txtRed}>de</Text> Jesus.)
          </Text>
          <Text style={styles.txtExemplos}>
            5 - Sem substantivos: se o significado for claro, podemos usar o
            possessivo sem um substantivo depois dele. Ex.: Dora
            <Text style={styles.txtRed}>'s</Text> guitar is older than Carla
            <Text style={styles.txtRed}>'s</Text>. (A guitarra{" "}
            <Text style={styles.txtRed}>de</Text> Dora é mais antiga do que a{" "}
            <Text style={styles.txtRed}>de</Text> Carla.)
          </Text>
          <Text style={styles.txtExemplos}>
            <Text style={styles.txtBold}>Atenção</Text>: Se houver dois
            proprietários de uma única coisa, adicionar{" "}
            <Text style={styles.txtRed}>'s</Text> somente ao final do último
            nome. Ex.: Paul and Lennon<Text style={styles.txtRed}>'s</Text>{" "}
            band. (A banda <Text style={styles.txtRed}>de</Text> Paul e Lennon.
            = A banda é dos dois.) Se cada pessoa possuir coisas distintas,
            adicionar <Text style={styles.txtRed}>'s</Text> em todas as pessoas.
            Ex.: Lennon<Text style={styles.txtRed}>'s</Text>, Jagger
            <Text style={styles.txtRed}>'s</Text> and Parypa
            <Text style={styles.txtRed}>'s</Text> bands. (As bandas{" "}
            <Text style={styles.txtRed}>de</Text> Lennon,{" "}
            <Text style={styles.txtRed}>de</Text> Jagger e{" "}
            <Text style={styles.txtRed}>de</Text> Parypa. = Cada um tem uma
            banda diferente.)
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Genitive;
