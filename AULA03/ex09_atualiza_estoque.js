const fs = require('fs');
const readline = require('readline-sync');

try {
    // Ler arquivo
    const dados = fs.readFileSync("materiais.json", "utf8");

    // Converter JSON para array
    const materiais = JSON.parse(dados);

    // Solicitar código
    const codigo = Number(
        readline.question("Informe o código do material: ")
    );

    // Localizar material
    const material = materiais.find(
        (item) => item.codigo === codigo
    );

    if (!material) {
        console.log("Material não encontrado.");
        process.exit();
    }

    console.log(`\nMaterial: ${material.descricao}`);
    console.log(`Quantidade atual: ${material.quantidade}`);

    // Solicitar nova quantidade
    const novaQuantidade = Number(
        readline.question("Informe a nova quantidade: ")
    );

    if (isNaN(novaQuantidade) || novaQuantidade < 0) {
        console.log("Quantidade inválida.");
        process.exit();
    }

    // Criar backup antes da alteração
    fs.writeFileSync(
        "materiais_backup.json",
        JSON.stringify(materiais, null, 2)
    );

    // Alterar objeto
    material.quantidade = novaQuantidade;

    // Gravar arquivo atualizado
    fs.writeFileSync(
        "materiais.json",
        JSON.stringify(materiais, null, 2)
    );

    console.log("\nEstoque atualizado com sucesso!");
    console.log(`Nova quantidade: ${material.quantidade}`);

} catch (erro) {
    console.log("Erro ao atualizar o estoque:");
    console.log(erro.message);
}
