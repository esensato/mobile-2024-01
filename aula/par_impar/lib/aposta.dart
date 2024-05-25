import 'package:flutter/material.dart';

// O jogador deve informar o valor da aposta, um número (entre 1 e 5) e se deseja par (2) ou ímpar (1);

class Aposta extends StatefulWidget {

  // funcao para trocar de tela
  Function callback;
  var jogador;

  Aposta(this.callback, this.jogador);

  @override
  State<StatefulWidget> createState() => ApostaState(callback, jogador);

}

class ApostaState extends State<Aposta> {

  // funcao para trocar de tela
  Function callback;
  var jogador;
  var dedos = 1;
  var valorAposta = 0;
  var parImpar = 0;

  ApostaState(this.callback, this.jogador);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Aposta $jogador'),),
      body: Column(children: [
      const Text("Escolha o número (1-5)"),
      Slider(label: "$dedos", min: 1, divisions: 5, max: 5, value: dedos.toDouble(), onChanged: (val){
        setState(() {
          dedos = val.toInt();
        });
      }),
        const Text("Valor da aposta"),
        Slider(label: "$valorAposta", min: 0, divisions: 10, max: 100, value: valorAposta.toDouble(), onChanged: (val){
          setState(() {
            valorAposta = val.toInt();
          });
        }),
      Row(children: [
        Radio(value: 2, groupValue: parImpar, onChanged: (int? value) {
          setState(() {
            parImpar = 2;
          });
        },),
        const Text('Par'),
        Radio(value: 1, groupValue: parImpar, onChanged: (int? value) {
          setState(() {
            parImpar = 1;
          });
        },),
        const Text('Impar')
      ],),
        ElevatedButton(child: const Text('Escolher Adversário'), onPressed: () => callback(2)),
      ],
      )

    );
  }

}