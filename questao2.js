// FUNÇÃO PARA CALCULAR SE O NUMERO FAZ PARTE OU NÃO DA SEQUÊNCIA
let fibonacci = (numero) => {
  let num1 = 0;
  let num2 = 1;
  let num3 = 0;

  while (numero > num3) {
    num3 = num2 + num1;
    num1 = num2;
    num2 = num3;
  }
  if (numero === 0 || numero === 1) {
    console.log("O número faz parte da sequência de Fibonacci");
  } else if (numero === num3) {
    console.log("O número faz parte da sequência de Fibonacci");
  } else {
    console.log("O número não faz parte da sequência de Fibonacci");
  }
};

// INDIQUE AQUI (PASSANDO POR PARÂMETRO) UM NÚMERO PARA SABER SE O MESMO ESTÁ NA SEQUENCIA DE FIBONACCI
fibonacci(4);
