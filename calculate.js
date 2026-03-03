const taxaNuvem = 11.57;

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

function valorTotalY() {
  const frete = calcularFrete();
  const valorPeca = valores("preco");
  return frete + valorPeca;
}

function converterYuan() {
  const valorPeca = valores("preco");
  const frete = calcularFrete();
  const cotacaoYuan = 1.24;

  return Math.round((valorPeca + frete) / cotacaoYuan);
}

function converterDolar() {
  const taxa = valores("taxa");
  const cotacaoDolar = 5.23;
  return Math.round(taxa * cotacaoDolar * 100) / 100;
}

function valorTotalRS() {
  const valorTaxa = converterDolar();
  const valorYuanTotal = converterYuan();
  return valorTaxa + valorYuanTotal;
}

function calcularPrecoVenda() {
  const custoTotal = valorTotalRS();
  const lucroDesejado = valores("lucro");
  const taxa = taxaNuvem / 100;
  const precoVenda =
    Math.round(((custoTotal + lucroDesejado) / (1 - taxa)) * 100) / 100;
  return precoVenda;
}

function valorTaxaTotal() {
  const precoVenda = calcularPrecoVenda();
  return Math.round(precoVenda * (taxaNuvem / 100) * 100) / 100;
}

function valorTotalDebitado() {
  return calcularPrecoVenda() - valorTaxaTotal();
}

export const frete = calcularFrete();
export const valorYuan = valorTotalY();
export const valorReais = valorTotalRS();
export const yuanConvertido = converterYuan();
export const dolarConvertido = converterDolar();
export const valorTaxa = valorTaxaTotal();
export const valorDebitado = valorTotalDebitado();
export const precoVenda = calcularPrecoVenda();

//  function calculoGeral() {
//   const frete = calcularFrete();
//   const valorYuan = valorTotalY();
//   const valorReais = valorTotalRS();
//   const yuanConvertido = converterYuan();
//   const dolarConvertido = converterDolar();
//   const valorTaxa = valorTaxaTotal();
//   const valorDebitado = valorTotalDebitado();

//   console.log("valor frete: " + frete);
//   console.log("valor total em yuan: " + valorYuan);
//   console.log("valor total em reais: " + valorReais);
//   console.log("valor yuan convertido: " + yuanConvertido);
//   console.log("valor dolar convertido: " + dolarConvertido);
//   console.log("valor total da taxa: " + valorTaxa);
//   console.log("valor debitado: " + valorDebitado);

//   const precoVenda = calcularPrecoVenda();
//   console.log("preço de venda: " + precoVenda);
// }
