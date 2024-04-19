import { Text, View, StyleSheet, FlatList, TextInput, TouchableOpacity, Image, Pressable } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [descricao, setDescricao] = useState('')
  const [valor, setValor] = useState('')
  const [gastos, addGasto] = useState([])

  const imagemMoeda = require('./assets/moeda.png');

  let teste = () => {
    console.log("Boa noite!")
  }
  let removerGasto = (item) => {
    console.log('click')
  }

  let exibeLista = (item) => {
    return <Pressable onPress={() => console.log('ok')}>

      <View onPress={() => removerGasto(item)}
        style={{ flexDirection: 'row', borderColor: '#CACA', borderWidth: 1, padding: 5, margin: 5 }}>
        <Image source={imagemMoeda} style={{ width: 20, height: 30, flex: 1 }} onPress={() => console.log(item.descricao)} />
        <Text style={{ flex: 5, padding: 5 }}>{item.descricao}</Text>
        <Text style={{ flex: 4, padding: 5 }}>{item.valor}</Text>
      </View>
    </Pressable>;
  }

  let addGastoPress = () => {
    let novoGasto = [...gastos, { id: Date.now(), descricao: descricao, valor: valor }];
    addGasto(novoGasto);
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
      <FlatList data={gastos}
        renderItem={({ item, idx }) => exibeLista(item)}
        keyExtractor={item => item.id}
        onPress={() => console.log('click')} />
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
