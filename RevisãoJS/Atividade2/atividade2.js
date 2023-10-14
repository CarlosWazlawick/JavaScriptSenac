// Solicita o peso e a altura ao usuário e os converte em números
const peso = Number(prompt("Insira seu peso em kg: "));
const altura = Number(prompt("Insira sua altura em metros: "));

// Calcula o IMC (Índice de Massa Corporal)
const imc = peso / (altura * altura);

if (imc < 18.5) {
    // Se o IMC for menor que 18.5, o usuário está abaixo do peso
    alert("Você está abaixo do peso");
} else if (imc >= 18.5 && imc < 24.9) {
    // Se o IMC estiver entre 18.5 e 24.9, o usuário está no peso ideal
    alert("Você está no peso ideal");
} else {
    // Se o IMC for maior ou igual a 24.9, o usuário está acima do peso
    alert("Você está acima do peso");
}
