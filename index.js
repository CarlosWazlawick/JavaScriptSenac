let nome = prompt("Digite seu nome:");
let anoNascimento = prompt("Insira seu ano de nascimento: ");
let anoAtual = prompt("Insira o ano atual");
let idade = anoAtual - anoNascimento;
let maiorDeIdade = idade >= 18;
let idade2050 = 2050 - anoNascimento;
alert(`Nome: ${nome}`);
alert(`Idade: ${idade} anos`);
alert(`Maior de idade: ${maiorDeIdade}`);
alert(`Idade em 2050: ${idade2050} anos`);

/*
let a = Number(prompt("Insira um valor: "))
let b = Number(prompt("Insira outro valor: "))
alert(a+b)

let result1 = 3+4
let result2 =  (3*5)/2
let result3 = (5-4)*-1
let result4 = 234%5
alert(result1)
alert(result2)
alert(result3)
alert(result4)

let primeiroNumero = 15 
let segundoNumero = 20
alert(primeiroNumero === segundoNumero)
alert(primeiroNumero !== segundoNumero)
alert(primeiroNumero >= segundoNumero)
alert(primeiroNumero <= segundoNumero)

let a = true
let b = false
let c = true
alert(a && b)
alert(b && c)
alert(a && c)

let a = true
let b = false
let c = true
alert(a||b)
alert(b||c)
alert(a||c)
*/