import 'package:flutter/material.dart';

void main() {

  // executa como uma aplicação Flutter
  runApp(ContadorTela());

}

class ContadorTela extends StatelessWidget {

  @override
  Widget build(BuildContext context) {

    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: ContadorDinamico()
    );

  }

}

class ContadorDinamico extends StatefulWidget {
  @override
  State<ContadorDinamico> createState() => ContadorState();
}

class ContadorState extends State<ContadorDinamico> {

  var contador = 0;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.amber,
      appBar: AppBar(
        backgroundColor: Colors.black38,
        title: const Text("Contador", style: TextStyle(color: Colors.white),),
      ),
      body: Center(child: painel()),
      floatingActionButton: FloatingActionButton(onPressed: (){

        setState(() {
          contador = 0;
        });

        print(contador);
      },
        backgroundColor: Colors.black38,
        foregroundColor: Colors.white,
        child: const Text("0", style: TextStyle(fontSize: 30)),
      ),
      bottomNavigationBar: const BottomAppBar(color: Colors.black38,
        child: Text("Exemplo app flutter", style: TextStyle(color: Colors.white) ),
      ),
    );
  }

  Widget painel() {

    return Row(mainAxisAlignment: MainAxisAlignment.center,
      children: [
      IconButton(onPressed: (){
        setState(() {
          ++contador;
        });
      }, icon: const Icon(Icons.arrow_circle_up, size: 40,)),
      Text("$contador", style: const TextStyle(color: Colors.white, fontSize: 30),),
      IconButton(onPressed: (){
        setState(() {
          --contador;
        });
      }, icon: const Icon(Icons.arrow_circle_down, size: 40,)),
    ],
    );
  }

}

