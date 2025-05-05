//variaveis e constantes
const nome = "Seu nome";
const profissao = "Estudante de JavaScript";

//função que exibir o cartão (estrutura sequencial + concatenação + lógica de programação)

function mostrarCartao() {
    document.getElementById('nome').innerText = "Nome: " +nome;
    document.getElementById('profissao').innerText = "Profissão: " + profissao;

    document.getElementById('cartao').classList.remove('escondido');
}