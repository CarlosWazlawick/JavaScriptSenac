// Valores de nome de usuário e senha salvos
const loginSalvo = "user123";
const senhaSalva = "senha456";

// Solicita ao usuário o nome de usuário e a senha
const loginDigitado = prompt("Digite o nome de usuário: ");
const senhaDigitada = prompt("Digite a senha: ");

// Verifica se o nome de usuário e a senha digitados correspondem aos valores salvos
if (loginDigitado === loginSalvo && senhaDigitada === senhaSalva) {
    // Se correspondem, exibe um alerta de "Login bem-sucedido"
    alert("Login bem-sucedido.");
} else {
    // Se não correspondem, exibe um alerta de "Login ou senha inválidos"
    alert("Login ou senha inválidos. Tente novamente.");
}
