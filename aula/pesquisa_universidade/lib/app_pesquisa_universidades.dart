import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:pesquisa_universidade/formulario.dart';
import 'package:pesquisa_universidade/lista.dart';
import 'package:http/http.dart' as http;

const String HOST = "universities.hipolabs.com";

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

  var lista_resultado = [];

  // função de callback da lista
  void itemSelecionado(Object item) {
    print(item);
  }

  // função de callback para quando o usuário clicar em Pesquisar...
  void pesquisar(String pais, String universidade) {

    var uri = Uri.http(HOST, "search", {"country": pais, "name": universidade});
    http.get(uri,
        headers: <String, String> {'Content-Type' : 'application/json', 'Accept' : 'application/json'})
        .then((resposta) => {
          if (resposta.statusCode == 200) {

            // Atualiza a lista com o resultado
            setState(() {
              lista_resultado.clear();
              jsonDecode(resposta.body).forEach((item) {
                lista_resultado.add(item);
              });
            })

          }
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("Pesquisa Universidades"),),
      body: Column(children: [Formulario(pesquisar),
                              Expanded(child: Lista(lista_resultado, itemSelecionado))
                              ],
                  ),
    );
  }

}

