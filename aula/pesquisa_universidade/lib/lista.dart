import 'package:flutter/material.dart';

class Lista extends StatelessWidget {

  var itens = [];

  // função de callback acionada quando um item da lista for selecionado
  Function callback;

  Lista(this.itens, this.callback);

  @override
  Widget build(BuildContext context) {
    // constroi uma lista de itens a serem exibidos na tela
    return ListView.builder(
        itemBuilder: (context, id){
          return
            Padding(padding: const EdgeInsets.all(2.0),
            child:  ListTile(
              shape: const RoundedRectangleBorder(borderRadius: BorderRadius.all(Radius.circular(6))),
              key: Key(id.toString()),
              tileColor: Colors.black12,
              title: Text(itens[id]['name']),
              subtitle: Text(itens[id]['web_pages'][0]),
              onTap: (){
                callback(itens[id]);
              },
              trailing: const Icon(Icons.ads_click),
            )
            );
        },
        itemCount: itens.length,
        shrinkWrap: true,
        padding: const EdgeInsets.all(5.0),
    );
  }

}