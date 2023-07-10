function subtrair(num1, num2) {
  if (num1 < num2) {
    return "não foi possivel subtrair";
  } else {
    return num1 - num2;
  }
}

function divisao(num1, num2) {
  if (num2 < 0) {
    return "Não foi possivel dividir";
  } else {
    return num1 / num2;
  }
}

console.log("sub 3,1 ", subtrair(3, 1));

console.log("sub 1,10 ", subtrair(1, 10));

console.log("sub 2,2 ", subtrair(2, 2));

console.log("div 2,1 ", divisao(2, 1));

console.log("div 10,2 ", divisao(10, 2));

console.log("div 2,-5 ", divisao(2, -5));
