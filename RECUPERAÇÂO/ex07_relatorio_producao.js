const fs = require('fs');

const dados = fs.readFileSync("producao.json", "utf8");
const maquinas = JSON.parse(dados);

let maquinasMetaAtingida = 0;

console.log("=== RELATÓRIO DE PRODUÇÃO ===");

maquinas.forEach((maquina) => {
    const percentual =
        (maquina.produzido / maquina.meta) * 100;

    let situacao;

    if (percentual >= 100) {
        situacao = "META ATINGIDA";
        maquinasMetaAtingida++;
    } else if (percentual >= 80) {
        situacao = "ATENÇÃO";
    } else {
        situacao = "ABAIXO DA META";
    }

    console.log(`\nMáquina: ${maquina.maquina}`);
    console.log(`Meta: ${maquina.meta}`);
    console.log(`Produzido: ${maquina.produzido}`);
    console.log(`Desempenho: ${percentual.toFixed(2)}%`);
    console.log(`Situação: ${situacao}`);
});

console.log(
    `\nMáquinas que atingiram a meta: ${maquinasMetaAtingida}`
);
