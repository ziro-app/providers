// Função de apoio para o array dado
const limite = (arrayReceitas, porcentagemComissao, limite) => {
    arrayReceitas.map(receita => {
      let soma;
      if (receita * porcentagemComissao < limite) {
        soma += receita * porcentagemComissao;
      } else {
        soma += limite;
      }
      return soma;
    });
  };
  
  // Função de calculo das comissões dos assessores
  const assessores2019 = (
    receitas_mes_client_novo_afiliado,
    receitas_mes_client_novo,
    receitas_mes_cliente_antigo
  ) => {
    const baseNovo = funcaoMap(receitas_mes_client_novo, 0.4);
    const baseNovoAfiliado = funcaoMap(receitas_mes_client_novo_afiliado, 0.2);
    const baseAntigo = funcaoMap(receitas_mes_cliente_antigo, 0.1);
    return baseNovo + baseNovoAfiliado + baseAntigo;
  };

  module.exports = assessores2019
  