var num1 = 10;
var num2 = 5;

function sub(num1, num2) {
  if (num1 < num2) {
    return "nao foi possivel subtrair";
  } else {
    return num1 - num2;
  }
}

function divisao(num1, num2) {
  if (num2 < 0) {
    return "Nao foi possivel dividir";
  } else {
    return num1 / num2;
  }
}

console.log(sub(2, 1));
console.log(sub(1, 2));
console.log(sub(2, 1));
console.log(divisao(2, 1));
console.log(divisao(1, 2));
console.log(divisao(2, -1));

