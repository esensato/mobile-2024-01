// Cria um componente que recebe como parâmetro gasto e a funcao a ser acionada quando o gasto for removido
// <ItemLista gasto={}/>
// props.gasto
// gasto - gasto a ser exibido

import { Image, Pressable, Text, View } from "react-native";

// onPress - indica qual funcao será acionada para remover o item
export const ItemLista = (props) => {

    const imagemMoeda = require('../assets/moeda.png');

    let estilo = { flexDirection: 'row', borderColor: props.corBorda, borderWidth: 1, padding: 5, margin: 5, backgroundColor: props.corFundo };
    return <Pressable onPress={() => props.onPress(props.gasto)}>
        <View
            style={estilo}>
            <Image source={imagemMoeda} style={{ width: 20, height: 30, flex: 1 }} />
            <Text style={{ flex: 5, padding: 5 }}>{props.gasto.descricao}</Text>
            <Text style={{ flex: 4, padding: 5 }}>{props.gasto.valor}</Text>
        </View>
    </Pressable>;
}