const fs = require('fs');
const readline = require('readline-sync');

try {
    // Verificar se o arquivo existe
    if (!fs.existsSync("manutencoes.json")) {
        throw new Error("O arquivo manutencoes.json não existe.");
    }

    // Ler arquivo
    const dados = fs.readFileSync("manutencoes.json", "utf8");

    // Converter JSON
    const maquinas = JSON.parse(dados);

    let totalManutencao = 0;

    console.log("=== RELATÓRIO DE MANUTENÇÃO ===");

    // Listar todas as máquinas
    maquinas.forEach((maquina) => {
        const horasRestantes =
            maquina.limiteManutencao - maquina.horasUso;

        let situacao;

        if (
            horasRestantes <= 0 &&
            !maquina.manutencaoRealizada
        ) {
            situacao = "MANUTENÇÃO NECESSÁRIA";
            totalManutencao++;
        } else {
            situacao = "NORMAL";
        }

        console.log(`\nID: ${maquina.id}`);
        console.log(`Máquina: ${maquina.maquina}`);
        console.log(`Setor: ${maquina.setor}`);
        console.log(`Horas de uso: ${maquina.horasUso}`);
        console.log(
            `Limite de manutenção: ${maquina.limiteManutencao}`
        );
        console.log(`Horas restantes: ${horasRestantes}`);
        console.log(`Situação: ${situacao}`);
    });

    console.log(
        `\nTotal de equipamentos que precisam de manutenção: ${totalManutencao}`
    );

    // Solicitar ID
    const id = Number(
        readline.question("\nInforme o ID da máquina: ")
    );

    // Localizar máquina
    const maquina = maquinas.find(
        (item) => item.id === id
    );

    if (!maquina) {
        console.log("Máquina não encontrada.");
        process.exit();
    }

    console.log(`\nMáquina selecionada: ${maquina.maquina}`);
    console.log(
        `Manutenção realizada atualmente: ${
            maquina.manutencaoRealizada ? "SIM" : "NÃO"
        }`
    );

    const resposta = readline.question(
        "Deseja registrar a manutenção como realizada? (s/n): "
    );

    if (resposta.toLowerCase() === "s") {

        // Criar backup antes de alterar
        fs.writeFileSync(
            "manutencoes_backup.json",
            JSON.stringify(maquinas, null, 2)
        );

        // Alterar registro
        maquina.manutencaoRealizada = true;

        // Salvar arquivo atualizado
        fs.writeFileSync(
            "manutencoes.json",
            JSON.stringify(maquinas, null, 2)
        );

        console.log(
            "\nManutenção registrada com sucesso!"
        );
        console.log(
            "Backup criado em manutencoes_backup.json."
        );

    } else {
        console.log("\nNenhuma alteração foi realizada.");
    }

} catch (erro) {
    console.log("\nERRO:");
    console.log(erro.message);
}
