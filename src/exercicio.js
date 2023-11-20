"use strict";
// Função de multiplicação
function multiplicar(a, b) {
    return a * b;
}
// Função de saudação
function saudacao(nome) {
    return `Olá ${nome}!`;
}
const mensagem = saudacao('Anderson Casimiro');
console.log(mensagem);
const resultadoDaMultiplicacao = multiplicar(10, 10);
console.log(`Resultado da multiplicação: ${resultadoDaMultiplicacao}`);
