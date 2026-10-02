const fs = require('fs');
const readline = require('readline-sync');

const dados = fs.readFileSync("funcionarios.json", "utf8");
const funcionarios = JSON.parse(dados);

const matricula = Number(
    readline.question("Informe a matrícula: ")
);

let funcionarioEncontrado = null;

funcionarios.forEach((funcionario) => {
    if (funcionario.matricula === matricula) {
        funcionarioEncontrado = funcionario;
    }
});

if (funcionarioEncontrado) {
    console.log("\nFuncionário encontrado!");
    console.log(`Nome: ${funcionarioEncontrado.nome}`);
    console.log(`Setor: ${funcionarioEncontrado.setor}`);
    console.log(`Cargo: ${funcionarioEncontrado.cargo}`);
} else {
    console.log("\nFuncionário não encontrado.");
}
