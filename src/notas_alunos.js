const alunos = [
    {nome: 'Alice', nota: 8},
    {nome: 'João', nota: 5},
    {nome: 'Marcos', nota: 4.5},
    {nome: 'Barbara', nota: 10},
    {nome: 'Debora', nota: 9.5}
];

const alunosAprovados = alunos.filter(alunos => alunos.nota >= 6);
console.log(alunosAprovados);