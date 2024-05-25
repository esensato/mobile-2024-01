import 'package:flutter/material.dart';
import 'package:par_impar/aposta.dart';
import 'package:par_impar/cadastro.dart';
import 'package:par_impar/lista.dart';
import 'package:par_impar/resultado.dart';

void main() {
  runApp(ParImpar());
}

class ParImpar extends StatefulWidget {
  @override
  State<ParImpar> createState() => ParImparState();
}

class ParImparState extends State<ParImpar> {

  // controla qual a tela deve ser exibida:
  // 0 - cadastro
  // 1 - aposta
  // 2 - lista
  // 3 - resultado
  var telaAtual = 0;

  var jogador = "";

  // funcao passada como parametro para a troca de tela
  void trocaTela(int idNovaTela) {
    setState(() {
      telaAtual = idNovaTela;
    });
  }

  // funcao para o cadastro do jogador
  void cadastro(String nome) {
    jogador = nome;
    trocaTela(1);
  }

  // retorna a tela correspondente
  Widget exibirTela() {
    if (telaAtual == 0) { return Cadastro(cadastro); }
    else  if (telaAtual == 1) { return Aposta(trocaTela, jogador); }
    else if (telaAtual == 2) { return Lista(trocaTela); }
    else { return Resultado(trocaTela); }
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Par ou Ímpar',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
      ),
      home: exibirTela(),
    );
  }

}