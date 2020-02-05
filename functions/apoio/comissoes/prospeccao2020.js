const transNumb = (numero) => {
  return Number(numero.replace(",","."))
  }
// Prospecção
// Função atual recebe 1000 se tiver mais de 100000 de transação começou 01/2020
const calculoProspeccao2020 = (
    transacao_mes_afiliado,
    receita_mes_novo_afiliado,
    receita_mes_antigo_afiliado
  ) => {
    if (transacao_mes_afiliado >= 100000)
      return (
        receita_mes_novo_afiliado * 0.2 + receita_mes_antigo_afiliado * 0.1 + 1000
      );
    return receita_mes_novo_afiliado * 0.2 + receita_mes_antigo_afiliado * 0.1;
  };

let lista_transacoes_mes_afiliado = []
  const listar_transacao_mes_afiliado=(dados) => {
    for(dado of dados.values){
      lista_transacoes_mes_afiliado.push({"ano": dado[0], "mes": dado[1], "afiliado": dado[2], "transacao_afiliado": transNumb(dado[3]),"receitaNovo":0, "receitaAntigo":0 })
    }
    return lista_transacoes_mes_afiliado
  }

let result = []
const baseDados = (dados, dados2) =>{
  const baseDados = listar_transacao_mes_afiliado(dados)
  const apoioFiliados = dados2.values
    for(base of baseDados){
      for(dado of apoioFiliados){
        if(base.ano == dado[0] && base.mes == dado[1] && base.afiliado == dado[2] && dado[3] == "Novo"){
          base.receitaNovo = transNumb(dado[5])
        }else{
          base.receitaAntigo = transNumb(dado[5])
        }
      }
      result.push(base)
    }
  return result
}

let resultFinal = []
const prospeccao2020 = (dado, dado2) => {
  const baseFinal = baseDados(dado, dado2)
  for(base of baseFinal){
    if(base.ano >= 2020){
      let comissao = calculoProspeccao2020(base.transacao_afiliado, base.receitaNovo, base.receitaAntigo)
      resultFinal.push({"ano":base.ano, "mes":base.mes, "afiliado":base.afiliado, "comissao": comissao})
    }
  }
  return resultFinal
}
  
  module.exports = prospeccao2020;