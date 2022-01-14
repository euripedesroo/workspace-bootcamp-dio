const alunos = [
    {
        nome: 'Joao',
        nota: 5,
        turma: '18'
    },

    {
        nome: 'Marcos',
        nota: 8,
        turma: '18'
    },

    {
        nome: 'Lucas',
        nota: 9,
        turma: '17'
    },

    {
        nome: 'Pedro',
        nota: 4,
        turma: '12'
    },
];

function alunosAprovados(alunos, media) {
    let aprovados = [];

    for (let i = 0; i < alunos.length; i++) {
        const {nota,nome} = alunos[i];

        if(nota >= media){
            aprovados.push(nome);

        }

    }
    return aprovados;

}

console.log(alunosAprovados(alunos, 5));