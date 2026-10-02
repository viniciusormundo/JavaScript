const fs = require('fs');

if (fs.existsSync("equipamentos.json")) {
    const dados = fs.readFileSync("equipamentos.json", "utf8");

    const equipamentos = JSON.parse(dados);

    equipamentos.forEach((equipamento) => {
        const status = equipamento.operacional
            ? "OPERACIONAL"
            : "PARADA";

        console.log(`Código: ${equipamento.codigo}`);
        console.log(`Equipamento: ${equipamento.nome}`);
        console.log(`Setor: ${equipamento.setor}`);
        console.log(`Status: ${status}`);
        console.log("-------------------------");
    });
} else {
    console.log("O arquivo equipamentos.json não existe.");
}
