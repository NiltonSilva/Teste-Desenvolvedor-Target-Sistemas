// FUNÇÃO QUE VAI INVERTER OS VALORES DE QUALQUER STRING INSETIDA NO PARâMETRO
let inverterString = (valor) => {
  let resultado = "";
  for (let i = valor.length - 1; i >= 0; i--) {
    resultado += valor[i];
  }
  console.log(resultado);
};

// CHAMADA DA FUNÇÃO. AQUI PODE SER INSERIDO QUALQUER OUTRA STRING QUE ELA TERÁ SEU VALOR INVERTIDO
inverterString("Nilton");
