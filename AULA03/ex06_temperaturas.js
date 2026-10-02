const fs = require('fs');

try {
    const dados = fs.readFileSync("temperaturas.json", "utf8");

    const temperaturas = JSON.parse(dados);

    temperaturas.forEach((medicao) => {
        if (medicao.temperatura > 350) {
            throw new Error(
                `Temperatura de ${medicao.temperatura}°C excedeu o limite permitido.`
            );
        }

        console.log(
            `Leitura: ${medicao.temperatura}°C - NORMAL`
        );
    });

} catch (erro) {
    console.log("ALARME:");
    console.log(erro.message);
}
