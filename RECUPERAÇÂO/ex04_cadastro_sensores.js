const fs = require('fs');

const sensores = [
    {
        codigo: 201,
        tipo: "Temperatura",
        valor: 85,
        unidade: "°C",
        status: "Normal"
    },
    {
        codigo: 202,
        tipo: "Pressão",
        valor: 120,
        unidade: "bar",
        status: "Alerta"
    },
    {
        codigo: 203,
        tipo: "Vibração",
        valor: 4.5,
        unidade: "mm/s",
        status: "Normal"
    },
    {
        codigo: 204,
        tipo: "Temperatura",
        valor: 105,
        unidade: "°C",
        status: "Alerta"
    },
    {
        codigo: 205,
        tipo: "Umidade",
        valor: 65,
        unidade: "%",
        status: "Normal"
    }
];

const json = JSON.stringify(sensores, null, 2);

fs.writeFileSync("monitoramento.json", json);

console.log("Dados dos sensores salvos com sucesso!");
