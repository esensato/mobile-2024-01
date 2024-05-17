// Cria um tipo de dado como função
import 'package:contador_flutter/aluno.dart';

typedef Calculadora(int x, int y);

// implementa uma "variável" do tipo soma
Calculadora somar = (x, y) {
  return x + y;
};

// implementa uma "variável" do tipo subtração
Calculadora subtrair = (x, y) {
  return x - y;
};

int calcular (Calculadora calc, int x, int y) {
  return calc(x, y);
}

// --------- Criacao de classes de objetos ---------

const INSTITUICAO = "ESPM";

// Inicio de toda aplicação Dart
void main() {

  // Dart não existe o "new"
  Aluno a1 = Aluno.vazio();
  a1.nome = "Fulano";
  a1.nota = 9.5;
  a1.turma = Turmas.T3AB;

  a1.formado = true;

  // 3 faltas na disciplina Java e 0 na disciplina Microservicos
  a1.faltas[a1.disciplinas[0]] = 3;
  a1.faltas[a1.disciplinas[1]] = 0;

  // Instancia aluno com construtor
  Aluno a2 = Aluno("Beltrano", 8.5, Turmas.T3CD);
  // Forca o parametro opcional nota com o valor 5.0
  // Aluno a3 = Aluno.semNota("Ciclano", "3XP");
  Aluno a3 = Aluno.semNota("Ciclano", Turmas.T3CD, nota: 5.0);
  a3.disciplinas.add("Dev Mobile");
  a3.formado = true;

  print(a1.info());
  print ("Faltas: ${a1.faltas['Java']}");
  print(a2.info());
  print(a3.info());

  // percorre todos os elementos da lista
  a3.disciplinas.forEach((disciplina) {
    print("Disciplina: ${disciplina}");
  });

  print(somar (10, 10));
  print(subtrair (100, 10));

  print (calcular(somar, 10, 10));

  // null safety - uma variável nunca pode receber um valor nulo (por default)
  //String ganhador = null;

  // Ganhador passa a ser opcional (?) (pode conter nulo)
  String? ganhador = null;
  var premio = "1.000,00";

  // Erro pois o tipo de dados de premio e String
  // premio = 2000;

  print("Mensagem: O ganhador ${ganhador} recebeu o premio de ${premio}");
  //if (ganhador != null)
  print("${ganhador} possui ${ganhador?.length} letras!");

  print (a1 is Aluno);

  double? temperatura = null;

  print(temperatura);

  temperatura ??= 23.5;

  print(temperatura);

  // temperatura ??= 27.8;

  print(temperatura);

}
