// Função para aplicar desconto de 10% nas quartas-feiras
function aplicarDesconto(valorTotal) {
  const diaDaSemana = new Date().getDay(); // 0 para domingo, 1 para segunda-feira, etc.
  if (diaDaSemana === 3) {  // 3 representa quarta-feira
    return valorTotal * 0.9;  // Aplica desconto de 10%
  } else {
    return valorTotal; // Sem desconto
  }
}

// Compras de João
const precoCarneBoi = 25.00;
const precoCarneFrango = 15.00;
const precoLinguiça = 20.00;

const kgCarneBoiJoao = 2;
const kgCarneFrangoJoao = 1;
const kgLinguiçaJoao = 1;

const totalJoao = (precoCarneBoi * kgCarneBoiJoao) + (precoCarneFrango * kgCarneFrangoJoao) + (precoLinguiça * kgLinguiçaJoao);
const totalJoaoComDesconto = aplicarDesconto(totalJoao);
console.log("Total das compras de João:", totalJoaoComDesconto.toFixed(2));

// Compras de Maria
const precoCarnePorco = 30.00;

const kgCarnePorcoMaria = 3;
const kgCarneFrangoMaria = 2;
const kgLinguiçaMaria = 1;

const totalMaria = (precoCarnePorco * kgCarnePorcoMaria) + (precoCarneFrango * kgCarneFrangoMaria) + (precoLinguiça * kgLinguiçaMaria);
const totalMariaComDesconto = aplicarDesconto(totalMaria);
console.log("Total das compras de Maria:", totalMariaComDesconto.toFixed(2));
