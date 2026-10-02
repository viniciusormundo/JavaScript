const fs = require('fs');

const equipamentos = [
    {
        codigo: 101,
        nome: "Torno CNC",
        setor: "Usinagem",
        operacional: true
    },
    {
        codigo: 102,
        nome: "Prensa 100T",
        setor: "Estamparia",
        operacional: false
    },
    {
        codigo: 103,
        nome: "Furadeira Industrial",
        setor: "Montagem",
        operacional: true
    }
];

const json = JSON.stringify(equipamentos, null, 2);

fs.writeFileSync("equipamentos.json", json);

console.log("Cadastro de equipamentos salvo com sucesso!");
