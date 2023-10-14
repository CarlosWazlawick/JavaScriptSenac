// Solicita um valor em reais ao usuário e o converte em número
const valorReal = Number(prompt("Insira um valor em Reais: "));

// Define uma taxa de câmbio fixa
const taxaCambio = 5.2;

// Calcula o valor em dólares dividindo o valor em reais pela taxa de câmbio
const valorDolares = valorReal / taxaCambio;

// Exibe o valor em dólares com duas casas decimais
alert(`O valor em Dólares é: $${valorDolares.toFixed(2)}`);
