import {
  frete,
  valorYuan,
  valorReais,
  precoVenda,
  valorTaxa,
  valorDebitado,
} from "./calculate.js";

export function render() {
  const nome = document.getElementById("nome").value;
  const results = document.getElementById("results");
  results.innerHTML = `
    <div>
        <p>${nome}</p>
    </div>
    <div class="resultadoValorTotalY">
        <h1>Valor Total em Yuans</h1>
              <p>${valorYuan}</p>
            </div>
            <div class="resultadoValorTotalRS">
              <h1>Valor Total em Reais</h1>
              <p>${valorReais}</p>
            </div>
            <div class="resultadoValorFrete">
              <h1>Peso</h1>
              <p>${frete}</p>
            </div>
            <div class="resultadoValorFrete">
              <h1>Valor debitado</h1>
              <p>${valorDebitado}</p>
            </div>
            <div class="resultadoPrecoVenda">
              <h1>Valor Venda</h1>
              <p>${precoVenda}</p>
            </div>
            <div class="resultadoValorFrete">
              <h1>Valor da Taxa de Pagamento</h1>
              <p>${valorTaxa}</p>
            </div>
          </div>`;
}

const button = document.getElementById("btnCalcular");
button.addEventListener("click", render);
