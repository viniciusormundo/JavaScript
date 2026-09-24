// ☐ Criar um array vazio.
// ☐ Usar um laço para solicitar 5 nomes.
// ☐ Usar push() dentro do laço de cadastro.
// ☐ Depois do cadastro, criar outro laço para percorrer o array.
// ☐ Usar length no segundo laço.
// ☐ Exibir no formato: 1 - Nome, 2 - Nome, etc.

const entrada = require('readline-sync');

const operadores = [];

for(i = 0; i < 5; i++){
    const nome = entrada.question(`Digite o nome do operador ${i+1}: `)
    operadores.push(nome);
}

for (let i = 0; i < operadores.length ; i++){
    console.log(`${i + 1} - ${operadores[i]}`)
}