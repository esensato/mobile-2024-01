import { useState, useEffect } from "react"
import { View, StyleSheet, Modal, Text, TouchableOpacity } from "react-native"
import { EntradaGasto } from "./EntradaGasto"
import { ListaGasto } from "./ListaGasto"
import { inserir, listar, excluir } from "./Db";
import axios from 'axios';

let totalGastos = 0;

export const TelaPrincipal = (props) => {

    const [gastos, addGasto] = useState([])
    const [total, setTotal] = useState(totalGastos)
    const [exibirModal, setExibirModal] = useState(false)

    // executa uma unica vez quando a interface é desenhada
    useEffect(() => {

        // lista gastos do endpoint
        axios.get("https://controle-gastos.glitch.me/").then((resp) => {
            console.log(resp.data)
            let novoArray = [];
            resp.data.forEach((gasto, idx) => {
                novoArray.push({ id: 1000 + idx, descricao: gasto.descricao, valor: gasto.valor })
            })
            addGasto(novoArray);
        })

        // lista gastos do banco de dados
        listar()
            .then((rs) => {

                console.log("Gastos BD: ", rs)
                addGasto(...gastos, rs);

            })
            .catch((err) => console.log(err));
    }, []);

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

        excluir(item.id)
            .then((rs) => console.log("Gasto Excluido", rs))
            .catch((err) => console.log(err))

    }

    let addGastoPress = (descricao, valor) => {
        let novoGasto = [...gastos, { id: Date.now(), descricao: descricao, valor: valor }];
        totalGastos = totalGastos + parseFloat(valor);
        setTotal(totalGastos);
        addGasto(novoGasto);

        // insere gasto no banco de dados local (SQLite)
        inserir(descricao, valor)
            .then((rs) => console.log("Gasto Inserido id: ", rs.insertId))
            .catch((err) => console.log(err))

        // enviar gasto para o backend
        axios.post('https://controle-gastos.glitch.me/', { descricao: descricao, valor: valor }).then((resp) => console.log(resp.status));

        if (totalGastos > 1000) {
            console.log('Total maior do que 1000!!!!');
            setExibirModal(true);
        }

    }

    return <View style={estilos.bloco} >

        <EntradaGasto onPress={addGastoPress} total={total} />
        <ListaGasto onPress={removerGasto} gastos={gastos} corFundo="#AA" corBorda="#FAFA" navigate={props.navigation} />

        <Modal transparent={true} visible={exibirModal}>
            <View style={estilos.modal}>
                <Text style={estilos.texto_modal}>Total maior do que 1000!!!</Text>
                <TouchableOpacity onPress={() => setExibirModal(false)} style={estilos.botao}><Text>Fechar</Text></TouchableOpacity>
            </View>
        </Modal>

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
    },
    texto_modal: {
        padding: 20
    },
    modal: {
        borderRadius: 20,
        padding: 30,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 200,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#AAA",
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 10,
    }
})