const entrada = require('readline-sync');

const peso = entrada.questionFloat('\ndigite qual o peso da peca: ');
if (peso >= 95 && peso <= 105){
    console.log("\npeca aprovada");
}else{
    console.log ("\npeca reprovada");
};