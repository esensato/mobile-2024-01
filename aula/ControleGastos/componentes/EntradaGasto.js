import { useState } from "react"
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"

// Cria o formulário para a entrada de um gasto
// Parâmetros:
// total - contém o valor total de gastos até o momento
// onPress - função callback acionada quando o usuário clicar no botão de adicionar gasto
export const EntradaGasto = (props) => {

    const [descricao, setDescricao] = useState('')
    const [valor, setValor] = useState('')

    const limparCampos = () => {

        setDescricao('');
        setValor('');
        // chama a função callback definda no parametro (props) onPress
        props.onPress(descricao, valor);
    }

    return <View style={{ flex: 1 }}>

        <View style={{ flexDirection: 'row' }}>
            <TextInput style={estilos.textoCampo1} placeholder="Digite o Gasto" value={descricao} onChangeText={(txt) => setDescricao(txt)} />
            <TextInput style={estilos.textoCampo2} keyboardType="numeric" placeholder="Informe o Valor" value={valor} onChangeText={(txt) => setValor(txt)} />
        </View>

        <View >
            <Text style={estilos.total}>Total Gasto: {props.total}</Text>
        </View>

        <TouchableOpacity style={estilos.botao} onPress={limparCampos}>
            <Text>Adicionar Gasto</Text>
        </TouchableOpacity>

    </View>

}

const estilos = StyleSheet.create({
    botao: {
        backgroundColor: "#CACA",
        color: "#FF",
        height: 40,
        alignItems: 'center',
        padding: 10,
        marginTop: 5

    },
    textoCampo1: {
        padding: 5,
        marginBottom: 3,
        marginTop: 3,
        borderWidth: 1,
        borderRadius: 6,
        flex: 2,
        marginRight: 3
    },
    total: {
        padding: 5,
        marginBottom: 3,
        marginTop: 3,
        borderWidth: 1,
        borderRadius: 6,
        marginRight: 3
    },
    textoCampo2: {
        padding: 5,
        marginBottom: 3,
        marginTop: 3,
        borderWidth: 1,
        borderRadius: 6,
        flex: 1
    }

})
