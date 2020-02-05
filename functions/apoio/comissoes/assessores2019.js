// Conversão para número da base de dados
const transNumb = (numero) => {
  return Number(numero.replace(",","."))
      }

// Lista de receita de clientes antigos_mes_ano_assessor e receita clientes afiliados  novos_mes_ano_assessor
// Formato desejado : {"ano":ano,"mes":mes,"assessor":assessor,"receita_antigo":receita_antigo,"receita_novo_afil":receita_novo_afil}
let list_antigos = []
let list_novos_afil = []
let result_novos_antigos = []
const apoioBaseDadosAssessores = (baseAntigosNovos)=> {
  for(dado of baseAntigosNovos.values){
    if(dado[3] == "Antigo"){
      list_antigos.push({"ano": dado[0], "mes": dado[1], "assessor": dado[2], "receita_antigo": transNumb(dado[4]), "receita_novo_afil": 0, "receita_novo":[0]})
    }else{
      list_novos_afil.push({"ano": dado[0], "mes": dado[1], "assessor": dado[2], "receita_novo_afil": transNumb(dado[4])})
    }
  }
  for(antigo of list_antigos){
    for(novo_afil of list_novos_afil){
      if(antigo.ano == novo_afil.ano && antigo.mes == novo_afil.mes && antigo.assessor == novo_afil.assessor){
        antigo.receita_novo_afil = novo_afil.receita_novo_afil
      }
    }
    result_novos_antigos.push(antigo)
  }
  return result_novos_antigos
}

// Formar base final, local onde vai se ter os parametros passados na função
let baseFinal = []
const constructBase = (apoioAssessores, lista_receita_novos) => {
  const baseDadosAssessores = apoioBaseDadosAssessores(apoioAssessores)
  for(base of baseDadosAssessores){
    for(item of lista_receita_novos.values){
      if(base.ano == item[0] && base.mes == item[1] && base.assessor == item[2] && item[3] == "Novo" && item[4] =="Não"){
        base.receita_novo.push(transNumb(item[5]))
      }
    }
    baseFinal.push(base)
  }
  return baseFinal
}

// Função de apoio para o array dado
let soma = 0
const limite = (array) =>{
  let loop = array.map((item) => {
    if(item*0.4 < 1000){
      soma += item*0.4
    }else{
      soma += 1000
    }
  })
  return soma
}
// Função assessores no ano de 2019
// receitas_mes_novo_cliente = [receita_por_boleto]

const calculoAssessor2019 = (
  receitas_mes_novo_cliente,
  receita_mes_novo_afiliado,
  receita_mes_antigo
) => {
  const parte1 = limite(receitas_mes_novo_cliente);
  const parte2 = receita_mes_novo_afiliado * 0.2;
  const parte3 = receita_mes_antigo * 0.1;
  return parte1 + parte2 + parte3;
};

let resultadoCalculo = []
const assessor2019 = (apoioAssessores, lista_receita_novos) => {
  const baseCalculo = constructBase(apoioAssessores, lista_receita_novos)
  for(base of baseCalculo){
    if(base.ano >= 2019 && base.ano < 2020){
      let comissao = calculoAssessor2019(base.receita_novo, base.receita_novo_afil, base.receita_antigo)
      resultadoCalculo.push({"ano":base.ano, "mes":base.mes, "assessor":base.assessor, "comissao": comissao})
    }
  }
  return resultadoCalculo
}

module.exports = assessor2019;