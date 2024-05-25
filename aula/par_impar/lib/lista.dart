import 'package:flutter/material.dart';

// Uma lista dos jogadores que já apostaram deve ser exibida
// O jogador seleciona qual será o seu oponente na lista
class Lista extends StatelessWidget {

  // funcao para trocar de tela
  Function callback;

  Lista(this.callback);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Lista'),),
      body: TextButton(child: Text('Tela Resultado'), onPressed: () => callback(3)),
    );
  }

}