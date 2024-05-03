import { View, StyleSheet, Text, TouchableOpacity } from "react-native"

export const DetalheGasto = (props) => {

    return <View style={estilos.bloco} >

        <View style={estilos.modal}>
            <Text style={estilos.texto_modal}>{props.route.params.descricao}</Text>
            <Text style={estilos.texto_modal}>{props.route.params.valor}</Text>
            <TouchableOpacity style={estilos.botao} onPress={() => props.navigation.goBack()}><Text>Fechar</Text></TouchableOpacity>
        </View>

    </ View>

}

const estilos = StyleSheet.create({
    bloco: {
        marginTop: 10,
        borderWidth: 1,
        flex: 1,
        padding: 10,
        margin: 10
    },
    botao: {
        backgroundColor: "#CACA",
        color: "#FF",
        height: 40,
        alignItems: 'center',
        padding: 10,
        marginTop: 5
    }
})