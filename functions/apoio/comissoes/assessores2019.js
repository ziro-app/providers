// Função de apoio para o array dado
const limite = arrayReceitas => {
  let soma;
  arrayReceitas.map(receita => {
    if (receita * 0.4 < 1000) {
      soma += receita * 0.4;
    } else {
      soma += limite;
    }
    return soma;
  });
};

// Função assessores no ano de 2019

const assessor2019 = (
  receitas_mes_novo_cliente,
  receita_mes_novo_afiliado,
  receita_mes_antigo
) => {
  const parte1 = limite(receitas_mes_novo_cliente);
  const parte2 = receita_mes_novo_afiliado * 0.2;
  const parte3 = receita_mes_antigo * 0.1;
  return parte1 + parte2 + parte3;
};

module.exports = assessor2019;
