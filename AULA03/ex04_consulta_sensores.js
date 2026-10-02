const fs = require('fs');

if (fs.existsSync("monitoramento.json")) {
    const dados = fs.readFileSync("monitoramento.json", "utf8");
    const sensores = JSON.parse(dados);

    console.log("=== TODOS OS SENSORES ===");

    sensores.forEach((sensor) => {
        console.log(`Código: ${sensor.codigo}`);
        console.log(`Tipo: ${sensor.tipo}`);
        console.log(`Valor: ${sensor.valor} ${sensor.unidade}`);
        console.log(`Status: ${sensor.status}`);
        console.log("-------------------------");
    });

    console.log("\n=== SENSORES EM ALERTA ===");

    let totalAlerta = 0;

    sensores.forEach((sensor) => {
        if (sensor.status === "Alerta") {
            console.log(
                `Código: ${sensor.codigo} - ${sensor.tipo} - ${sensor.valor} ${sensor.unidade}`
            );

            totalAlerta++;
        }
    });

    console.log(`\nTotal de sensores em alerta: ${totalAlerta}`);

} else {
    console.log("O arquivo monitoramento.json não existe.");
}
