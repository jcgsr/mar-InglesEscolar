import React, { useEffect } from "react";
import { View, Text, ScrollView } from "react-native";

import styles from "../../../assets/style";
// adMob
import { AdMobBanner, setTestDeviceIDAsync } from "expo-ads-admob";
const AdjectivesSuperlative = () => {
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
				O <Text style={styles.txtBold}>Superlativo do Adjetivo</Text> é
				usado para descrever um objeto que está no limite superior ou
				inferior de uma qualidade (<Text style={styles.txtBold}>o</Text>{" "}
				mais alto, <Text style={styles.txtBold}>o</Text> menor,{" "}
				<Text style={styles.txtBold}>a</Text> mais rápida,{" "}
				<Text style={styles.txtBold}>a </Text>
				mais alta). Eles são usados em frases onde alguém/algo é comparado a
				um grupo.
			</Text>
			<View style={{ backgroundColor: "#ddd" }}>
				<Text style={styles.txtH2}>Adjetivos de 1 sílaba regulares</Text>
				<Text style={styles.txtExemplos}>
					cold, long, old + <Text style={styles.txtRed}>est</Text> → cold
					<Text style={styles.txtRed}>est</Text>, long
					<Text style={styles.txtRed}>est</Text>, old
					<Text style={styles.txtRed}>est</Text>
				</Text>
				<Text style={styles.txtExemplos}>
					terminados em <Text style={styles.txtBold}>e</Text> (fine, nice,
					rare) + <Text style={styles.txtRed}>r</Text> → fin
					<Text style={styles.txtRed}>est</Text>, nic
					<Text style={styles.txtRed}>est</Text>, rar
					<Text style={styles.txtRed}>est</Text>
				</Text>
				<Text style={styles.txtExemplos}>
					<Text style={styles.txtBold}>CVC</Text>, isto é, final em
					Consoante-Vogal-Consoante (big, hot, thin), dobra-se a última
					consoante e, só depois, adiciona-se o sufixo
					<Text style={styles.txtRed}> est</Text> → big
					<Text style={styles.txtRed}>gest</Text>, hot
					<Text style={styles.txtRed}>test</Text>, thin
					<Text style={styles.txtRed}>nest</Text>
				</Text>
			</View>
			<View style={{ backgroundColor: "#d1d1d1" }}>
				<Text style={styles.txtH2}>Adjetivos de 1 sílaba irregulares</Text>
				<Text style={styles.txtExemplos}>
					good → <Text style={styles.txtRed}>best</Text>
				</Text>
				<Text style={styles.txtExemplos}>
					bad → <Text style={styles.txtRed}>worst</Text>
				</Text>
				<Text style={styles.txtExemplos}>
					far → <Text style={styles.txtRed}>farthest/furthest</Text>
				</Text>
				<Text style={styles.txtExemplos}>
					little → <Text style={styles.txtRed}>least</Text>
				</Text>
				<Text style={styles.txtExemplos}>
					much → <Text style={styles.txtRed}>most</Text>
				</Text>
			</View>
			<View style={{ backgroundColor: "#ccc" }}>
				<Text style={styles.txtH2}>Adjetivos de 2 sílabas</Text>
				<Text style={styles.txtExemplos}>
					clever, narrow, quiet + <Text style={styles.txtRed}>est</Text> →
					clever
					<Text style={styles.txtRed}>est</Text>, narrow
					<Text style={styles.txtRed}>est</Text>, quiet
					<Text style={styles.txtRed}>est</Text>
				</Text>
				<Text style={styles.txtExemplos}>
					terminados em <Text style={styles.txtBold}>y</Text> e antes dele
					tiver uma consoante, deve-se trocá-lo por
					<Text style={styles.txtBold}> i</Text> e só depois adicionar{" "}
					<Text style={styles.txtRed}>est</Text> (busy, easy, happy) → bus
					<Text style={styles.txtRed}>iest</Text>, eas
					<Text style={styles.txtRed}>iest</Text>, happ
					<Text style={styles.txtRed}>iest</Text>
				</Text>
			</View>
			<View style={{ backgroundColor: "#c1c1c1" }}>
				<Text style={styles.txtH2}>Adjetivos de 3 ou mais sílabas</Text>
				<Text style={styles.txtExemplos}>
					<Text style={styles.txtRed}>the most</Text> + useful,
					interesting, complicated →{" "}
					<Text style={styles.txtRed}>the most</Text> useful,{" "}
					<Text style={styles.txtRed}>the most</Text> interesting,{" "}
					<Text style={styles.txtRed}>the most</Text> complicated
				</Text>
			</View>
			<View style={{ backgroundColor: "#bbb" }}>
				<Text style={styles.txtH2}>Observações</Text>
				<Text style={styles.txtExemplos}>
					se quiseres comparar para menos, no lugar de{" "}
					<Text style={styles.txtRed}>most</Text>, usa{" "}
					<Text style={styles.txtRed}>the least</Text> (
					<Text style={styles.txtRed}>the least</Text> complicated); e em
					vez do sufixo <Text style={styles.txtRed}>est</Text>, usa
					<Text style={styles.txtRed}> the least</Text> (
					<Text style={styles.txtRed}> the least </Text>
					quiet)
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

export default AdjectivesSuperlative;
