function calcularTotal() {
  // Verifica se todos os campos foram preenchidos corretamente
  if (nome && kg && !isNaN(dia)) {
    // Inicializa o valor total das compras
    let valorTotal = 0;

    // Calcula o valor total das compras com base no nome do cliente
    if (nome === "João") {
      // Preços por quilo para João
      const precoCarneBoiJoao = 25.00;
      const precoCarneFrangoJoao = 15.00;
      const precoLinguiçaJoao = 20.00;

      // Quantidades compradas por João
      const kgCarneBoiJoao = 2;
      const kgCarneFrangoJoao = 1;
      const kgLinguiçaJoao = 1;

      // Calcula o valor total das compras de João
      valorTotal += precoCarneBoiJoao * kgCarneBoiJoao;
      valorTotal += precoCarneFrangoJoao * kgCarneFrangoJoao;
      valorTotal += precoLinguiçaJoao * kgLinguiçaJoao;
    } else if (nome === "Maria") {
      // Preços por quilo para Maria
      const precoCarnePorcoMaria = 30.00;
      const precoCarneFrangoMaria = 15.00;
      const precoLinguiçaMaria = 20.00;

      // Quantidades compradas por Maria
      const kgCarnePorcoMaria = 3;
      const kgCarneFrangoMaria = 2;
      const kgLinguiçaMaria = 1;

      // Calcula o valor total das compras de Maria
      valorTotal += precoCarnePorcoMaria * kgCarnePorcoMaria;
      valorTotal += precoCarneFrangoMaria * kgCarneFrangoMaria;
      valorTotal += precoLinguiçaMaria * kgLinguiçaMaria;
    }

    // Aplica desconto de acordo com o dia da semana
    valorTotal = aplicarDesconto(valorTotal, dia);

    // Exibe o resultado na página
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = `Total das compras de ${nome}: R$ ${valorTotal.toFixed(2)}`;
  } else {
    // Exibe mensagem de erro se algum campo não for preenchido corretamente
    console.error("Por favor, preencha todos os campos corretamente.");
  }

}