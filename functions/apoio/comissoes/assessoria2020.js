const transacoes_e_receitas = (baseComissoes, ano, mes, assessor) => {
    const filtrado = baseComissoes.filter(item =>
        item.ano === ano && item.mes === mes && item.assessor === assessor
    )
    const transacoes = filtrado.map(item => item.valor)
    const receitas = filtrado.map(item => item.receita)
    const somaTransacoes = transacoes.reduce(
        (anterior, proximo) => anterior + proximo
    )
    const somaReceitas = receitas.reduce(
        (anterior, proximo) => anterior + proximo
    )
    return { transacionado_mes: somaTransacoes, receita_mes: somaReceitas }
}

const comissaoAssessor = (transacionado_mes, receita_mes) => {
    const base = receita_mes * 0.1
    if (transacionado_mes >= 400000) return base + 1400
    if (transacionado_mes >= 300000) return base + 1200
    if (transacionado_mes >= 200000) return base + 900
    if (transacionado_mes >= 100000) return base + 500
    return base
}

const assessor2020 = (baseComissoes, ano, mes, assessor) => {
    const { transacionado_mes, receita_mes } = transacoes_e_receitas(baseComissoes, ano, mes, assessor)
    return comissaoAssessor(transacionado_mes, receita_mes)
}

module.exports = assessor2020