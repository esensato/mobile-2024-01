import { useState } from "react"
import { View, StyleSheet } from "react-native"
import { EntradaGasto } from "./EntradaGasto"
import { ListaGasto } from "./ListaGasto"


let totalGastos = 0;

export const TelaPrincipal = (props) => {

    const [gastos, addGasto] = useState([])
    const [total, setTotal] = useState(totalGastos)

    let removerGasto = (item) => {
        console.log('lista completa: ', gastos)
        console.log('id removido: ', item.id)
        // [A, B, C] => ...[A, B, C] = A, B, C
        let novoGasto = [...gastos];
        gastos.forEach((gasto, idx) => {
            if (gasto.id === item.id) {
                let removido = novoGasto.splice(idx, 1);
                console.log("Removido: ", idx, removido)
            }
        })
        totalGastos = totalGastos - parseFloat(item.valor);
        setTotal(totalGastos);
        addGasto(novoGasto);
    }

    let addGastoPress = (descricao, valor) => {
        let novoGasto = [...gastos, { id: Date.now(), descricao: descricao, valor: valor }];
        totalGastos = totalGastos + parseFloat(valor);
        setTotal(totalGastos);
        addGasto(novoGasto);
    }

    return <View style={estilos.bloco} >

        <EntradaGasto onPress={addGastoPress} total={total} />
        <ListaGasto onPress={removerGasto} gastos={gastos} corFundo="#AA" corBorda="#FAFA" />

    </ View>

}

const estilos = StyleSheet.create({
    bloco: {
        marginTop: 50,
        borderWidth: 1,
        flex: 1,
        padding: 10,
        margin: 10
    }
})