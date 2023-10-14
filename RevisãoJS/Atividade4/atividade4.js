// Quantidade em estoque
const estoque = 30;

// Solicita ao usuário a quantidade desejada de produtos e a converte em número
const quantidadeDesejada = Number(prompt("Insira quantos produtos você deseja comprar: "));

if (quantidadeDesejada <= estoque) {
    // Se a quantidade desejada for menor ou igual ao estoque, o produto está disponível
    alert("Produto disponível. Obrigado pela compra.");
} else {
    // Se a quantidade desejada for maior que o estoque, o produto está indisponível
    alert("Produto indisponível. Não há estoque suficiente.");
}
