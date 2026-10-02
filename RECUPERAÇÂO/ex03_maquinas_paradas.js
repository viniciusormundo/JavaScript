const fs = require('fs');

if (fs.existsSync("equipamentos.json")) {
    const dados = fs.readFileSync("equipamentos.json", "utf8");
    const equipamentos = JSON.parse(dados);

    let totalParadas = 0;

    console.log("=== EQUIPAMENTOS PARADOS ===");

    equipamentos.forEach((equipamento) => {
        if (!equipamento.operacional) {
            console.log(`${equipamento.nome} - ${equipamento.setor}`);
            totalParadas++;
        }
    });

    console.log(`Total de equipamentos parados: ${totalParadas}`);
} else {
    console.log("O arquivo equipamentos.json não existe.");
}
