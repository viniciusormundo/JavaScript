// O programa deve:
// ☐ Solicitar a temperatura pelo terminal.
// ☐ Até 60 °C: exibir NORMAL.
// ☐ De 61 °C até 80 °C: exibir ATENÇÃO.
// ☐ Acima de 80 °C: exibir CRÍTICA.
// ☐ Exibir também a temperatura informada.
// ☐ Testar obrigatoriamente com 60, 61, 80 e 81 °C.

const entrada = require('readline-sync');
const temperatura = entrada.questionFloat("Digite a temperatura: ");

if (temperatura <= 60){
    console.log(`A temperatura de ${temperatura} esta NORMAL`);
} else if (temperatura <= 80){
    console.log(`A temperatura ${temperatura} ATENÇÃO `);
}else{
    console.log(`A temperatura ${temperatura} esta CRITICA`);
};
