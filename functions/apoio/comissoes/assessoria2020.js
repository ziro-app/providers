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
    else return base
}

// Agrupamento dos valores necessários para o calculo
const reduceBaseBoletos = (baseComissoes, ano, mes, assessor) => {
    const filtrado = baseComissoes.filter(item => {
        const condicao =
        item.ano === ano && item.mes === mes && item.assessor === assessor
        return condicao
    })
    const receitas = filtrado.map(item => item.receita)
    const transacaoes = filtrado.map(item => item.valor)
    const somaTransacoes = transacaoes.reduce(
        (anterior, proximo) => anterior + proximo
    )
    const somaReceitas = receitas.reduce(
        (anterior, proximo) => anterior + proximo
    )
    const somas = { transacoes: somaTransacoes, receitas: somaReceitas }
    return somas
}
  
// Função "main"
const assessor2020 = (baseComissoes, ano, mes, assessor) => {
    const somatoria = reduceBaseBoletos(baseComissoes, ano, mes,assessor)
    const receita_mes = somatoria.receitas
    const transacionado_mes = somatoria.transacoes
    return calculoAssessor2020(receita_mes, transacionado_mes)
}

module.exports = assessor2020