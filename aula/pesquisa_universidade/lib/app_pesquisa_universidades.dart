import 'package:flutter/material.dart';
import 'package:pesquisa_universidade/formulario.dart';
import 'package:pesquisa_universidade/lista.dart';

class AppPesquisaUniversidades extends StatelessWidget {
  @override
  Widget build(BuildContext context) {

    return MaterialApp(
      home: AppPesquisaUniversidadesStateful(),
    );
  }
  
}

class AppPesquisaUniversidadesStateful extends StatefulWidget {
  @override
  State<AppPesquisaUniversidadesStateful> createState() => AppPesquisaUniversidadesState();

}

class AppPesquisaUniversidadesState extends State<AppPesquisaUniversidadesStateful> {

  // função de callback da lista
  void itemSelecionado(String item) {
    print(item);
  }

  // função de callback para quando o usuário clicar em Pesquisar...
  void pesquisar(String pais, String universidade) {
    print(pais);
    print(universidade);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("Pesquisa Universidades"),),
      body: Column(children: [Formulario(pesquisar),
                              Lista(["Banana", "Uva"], itemSelecionado)],
                  ),
    );
  }

}

