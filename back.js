function valores(id) {
  return Number(document.getElementById(id).value.replace(",", "."));
}

function calcularFrete() {
  const peso = valores("peso");
  const precoBase = 50;
  const precoVariavel = 11.8;

  if (peso <= 100) {
    return precoBase;
  }
  const pesoAMais = peso - 100;
  const cemEmCem = Math.ceil(pesoAMais / 100);
  return precoBase + cemEmCem * precoVariavel;
}

console.log("valor frete " + calcularFrete());

function valorTotalY() {
  const frete = calcularFrete();
  const valorPeca = valores("valor");
  return frete + valorPeca;
}

console.log(valorTotalY());

function converterYuan() {
  const valorPeca = valores("valor");
  const frete = calcularFrete();
  const cotacaoYuan = 1.23;

  return Math.round((valorPeca + frete) / cotacaoYuan);
}

console.log("valor y " + converterYuan());

function converterDolar() {
  const taxa = valores("taxa");
  const cotacaoDolar = 5.23;
  return Math.round(taxa * cotacaoDolar * 100) / 100;
}

console.log("valor dolar " + converterDolar());

function valorTotalRS() {
  const valorTaxa = converterDolar();
  const valorYuanTotal = converterYuan();
  return valorTaxa + valorYuanTotal;
}

console.log("valor total rs " + valorTotalRS());

function CalcularLucro() {
  const valorVenda = valores("valorVenda");
  const taxaInfinite = 11.57;
  const custoTotal = valorTotalRS();
  const valorDebitado =
    Math.round((valorVenda - valorVenda * (taxaInfinite / 100)) * 100) / 100;
  const lucroReal = Math.round(valorDebitado - custoTotal);
  return lucroReal;
}

function calcularPrecoVenda() {
  const taxaNuvem = 11;
  const custoTotal = valorTotalRS();
  const lucroDesejado = valores("lucro");
  const taxa = taxaNuvem / 100;
  const precoVenda = (custoTotal + lucroDesejado) / (1 - taxa);
  return precoVenda;
}

function calculoGeral() {
  const frete = calcularFrete();
  const valorYuan = valorTotalY();
  const valorReais = valorTotalRS();
  const yuanConvertido = converterYuan();
  const dolarConvertido = converterDolar();

  console.log("valor frete: " + frete);
  console.log("valor total em yuan: " + valorYuan);
  console.log("valor total em reais: " + valorReais);
  console.log("valor yuan convertido: " + yuanConvertido);
  console.log("valor dolar convertido: " + dolarConvertido);

  const lucro = CalcularLucro();
  console.log("lucro real: " + lucro);
  const precoVenda = calcularPrecoVenda();
  console.log("preço de venda: " + precoVenda);
}
