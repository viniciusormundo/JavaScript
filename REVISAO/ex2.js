// O programa deve:
// ☐ Criar um acumulador iniciado em zero.
// ☐ Usar um laço for para solicitar exatamente 6 valores.
// ☐ Somar cada valor ao acumulador.
// ☐ Ao final, calcular a média.
// ☐ Exibir total e média.
// ☐ Não repetir manualmente seis comandos de entrada.

const entrada = require('readline-sync')

let acumuladora = 0
for(let i = 1; i <= 6; i++){
    const valor = entrada.questionFloat(`Digite o valor da peca ${i}:`);
    acumuladora += valor;
}
media = acumuladora / 6;

console.log(`Total de defeitos: ${acumuladora.toFixed(2)}`);
console.log(`media de defeitos: ${media.toFixed(2)}`);
