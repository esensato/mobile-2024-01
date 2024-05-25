import 'package:flutter/material.dart';

class Cadastro extends StatelessWidget {

  // funcao para trocar de tela
  Function callback;

  Cadastro(this.callback);

  @override
  Widget build(BuildContext context) {

    final formKey = GlobalKey<FormState>();

    final jogador = TextEditingController();

    return Scaffold(
      appBar: AppBar(title: const Text('Cadastro'),),
      body: Form(
        key: formKey,
        child:  Column(
          children: <Widget>[
            Padding(padding: const EdgeInsets.all(5.0),
              child:  TextFormField(controller: jogador, decoration: const InputDecoration(border:  OutlineInputBorder(), labelText: "Jogador"),),)
            ,
            ElevatedButton(child: const Text('Apostar'), onPressed: () => callback(jogador.text)),
          ],
        )
    )

    );
  }
  
}