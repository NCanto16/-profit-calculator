let taxaNuvem = 11.57;

function valores(id) {
  return Number(document.getElementById(id).value.replace(",", "."));
}

function calcularFrete() {
  let peso = valores("peso");
  let precoBase = 50;
  let precoVariavel = 11.8;

  if (peso <= 100) {
    return precoBase;
  }
  let pesoAMais = peso - 100;
  let cemEmCem = Math.ceil(pesoAMais / 100);
  return precoBase + cemEmCem * precoVariavel;
}

function valorTotalY() {
  let frete = calcularFrete();
  let valorPeca = valores("preco");
  return frete + valorPeca;
}

function converterYuan() {
  let valorPeca = valores("preco");
  let frete = calcularFrete();
  let cotacaoYuan = 1.24;

  return Math.round((valorPeca + frete) / cotacaoYuan);
}

function converterDolar() {
  let taxa = valores("taxa");
  let cotacaoDolar = 5.23;
  return Math.round(taxa * cotacaoDolar * 100) / 100;
}

function valorTotalRS() {
  let valorTaxa = converterDolar();
  let valorYuanTotal = converterYuan();
  return Math.round((valorTaxa + valorYuanTotal)*100)/100;
}

function calcularPrecoVenda() {
  let custoTotal = valorTotalRS();
  let lucroDesejado = valores("lucro");
  let taxa = taxaNuvem / 100;
  let precoVenda =
    Math.round(((custoTotal + lucroDesejado) / (1 - taxa)) * 100) / 100;
  return precoVenda;
}

function valorTaxaTotal() {
  let precoVenda = calcularPrecoVenda();
  return Math.round(precoVenda * (taxaNuvem / 100) * 100) / 100;
}

function valorTotalDebitado() {
  return Math.round((calcularPrecoVenda() - valorTaxaTotal()) * 100) / 100;
}

function calculoGeral() {
  let frete = calcularFrete();
  let valorYuan = valorTotalY();
  let valorReais = valorTotalRS();
  let yuanConvertido = converterYuan();
  let dolarConvertido = converterDolar();
  let valorTaxa = valorTaxaTotal();
  let valorDebitado = valorTotalDebitado();

  console.log("valor frete: " + frete);
  console.log("valor total em yuan: " + valorYuan);
  console.log("valor total em reais: " + valorReais);
  console.log("valor yuan convertido: " + yuanConvertido);
  console.log("valor dolar convertido: " + dolarConvertido);
  console.log("valor total da taxa: " + valorTaxa);
  console.log("valor debitado: " + valorDebitado);

  let precoVenda = calcularPrecoVenda();
  console.log("preço de venda: " + precoVenda);
}

let button = document.getElementById("btnCalcular");
button.addEventListener("click", calculoGeral);

export {
  calcularFrete,
  valorTotalY,
  valorTotalRS,
  converterDolar,
  valorTaxaTotal,
  valorTotalDebitado,
  calcularPrecoVenda,
};