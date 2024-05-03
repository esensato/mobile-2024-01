import { View, FlatList } from "react-native"
import { ItemLista } from "./ItemLista"

// Exibe a lista de gastos
// Parametros:
// gastos - array contendo a lista dos gastos
// onPress - função callback acionada quando o usuário clicar no item da lista
export const ListaGasto = (props) => {

    return <View style={{ flex: 4, alignContent: 'flex-start' }}>
        <FlatList data={props.gastos}
            renderItem={({ item }) => <ItemLista navigate={props.navigate} gasto={item} corBorda={props.corBorda} corFundo={props.corFundo} onPress={() => props.onPress(item)} />}
            keyExtractor={item => item.id} />
    </View>
}