let item = document.querySelector("item");
h2 = document.querySelector("h2");

Input.addEventListener("keyup", display);

function display() {
  localStorage.setItem("value", input.value);
  h2.innerHtml = localStorage.getItem("value");
}

/*
let campoNumero1 = document.getElementById("texto")
let inputBotao = document.getElementById("botao")
let inputBotao2 = document.getElementById("botao2")

let paragrafo = document.getElementById("primeiroParagrafo")

let lista = []
function adicionar(){
   lista.push(campoNumero1.value)
   localStorage.setItem("lista", JSON.stringify(lista))
}

function visualizar(){
   alert(localStorage.getItem("lista"))
} */