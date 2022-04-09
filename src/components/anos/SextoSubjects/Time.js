import { View, Text, ScrollView, Image } from "react-native";
import React from "react";

import styles from "../../../assets/style";

const Time = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.img}
          source={require("../../../../assets/clock.jpg")}
        />
        <Text style={styles.txtH2}>Palavras Essenciais</Text>
        <View style={styles.txtBodyExemplos}>
          <Text style={styles.txtExemplos}>
            a) <Text style={styles.txtBold}>to</Text> (para)
          </Text>

          <Text style={styles.txtExemplos}>
            b) <Text style={styles.txtBold}>past/after</Text> (depois de/das,
            "passado")
          </Text>
          <Text style={styles.txtExemplos}>
            c) <Text style={styles.txtBold}>before</Text> (antes de/das)
          </Text>
          <Text style={styles.txtExemplos}>
            d) <Text style={styles.txtBold}>o'clock</Text> (em ponto)
          </Text>
          <Text style={styles.txtExemplos}>
            e) <Text style={styles.txtBold}>a quarter</Text> (15 minutos, "um
            quarto de uma hora")
          </Text>
          <Text style={styles.txtExemplos}>
            f) <Text style={styles.txtBold}>half</Text> (30 minutos, "metade de
            uma hora")
          </Text>
          <Text style={styles.txtExemplos}>
            g) <Text style={styles.txtBold}>a.m./AM</Text> ("antes do meio-dia")
          </Text>
          <Text style={styles.txtExemplos}>
            h) <Text style={styles.txtBold}>p.m./PM</Text> ("depois do
            meio-dia")
          </Text>
          <Text style={styles.txtExemplos}>
            i) <Text style={styles.txtBold}>it is/it's</Text> (é, são)
          </Text>
          <Text style={styles.txtExemplos}>
            j) <Text style={styles.txtBold}>midday/noon</Text> (meio-dia)
          </Text>
          <Text style={styles.txtExemplos}>
            k) <Text style={styles.txtBold}>midnight</Text> (meia-noite)
          </Text>
          <Text style={styles.txtExemplos}>
            l) <Text style={styles.txtBold}>at</Text> (à/às)
          </Text>
          <Text style={styles.txtExemplos}>
            m) <Text style={styles.txtBold}>oh</Text> (0 entre 1 e 9)
          </Text>

          <Text style={styles.txtH2}>Exemplos</Text>
          <Text style={styles.txtH3}>
            Informando das 08 horas até às 09 horas.
          </Text>
          <Text style={styles.txtExemplos}>
            <Text style={styles.txtBold}>08:00</Text> - eight o'clock (08 em
            ponto)
          </Text>

          <Text style={styles.txtExemplos}>
            <Text style={styles.txtBold}>08:08</Text> - eight past/after eight
            ou eight (oh) eight
          </Text>
          <Text style={styles.txtExemplos}>
            <Text style={styles.txtBold}>08:10</Text> - ten past/after eight ou
            eight ten
          </Text>
          <Text style={styles.txtExemplos}>
            <Text style={styles.txtBold}>08:12</Text> - twelve past/after eight
            ou eight twelve
          </Text>
          <Text style={styles.txtExemplos}>
            <Text style={styles.txtBold}>08:15</Text> - a quarter past/after
            eight ou eight fifteen
          </Text>
          <Text style={styles.txtExemplos}>
            <Text style={styles.txtBold}>08:18</Text> - eighteen past/after
            eight ou eight eighteen
          </Text>
          <Text style={styles.txtExemplos}>
            <Text style={styles.txtBold}>08:20</Text> - twenty past/after eight
            ou eight twenty
          </Text>
          <Text style={styles.txtExemplos}>
            <Text style={styles.txtBold}>08:28</Text> - twenty-eight past/after
            eight ou eight twenty-eight
          </Text>
          <Text style={styles.txtExemplos}>
            <Text style={styles.txtBold}>08:30</Text> - half past eight ou eight
            thirty
          </Text>
          <Text style={styles.txtExemplos}>
            <Text style={styles.txtBold}>08:38</Text> - twenty-two to nine ou
            eight thirty-eight
          </Text>
          <Text style={styles.txtExemplos}>
            <Text style={styles.txtBold}>08:45</Text> - a quarter to nine ou
            eight forty-five
          </Text>
          <Text style={styles.txtExemplos}>
            <Text style={styles.txtBold}>08:50</Text> - ten to nine ou eight
            fifty
          </Text>
          <Text style={styles.txtExemplos}>
            <Text style={styles.txtBold}>08:58</Text> - two to nine ou eight
            fifty-eight
          </Text>
          <Text style={styles.txtExemplos}>
            <Text style={styles.txtBold}>09:00</Text> - nine o'clock
          </Text>
        </View>
        <Text style={styles.txtHR} />
        <Text style={styles.txtH2}>Dicas E Observações</Text>
        <View style={styles.txtBodyExemplos}>
          <Text style={styles.txtExemplos}>
            i) do primeiro minuto até 29 (08:01 até 08:29), usa-se{" "}
            <Text style={styles.txtBold}>past/after</Text> para dizer que já se
            passaram n minutos.
          </Text>

          <Text style={styles.txtExemplos}>
            ii) do minuto 31 até 59 (08:31 até 08:59), usa-se{" "}
            <Text style={styles.txtBold}>to</Text> para dizer que faltam n
            minutos para o próxima hora.
          </Text>
          <Text style={styles.txtExemplos}>
            iii) da hora exata até 30 minutos (de 08:00 até 08:30), a referência
            é a própria hora ao se utilizar{" "}
            <Text style={styles.txtBold}>past/after</Text>. Só ver os exemplos
            acima: a hora em questão (08h) sempre está presente.
          </Text>
          <Text style={styles.txtExemplos}>
            iv) dos 31 minutos em diante (08:31), a referência é a hora seguinte
            caso se utilize <Text style={styles.txtBold}>to</Text>. Só ver os
            exemplos acima: a hora seguinte (09h) sempre está presente.
          </Text>
          <Text style={styles.txtExemplos}>
            v) basta usar <Text style={styles.txtBold}>a.m.</Text> quando for
            madrugada/manhã e <Text style={styles.txtBold}>p.m.</Text> quando
            for tarde/noite. Ex.: 03:08 a.m. (03:08 da madrugada). 03:08 p.m.
            (03:08 da tarde).
          </Text>
          <Text style={styles.txtExemplos}>vi) 12 p.m. = meio-dia.</Text>
          <Text style={styles.txtExemplos}>vii) 12 a.m. = meia-noite.</Text>
          <Text style={styles.txtExemplos}>
            viii) <Text style={styles.txtBold}>oh</Text> equivale a 0 do minuto
            1 até 09 (08:01 até 08:09).
          </Text>
          <Text style={styles.txtExemplos}>
            ix) <Text style={styles.txtBold}>o'clock</Text> só é usado de 1 até
            12; caso se use o sistema de 24 horas, as expressões 13 o'clock, 14
            o'clock... não existem.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Time;
