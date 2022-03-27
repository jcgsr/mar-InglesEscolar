import React from "react";
import { View, Text, ScrollView } from "react-native";

import styles from "../../../assets/style";

const AdjectivesComparative = () => {
	return (
		<ScrollView>
			<Text style={styles.txtBody}>
				O <Text style={styles.txtBold}>Comparativo do Adjetivo</Text> é
				usado para comparar uma pessoa ou coisa com outra e permitindo dizer
				se uma pessoa ou coisa tem mais ou menos uma qualidade particular:
				(maior que, menor que, mais rápido que, mais alto do que). Em
				português, o Comparativo se dá pelo uso de '
				<Text style={styles.txtBold}>mais</Text>' antes dos adjetivos
				regulares (mais alto, mais forte, etc). Em inglês, esse nosso '
				<Text style={styles.txtBold}>mais</Text>', pode ser um sufixo
				<Text style={styles.txtRed}> er</Text>, ou seja, aparece depois dos
				adjetivos (tall<Text style={styles.txtRed}>er</Text>, strong
				<Text style={styles.txtRed}>er</Text>, etc) quando o adjetivo for
				curto (até duas sílabas), e também pode ser a palavra{" "}
				<Text style={styles.txtRed}>more</Text> quando o adjetivo tiver três
				ou mais sílabas. Te liga nos exemplos abaixo.
			</Text>
			<View style={{ backgroundColor: "#ddd" }}>
				<Text style={styles.txtH2}>Adjetivos de 1 sílaba regulares</Text>
				<Text style={styles.txtExemplos}>
					cold, long, old + <Text style={styles.txtRed}>er</Text> → cold
					<Text style={styles.txtRed}>er</Text>, long
					<Text style={styles.txtRed}>er</Text>, old
					<Text style={styles.txtRed}>er</Text>
				</Text>
				<Text style={styles.txtExemplos}>
					terminados em <Text style={styles.txtBold}>e</Text> (fine, nice,
					rare) + <Text style={styles.txtRed}>r</Text> → fin
					<Text style={styles.txtRed}>er</Text>, nic
					<Text style={styles.txtRed}>er</Text>, rar
					<Text style={styles.txtRed}>er</Text>
				</Text>
				<Text style={styles.txtExemplos}>
					<Text style={styles.txtBold}>CVC</Text>, isto é, final em
					Consoante-Vogal-Consoante (big, hot, thin), dobra-se a última
					consoante e, só depois, adiciona-se o sufixo
					<Text style={styles.txtRed}> er</Text> → big
					<Text style={styles.txtRed}>ger</Text>, hot
					<Text style={styles.txtRed}>ter</Text>, thin
					<Text style={styles.txtRed}>ner</Text>
				</Text>
			</View>
			<View style={{ backgroundColor: "#d1d1d1" }}>
				<Text style={styles.txtH2}>Adjetivos de 1 sílaba irregulares</Text>
				<Text style={styles.txtExemplos}>
					good → <Text style={styles.txtRed}>better</Text>
				</Text>
				<Text style={styles.txtExemplos}>
					bad → <Text style={styles.txtRed}>worse</Text>
				</Text>
				<Text style={styles.txtExemplos}>
					far → <Text style={styles.txtRed}>farther/further</Text>
				</Text>
				<Text style={styles.txtExemplos}>
					little → <Text style={styles.txtRed}>less</Text>
				</Text>
				<Text style={styles.txtExemplos}>
					much → <Text style={styles.txtRed}>more</Text>
				</Text>
			</View>
			<View style={{ backgroundColor: "#ccc" }}>
				<Text style={styles.txtH2}>Adjetivos de 2 sílabas</Text>
				<Text style={styles.txtExemplos}>
					clever, narrow, quiet + <Text style={styles.txtRed}>er</Text> →
					clever
					<Text style={styles.txtRed}>er</Text>, narrow
					<Text style={styles.txtRed}>er</Text>, quiet
					<Text style={styles.txtRed}>er</Text>
				</Text>
				<Text style={styles.txtExemplos}>
					terminados em <Text style={styles.txtBold}>y</Text> e antes dele
					tiver uma consoante, deve-se trocá-lo por
					<Text style={styles.txtBold}> i</Text> e só depois adicionar{" "}
					<Text style={styles.txtRed}>er</Text> (busy, easy, happy) → bus
					<Text style={styles.txtRed}>ier</Text>, eas
					<Text style={styles.txtRed}>ier</Text>, happ
					<Text style={styles.txtRed}>ier</Text>
				</Text>
			</View>
			<View style={{ backgroundColor: "#c1c1c1" }}>
				<Text style={styles.txtH2}>Adjetivos de 3 ou mais sílabas</Text>
				<Text style={styles.txtExemplos}>
					<Text style={styles.txtRed}>more</Text> + useful, interesting,
					complicated → <Text style={styles.txtRed}>more</Text> useful,{" "}
					<Text style={styles.txtRed}>more</Text> interesting,{" "}
					<Text style={styles.txtRed}>more</Text> complicated
				</Text>
			</View>
			<View style={{ backgroundColor: "#bbb" }}>
				<Text style={styles.txtH2}>Observações</Text>
				<Text style={styles.txtExemplos}>
					se quiseres comparar para menos, no lugar de{" "}
					<Text style={styles.txtRed}>more</Text>, usa{" "}
					<Text style={styles.txtRed}>less</Text> (
					<Text style={styles.txtRed}>less</Text> complicated); e em vez do
					sufixo <Text style={styles.txtRed}>er</Text>, usa
					<Text style={styles.txtRed}> not as/so ... as</Text> (
					<Text style={styles.txtRed}> not as </Text>
					quiet <Text style={styles.txtRed}> as </Text>)
				</Text>
				<Text style={styles.txtExemplos}>
					<Text style={styles.txtRed}>than</Text> →{" "}
					<Text style={styles.txtBold}>do que</Text>. Ex.: Spider-Man is
					strong<Text style={styles.txtRed}>er than</Text> any other one.
					(Homem-Aranha é mais forte{" "}
					<Text style={styles.txtBold}>do que</Text> qualquer outro.)
				</Text>
				<Text style={styles.txtExemplos}>
					<Text style={styles.txtRed}>as/so ... as</Text> →{" "}
					<Text style={styles.txtBold}>tão ... quanto</Text>. Ex.:{" "}
					<Text style={styles.txtRed}>as</Text> big{" "}
					<Text style={styles.txtRed}> as</Text> (tão grande quanto)
				</Text>
				<Text style={styles.txtExemplos}>
					<Text style={styles.txtRed}>hotter and hotter</Text> (cada vez
					mais quente); <Text style={styles.txtRed}>more and more</Text>{" "}
					complicated (cada vez mais complicado)
				</Text>
				<Text style={styles.txtExemplos}>
					<Text style={styles.txtRed}>the</Text> hot
					<Text style={styles.txtRed}>ter</Text> (quanto mais quente);{" "}
					<Text style={styles.txtRed}>the more generous</Text> (quanto mais
					generoso). ATENÇÃO: se essa estrutura (
					<Text style={styles.txtBold}>the + comparativo</Text>) for usada
					duas vezes na mesma frase, na segunda vez, omite-se {""}
					<Text style={styles.txtRed}>quanto</Text> na tradução. Ex.:{" "}
					<Text style={styles.txtRed}>the</Text> cold
					<Text style={styles.txtRed}>er</Text> it is,{" "}
					<Text style={styles.txtRed}>the</Text> laz
					<Text style={styles.txtRed}>ier</Text> I get. (
					<Text style={styles.txtBold}>Quanto mais</Text> quente,{" "}
					<Text style={styles.txtBold}>mais</Text> preguiçoso eu fico.)
				</Text>
			</View>
		</ScrollView>
	);
};

export default AdjectivesComparative;
