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
  const valorPeca = valores("preco");
  return frete + valorPeca;
}

console.log(valorTotalY());

function converterYuan() {
  const valorPeca = valores("preco");
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

function calcularPrecoVenda() {
  const taxaNuvem = 11.57;
  const custoTotal = valorTotalRS();
  const lucroDesejado = valores("lucro");
  const taxa = taxaNuvem / 100;
  const precoVenda = Math.round((custoTotal + lucroDesejado) / (1 - taxa)*100) /100;
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

  const precoVenda = calcularPrecoVenda();
  console.log("preço de venda: " + precoVenda);
}
