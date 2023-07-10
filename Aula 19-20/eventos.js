let campoTexto = document.getElementById("nome");
let inputBotao = document.getElementById("botao");
let paragrafo1 = document.getElementById("primeiroParagrafo");
let div = document.getElementById("minhaDiv");

let lista = [];
let element;
function adicionar() {
  lista.push(campoTexto.value);

  element = document.createElement("p");
  element.innerText = campoTexto.value;
  div.appendChild(element);
}
