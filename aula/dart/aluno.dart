// Cria um enumerador para as turmas
enum Turmas {
  T3AB,T3CD,ND
}

class Aluno {

  String nome = "";
  // Nota é opcional
  double? nota;
  Turmas turma = Turmas.ND;
  // Cria uma lista de valores
  var disciplinas = ["Java", "Microservicos"];
  // Faltas por disciplina
  var faltas = {};
  // _ indica private
  bool _formado = false;
  // Definir get / set
  bool get formado => _formado;

  set formado (bool val) {
    if (nota! > 6.0 && val == true) {
      _formado = true;
    }
  }

  // Não precisa implementar como em Java...
  //Aluno(String nome, double nota, String turma) {
  //  this.nome = nome;
  //}

  // Igual ao construtor acima só que... com menos código!
  Aluno (this.nome, this.nota, this.turma);

  // Segundo construtor
  Aluno.vazio();

  // Terceiro construtor - nota e um parametro opcional (se nao passar, assume 0.0)
  Aluno.semNota(this.nome, this.turma, {this.nota = 0.0});

  String info() {
    // name retorna o valor do enum
    return "Aluno: ${nome}, nota: ${nota}, turma: ${turma.name} - ${disciplinas} - ${faltas} - ${_formado}";
  }

}