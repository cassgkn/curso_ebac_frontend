// Função de multiplicação
function multiplicar(a: number, b: number): number {
    return a * b;
}

// Função de saudação
function saudacao(nome: string): string {
    return `Olá ${nome}!`
}

const mensagem = saudacao('Anderson Casimiro');
console.log(mensagem);

const resultadoDaMultiplicacao = multiplicar(10, 10);
console.log(`Resultado da multiplicação: ${resultadoDaMultiplicacao}`)