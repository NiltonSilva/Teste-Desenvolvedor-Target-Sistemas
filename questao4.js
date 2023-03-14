let sp = 67836.43;
let rj = 36678.66;
let mg = 29229.88;
let es = 27165.48;
let outrosEstados = 19849.53;
let total = sp + rj + mg + es + outrosEstados;

console.log(`O percentual de São Paulo é ${((sp / total) * 100).toFixed(2)}%.`);
console.log(
  `O percentual do Rio de Janeiro é ${((rj / total) * 100).toFixed(2)}%.`
);
console.log(
  `O percentual de Minas Gerais é ${((mg / total) * 100).toFixed(2)}%.`
);
console.log(
  `O percentual do Espírito Santo é ${((es / total) * 100).toFixed(2)}%.`
);
console.log(
  `O percentual dos demais estados é ${((outrosEstados / total) * 100).toFixed(
    2
  )}%.`
);
