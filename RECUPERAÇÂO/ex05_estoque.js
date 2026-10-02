const fs = require('fs');

if (fs.existsSync("materiais.json")) {
    const dados = fs.readFileSync("materiais.json", "utf8");
    const materiais = JSON.parse(dados);

    let quantidadeTotal = 0;
    let valorTotalEstoque = 0;

    console.log("=== ESTOQUE DE MATÉRIA-PRIMA ===");

    materiais.forEach((material) => {
        const valorEstoque =
            material.quantidade * material.valorUnitario;

        quantidadeTotal += material.quantidade;
        valorTotalEstoque += valorEstoque;

        console.log(`\n${material.descricao}`);
        console.log(`Quantidade: ${material.quantidade}`);
        console.log(
            `Valor unitário: R$ ${material.valorUnitario.toFixed(2)}`
        );
        console.log(
            `Valor em estoque: R$ ${valorEstoque.toFixed(2)}`
        );
    });

    console.log("\n=== RESUMO ===");
    console.log(`Tipos de materiais: ${materiais.length}`);
    console.log(`Quantidade total de unidades: ${quantidadeTotal}`);
    console.log(
        `Valor total do estoque: R$ ${valorTotalEstoque.toFixed(2)}`
    );

} else {
    console.log("O arquivo materiais.json não existe.");
}
