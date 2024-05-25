import 'package:flutter/material.dart';

// As apostas são comparadas e o resultado exibido
class Resultado extends StatelessWidget {

  // funcao para trocar de tela
  Function callback;

  Resultado(this.callback);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Resultado'),),
      body: TextButton(child: Text('Nova Aposta'), onPressed: () => callback(1)),
    );
  }

}