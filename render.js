import {
  calcularFrete,
  valorTotalY,
  valorTotalRS,
  converterDolar,
  valorTaxaTotal,
  valorTotalDebitado,
  calcularPrecoVenda,
} from "./calculate.js";

export function render() {
  const results = document.getElementById("results");
  const nome = document.getElementById("nome").value;
  const preco = document.getElementById("preco").value;
  const lucro = document.getElementById("lucro").value;
  const frete = calcularFrete();
  const valorYuan = valorTotalY();
  const valorReais = valorTotalRS();
  const dolar = converterDolar();
  const valorTaxa = valorTaxaTotal();
  const valorDebitado = valorTotalDebitado();
  const precoVenda = calcularPrecoVenda();

  results.innerHTML = `  
  <div class="divComponents"">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#ee6a4a"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-tags-icon lucide-tags"
  >
    <path
      d="M13.172 2a2 2 0 0 1 1.414.586l6.71 6.71a2.4 2.4 0 0 1 0 3.408l-4.592 4.592a2.4 2.4 0 0 1-3.408 0l-6.71-6.71A2 2 0 0 1 6 9.172V3a1 1 0 0 1 1-1z"
    />
    <path
      d="M2 7v6.172a2 2 0 0 0 .586 1.414l6.71 6.71a2.4 2.4 0 0 0 3.191.193"
    />
    <circle cx="10.5" cy="6.5" r=".5" fill="currentColor" />
  </svg>
  <p class="titleComponents">${nome}</p>
</div>
<div class="divComponents">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-shirt-icon lucide-shirt"
  >
    <path
      d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"
    />
  </svg>
  <h1 class="titleComponents">Custo da Peça</h1>
  <p>${preco}</p>
</div>
<div class="divComponents">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-plane-icon lucide-plane"
  >
    <path
      d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"
    />
  </svg>
  <h1 class="titleComponents">Valor Frete</h1>
  <p>${frete}</p>
</div>
<div class="divComponents">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-receipt-japanese-yen-icon lucide-receipt-japanese-yen"
  >
    <path d="m12 10 3-3" />
    <path
      d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"
    />
    <path d="M9 11h6" />
    <path d="M9 15h6" />
    <path d="m9 7 3 3v7" />
  </svg>
  <h1 class="titleComponents">Valor Total em Yuans</h1>
  <p>${valorYuan}</p>
</div>
<div class="divComponents">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-receipt-icon lucide-receipt"
  >
    <path d="M12 17V7" />
    <path d="M16 8h-6a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4H8" />
    <path
      d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"
    />
  </svg>

  <h1 class="titleComponents">Valor da taxa de importação</h1>
  <p>${dolar}</p>
</div>
<div class="divComponents">
  <h1 class="titleComponents">Valor Total em Reais</h1>
  <p>${valorReais}</p>
</div>
<div class="divComponents">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-wallet-icon lucide-wallet"
  >
    <path
      d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"
    />
    <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
  </svg>
  <h1 class="titleComponents">Valor debitado</h1>
  <p>${valorDebitado}</p>
</div>
<div class="divComponents">
  <h1 class="titleComponents">Valor da Taxa de Pagamento</h1>
  <p>${valorTaxa}</p>
</div>
<div class="divComponents">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#ee6a4a"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-chart-line-icon lucide-chart-line"
  >
    <path d="M3 3v16a2 2 0 0 0 2 2h16" />
    <path d="m19 9-5 5-4-4-3 3" />
  </svg>
  <h1 class="titleComponents">Lucro</h1>
  <p>${lucro}</p>
</div>
<div class="resultadoPrecoVenda">
  <h1>Valor Venda</h1>
  <p>${precoVenda}</p>
</div>

`;
}

const buttonRender = document.getElementById("btnCalcular");
buttonRender.addEventListener("click", render);

export function clearResults() {
  results.innerHTML = `
  <div class="components">
              <div class="moneyFig">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-coin"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z"
                  />
                  <path
                    d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"
                  />
                  <path
                    d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12"
                  />
                </svg>
              </div>
              <div class="textsResults">
                <div class="titleResult"><p>Resultados aparecerão aqui</p></div>
                <div class="descriptionResult">
                  <p>
                    Insira os dados do produto e clique em Calcular para ter os
                    resultados
                  </p>
                </div>
              </div>
            </div>
  `;
  document.getElementById("nome").value = "";
  document.getElementById("peso").value = "";
  document.getElementById("preco").value = "";
  document.getElementById("taxa").value = "";
  document.getElementById("lucro").value = "";

  console.log("render limpo");
}

const buttonClear = document.getElementById("btnClear");
buttonClear.addEventListener("click", clearResults);
