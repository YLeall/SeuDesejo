const doc = document;

const botaoOpen = doc.querySelector(".botao-enigma");

const botaoRed = doc.querySelector(".btn-danger");
const botaoGreen = doc.querySelector(".btn-success");

const falidoFlix = doc.querySelector(".filme");
const netFlix = doc.querySelector(".flix");

const imagemFundo = doc.querySelector(".fundo");

const falidoBank = doc.querySelector(".banco");
const banco = doc.querySelector(".bank");

const seuDesejo = doc.querySelector(".lamp");
const genio = doc.querySelector(".desejo");

const esperando = doc.querySelector(".resposta");
const proveito = doc.querySelector(".obrigado");

const escolha = doc.querySelector(".esperando");



falidoFlix.addEventListener("click", () => {
  botaoOpen.removeAttribute("disabled");
  escolha.classList.add("esperando--remover");
  imagemFundo.classList.add(".fundo--remover");
  imagemFundo.classList.add("fundo--active");
  botaoRed.classList.add("btn-danger--remover");
  esperando.classList.add("resposta--remover");
  proveito.classList.add("obrigado--active");
  netFlix.classList.add("flix--active");
});


falidoBank.addEventListener("click", () => {
    botaoOpen.removeAttribute("disabled");
    escolha.classList.add("esperando--remover");
    imagemFundo.classList.add(".fundo--remover");
    imagemFundo.classList.add("fundo--active");
    botaoRed.classList.add("btn-danger--remover");
    esperando.classList.add("resposta--remover");
    proveito.classList.add("obrigado--active");
    banco.classList.add("bank--active");
});


seuDesejo.addEventListener("click", () => {
    botaoOpen.removeAttribute("disabled");
    escolha.classList.add("esperando--remover");
    imagemFundo.classList.add(".fundo--remover");
    imagemFundo.classList.add("fundo--active");
    botaoRed.classList.add("btn-danger--remover");
    esperando.classList.add("resposta--remover");
    proveito.classList.add("obrigado--active");
    genio.classList.add("desejo--active");
});