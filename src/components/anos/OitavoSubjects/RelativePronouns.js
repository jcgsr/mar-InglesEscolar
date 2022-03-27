import React from "react";
import { Text, View, ScrollView } from "react-native";

import styles from "../../../assets/style";

const RelativePronouns = () => {
	return (
		<ScrollView>
			<Text style={styles.txtBody}>
				Os <Text style={styles.txtBold}>Pronomes Relativos</Text> são usados
				para introduzir orações relativas. Essas orações nos dão informações
				adicionais sobre pessoas e coisas. Ex.: Peter Parker,{" "}
				<Text style={styles.txtBold}>que</Text> é o Homem-Aranha, mora no
				Queens. Os Pronomes Relativos podem exercer a função de{" "}
				<Text style={styles.txtBold}>sujeito</Text> ou{" "}
				<Text style={styles.txtBold}>objeto</Text> do verbo, além de{" "}
				<Text style={styles.txtBold}>posse</Text>. Confere a tabela abaixo
				para saber quais são, seus usos e traduções.
			</Text>
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
					<Text style={styles.txtCol}>SUJEITO</Text>
					<Text style={styles.txtCol}>who - que (apenas pessoas)</Text>
					<Text style={styles.txtCol}>
						which - que (apenas animais ou coisas)
					</Text>
					<Text style={styles.txtCol}>
						that - que (pessoas, animais ou coisas)
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
					<Text style={styles.txtCol}>OBJETO</Text>
					<Text style={styles.txtCol}>
						who/whom - que/quem (apenas pessoas)
					</Text>
					<Text style={styles.txtCol}>
						which - que (apenas animais ou coisas)
					</Text>
					<Text style={styles.txtCol}>
						that - que (pessoas, animais ou coisas)
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
					<Text style={styles.txtCol}>POSSE</Text>
					<Text style={styles.txtCol}>
						whose - cujo (pessoas, animais ou coisas)
					</Text>
				</View>
				<View style={styles.txtExemplosBody}>
					<Text style={styles.txtH2}>Observações E Exemplos</Text>
					<Text style={styles.txtExemplos}>
						Não esqueças: <Text style={styles.txtRed}>who</Text> =
						pessoas; <Text style={styles.txtRed}>which</Text> = animais,
						coisas; <Text style={styles.txtRed}>that</Text> = qualquer um!
					</Text>
					<Text style={styles.txtExemplos}>
						Existem dois tipos de orações relativas em inglês:
					</Text>
					<Text style={styles.txtExemplos}>
						1) a que deixa claro de que pessoa/coisa se fala: Stan Lee is
						the man <Text style={styles.txtRed}>who</Text> created
						Spider-Man. (Stan Lee é o homem{" "}
						<Text style={styles.txtRed}>que</Text> criou Homem-Aranha.)
						Nessa oração relativa, <Text style={styles.txtRed}>who</Text>{" "}
						é sujeito porque responde a pergunta "Quem criou?"
					</Text>
					<Text style={styles.txtExemplos}>
						This is the suit <Text style={styles.txtRed}>which</Text>{" "}
						Peter made. (Essa é a roupa{" "}
						<Text style={styles.txtRed}>que</Text> Peter fez.) Nessa
						oração relativa, <Text style={styles.txtRed}>which</Text> é
						objeto porque responde a pergunta "O que foi feito?" Nas duas
						frases acima, pode-se substituir{" "}
						<Text style={styles.txtBold}>who/which</Text> por{" "}
						<Text style={styles.txtRed}>that</Text>: Stan Lee is the man{" "}
						<Text style={styles.txtRed}>that</Text> created Spider-Man.
						This is the suit <Text style={styles.txtRed}>that</Text> Peter
						made.
					</Text>
					<Text style={styles.txtExemplos}>
						<Text style={styles.txtRed}>
							ATENÇÃO: o pronome relativo pode ser omitido se, e somente
							se, for o objeto do verbo. Portanto, "This is the suit
							Peter made." está correta. Nunca pode ser omitido, porém,
							se o pronome for sujeito do verbo como na primera frase.
						</Text>
					</Text>
					<Text style={styles.txtExemplos}>
						<Text style={styles.txtRed}>
							CUIDADO: sendo o pronome relativo o sujeito ou objeto da
							oração relativa, não se repete o sujeito ou objeto da
							mesma: "Stan Lee is the man who he created Spider-Man."
							(errado) "This is the suit which Peter made it." (errado)
						</Text>
					</Text>
					<Text style={styles.txtExemplos}>
						2) para dar mais informações, sempre separadas por{" "}
						<Text style={styles.txtRed}>vírgula (,)</Text>: Stan Lee
						<Text style={styles.txtRed}>, who</Text> created Spider-Man,
						also created X-Men. (Stan Lee
						<Text style={styles.txtRed}>, que</Text> criou o Homem-Aranha,
						também criou os X-Men.)
					</Text>
					<Text style={styles.txtExemplos}>
						Spider-Man had cherry pie
						<Text style={styles.txtRed}>, which</Text> he always enjoys.
						(O Homem-Aranha comeu torta de cereja
						<Text style={styles.txtRed}>, que</Text> ele sempre gosta.)
					</Text>
					<Text style={styles.txtExemplos}>
						<Text style={styles.txtRed}>
							Cuidado: nesse tipo de oração relativa, não se pode
							substituir who/which por that e nem tampouco omiti-los!
							Stan Lee, that created Spider-Man, also created X-Men
							(errado). Spider-Man had cherry pie, he always enjoys.
							(errado)
						</Text>
					</Text>
					<Text style={styles.txtExemplos}>
						<Text style={styles.txtRed}>whose</Text> é a forma possessiva
						de <Text style={styles.txtRed}>who</Text>. A tradução pode ser
						de <Text style={styles.txtRed}>quem/cujo</Text>. Ex.: This is
						Spider-Man, <Text style={styles.txtRed}>whose</Text> nickname
						is Spidey (Esse é o Spider-Man,{" "}
						<Text style={styles.txtRed}>cujo</Text> apelido é Spidey)
					</Text>
					<Text style={styles.txtExemplos}>
						<Text style={styles.txtRed}>whom</Text>, sempre usado com
						pessoas, sempre é o objeto do verbo, portanto, pode-se usar
						tanto <Text style={styles.txtRed}>whom/who</Text> quando o
						pronome relativo for objeto. Ex.: This is Peter,{" "}
						<Text style={styles.txtRed}>whom</Text> Mary Jane fell in love
						with. (Esse é Peter, por{" "}
						<Text style={styles.txtRed}>quem</Text> Mary Jane se
						apaixonou.)
					</Text>
				</View>
			</View>
		</ScrollView>
	);
};

export default RelativePronouns;
