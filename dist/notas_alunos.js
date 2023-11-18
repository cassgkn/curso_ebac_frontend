"use strict";

var alunos = [{
  nome: 'Alice',
  nota: 8
}, {
  nome: 'João',
  nota: 5
}, {
  nome: 'Marcos',
  nota: 4.5
}, {
  nome: 'Barbara',
  nota: 10
}, {
  nome: 'Debora',
  nota: 9.5
}];
var alunosAprovados = alunos.filter(function (alunos) {
  return alunos.nota >= 6;
});
console.log(alunosAprovados);