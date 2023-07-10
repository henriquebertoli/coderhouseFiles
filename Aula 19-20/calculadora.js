let campoNumero1 = document.getElementById("numero1");
let campoNumero2 = document.getElementById("numero2");
let inputBotao = document.getElementById("botao");

function somar() {
  alert(parseInt(campoNumero1.value) + parseInt(campoNumero2.value));
}

function sub() {
  alert(parseInt(campoNumero1.value) - parseInt(campoNumero2.value));
}

function mult() {
  alert(parseInt(campoNumero1.value) * parseInt(campoNumero2.value));
}

function div() {
  alert(parseInt(campoNumero1.value) / parseInt(campoNumero2.value));
}
