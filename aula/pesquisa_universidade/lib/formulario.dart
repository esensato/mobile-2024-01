import 'package:flutter/material.dart';

class Formulario extends StatelessWidget {

  Function callback;

  Formulario(this.callback);

  @override
  Widget build(BuildContext context) {
    final formKey = GlobalKey<FormState>();

    final pais = TextEditingController();
    final universidade = TextEditingController();

    return Form(
        key: formKey,
        child:  Column(
        children: <Widget>[
          Padding(padding: const EdgeInsets.all(5.0),
                  child:  TextFormField(controller: pais, decoration: const InputDecoration(border:  OutlineInputBorder(), labelText: "País"),),)
          ,
          Padding(padding: const EdgeInsets.all(5.0),
                  child:  TextFormField(controller: universidade, decoration: const InputDecoration(border:  OutlineInputBorder(), labelText: "Universidade"),),)
          ,
          ElevatedButton(child: const Text('Pesquisar'), onPressed: () {

              callback(pais.text, universidade.text);
          }),
        ],
    )
    );
  }

}