import { Text, View, StyleSheet, Button, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {
  let label = "Valor: "
  //let contador = 0;

  // contador deve ser atualizado na UI
  // portanto, será encapsulado no useState
  // para ler o valor de contador, utilizar a variável contador (read only!!!)
  // para alterar o valor de contador, utilizar a função incrementarContador
  const [contador, incrementarContador] = useState(0);
  const [aluno, alterarDados] = useState({ nome: '', matricula: '' });
  const [nomeAluno, alteraNomeAluno] = useState('');

  //  function incrementarValor() {
  //
  //  }

  let incrementarValor = () => {
    // erro: contador++;
    let novoValor = contador;
    incrementarContador(++novoValor)
    console.log(contador)
  }

  let cadastrarAluno = () => {
    let novoAluno = { nome: nomeAluno, matricula: '123AY' }
    alterarDados(novoAluno);
  }

  let digitarTexto = (texto) => {
    alteraNomeAluno(texto);
  }

  return <View style={estilos.bloco}>
    <View style={{ flex: 3 }}>
      <Text style={estilos.texto}> {label}{contador}</Text >
      <Text style={estilos.texto}> {aluno.nome}</Text >
      <Text style={estilos.texto}> {aluno.matricula}</Text >
    </View>
    <View style={{ flex: 1 }}>
      <TextInput style={estilos.textoCampo} value={nomeAluno} onChangeText={digitarTexto} placeholder="Digite o nome" />
      <Button title='Incrementar' onPress={incrementarValor} />
      <Button title='Aluno' onPress={cadastrarAluno} />
    </View>
  </View>
}

const estilos = StyleSheet.create({
  texto: {
    color: "#FAFA",
    padding: 10,
    fontSize: 30,
    textAlign: 'center'
  },
  bloco: {
    borderWidth: 5,
    flex: 1,
    padding: 10,
    margin: 10
  },
  textoCampo: {
    padding: 30,
    marginBottom: 30,
    borderWidth: 1,
    borderRadius: 6
  }

})
