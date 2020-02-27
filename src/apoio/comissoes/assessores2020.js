// Segunda comissão dos assessores:
// Comissão é de 10% sobre a receita da venda e bonus conforme a quantidade vendida conforme a tabela abaixo:
//100000	500
//200000	900
//300000	1200
//400000	1400

// Calculo com da comissão
const calculoAssessor2020 = (transacionado_mes, receita_mes) => {
    const base = receita_mes * 0.1
    if (transacionado_mes >= 400000) return base + 1400
    if (transacionado_mes >= 300000) return base + 1200
    if (transacionado_mes >= 200000) return base + 900
    if (transacionado_mes >= 100000) return base + 500
    return base
}

// Agrupamento dos valores necessários para o calculo
const transacoes_e_receitas = (baseComissoes, ano, mes, assessor) => {
    const filtrado = baseComissoes.filter(item =>
        item.ano === ano && item.mes === mes && item.assessor === assessor
    )
    const receitas = filtrado.map((item) => item.receita)
    const transacoes = filtrado.map(item => item.valor)
    if(receitas[0] != undefined && transacoes[0] != undefined){
        const somaTransacoes = transacoes.reduce(
            (anterior, proximo) => anterior + proximo
        )
        const somaReceitas = receitas.reduce(
            (anterior, proximo) => anterior + proximo
        )
        return { receita_mes: somaReceitas, transacionado_mes: somaTransacoes }
    }else{
        return { receita_mes: [], transacionado_mes: [] }
    }
}
  
// Função "main"
const assessor2020 = (baseComissoes, ano, mes, assessor) => {
    const { receita_mes, transacionado_mes } = transacoes_e_receitas(baseComissoes, ano, mes, assessor)
    return calculoAssessor2020(transacionado_mes, receita_mes)
}

module.exports = assessor2020