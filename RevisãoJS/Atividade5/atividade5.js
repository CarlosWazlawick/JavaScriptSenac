// Solicita ao usuário as notas e pesos, convertendo-os em números
const nota1 = Number(prompt("Insira a primeira nota: "));
const peso1 = Number(prompt("Insira o peso da primeira nota: "));
const nota2 = Number(prompt("Insira a segunda nota: "));
const peso2 = Number(prompt("Insira o peso da segunda nota: "));
const nota3 = Number(prompt("Insira a terceira nota: "));
const peso3 = Number(prompt("Insira o peso da terceira nota: "));

// Calcula a média ponderada usando a fórmula
const mediaPonderada = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / (peso1 + peso2 + peso3);

// Exibe a média ponderada com duas casas decimais
alert(`A média ponderada é ${mediaPonderada.toFixed(2)}`);
