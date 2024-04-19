import { Text, View, StyleSheet, Button, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {
  let label = "Valor: "


  // exemplo de uso do operador spread (...)
  let cores = ['azul', 'verde', 'vermelho']
  let novasCores = [...cores, 'branco']
  console.log(cores);
  console.log(...cores);
  console.log(novasCores);

  novasCores.forEach((item) => console.log("- item = " + item))

  let separaCores = novasCores.map((item) => { if (item === 'verde') return item; else return ''; })
  console.log(separaCores)

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
      <View style={{ marginTop: 5, marginBottom: 5 }}>
        <Button title='Incrementar' onPress={incrementarValor} />
      </View>
      <TouchableOpacity onPress={cadastrarAluno} style={estilos.botao}>
        <Text>Criar Aluno</Text>
      </TouchableOpacity>
    </View>
  </View>
}

const estilos = StyleSheet.create({
  botao: {
    backgroundColor: "#CACA",
    color: "#FF",
    height: 40,
    alignItems: 'center',
    padding: 10

  },
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
