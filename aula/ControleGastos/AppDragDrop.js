import { Text, View, StyleSheet, FlatList, TextInput, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';
import DragList, { DragListRenderItemInfo } from 'react-native-draglist';

export default function App() {

  const [descricao, setDescricao] = useState('')
  const [valor, setValor] = useState('')
  const [gastos, addGasto] = useState([])

  const imagemMoeda = require('./assets/moeda.png');

  let teste = () => {
    console.log("Boa noite!")
  }
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
    addGasto(novoGasto);
  }

  //
  const renderItem = (info) => {
    const { item, onDragStart, onDragEnd, isActive } = info;

    return (
      <TouchableOpacity
        key={item.id}
        onPressIn={onDragStart}
        onPressOut={onDragEnd}>
        <View
          style={{ flexDirection: 'row', borderColor: '#BABA', borderWidth: 1, padding: 5, margin: 5 }}>
          <Image source={imagemMoeda} style={{ width: 20, height: 30, flex: 1 }} />
          <Text style={{ flex: 5, padding: 5 }}>{item.descricao}</Text>
          <Text style={{ flex: 4, padding: 5 }}>{item.valor}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  const onReordered = async (fromIndex, toIndex) => {

    console.log(fromIndex, toIndex)
    const copy = [...gastos]; // Don't modify react data in-place
    const removed = copy.splice(fromIndex, 1);

    copy.splice(toIndex, 0, removed[0]); // Now insert at the new pos
    addGasto(copy);
  }


  let addGastoPress = () => {
    let novoGasto = [...gastos, { id: Date.now(), descricao: descricao, valor: valor }];
    addGasto(novoGasto);
    setDescricao('');
    setValor('');

  }

  return <View style={estilos.bloco} onPress={teste} >
    <View style={{ flex: 1 }}>

      <View style={{ flexDirection: 'row' }} onPress={() => removerGasto(item)}>
        <TextInput style={estilos.textoCampo1} placeholder="Digite o Gasto" value={descricao} onChangeText={(txt) => setDescricao(txt)} />
        <TextInput style={estilos.textoCampo2} keyboardType="numeric" placeholder="Informe o Valor" value={valor} onChangeText={(txt) => setValor(txt)} />
      </View>
      <TouchableOpacity style={estilos.botao} onPress={addGastoPress}>
        <Text>Adicionar Gasto</Text>
      </TouchableOpacity>
    </View>

    <View style={{ flex: 4, alignContent: 'flex-start' }}>
      <DragList
        data={gastos}
        keyExtractor={(item) => item.id}
        onReordered={onReordered}
        renderItem={renderItem}
      />
    </View>

  </ View>

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
  texto: {
    color: "#FAFA",
    padding: 5,
    fontSize: 30,
    textAlign: 'center'
  },
  bloco: {
    marginTop: 50,
    borderWidth: 1,
    flex: 1,
    padding: 10,
    margin: 10
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
  textoCampo2: {
    padding: 5,
    marginBottom: 3,
    marginTop: 3,
    borderWidth: 1,
    borderRadius: 6,
    flex: 1
  }

})
