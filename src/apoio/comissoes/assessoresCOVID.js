// Segunda comissão dos assessores:
// Comissão é de 10% sobre a receita da venda baixada e bonus conforme a quantidade vendida conforme a tabela abaixo:
// Venda 400000      700
// Venda 300000      600
// Venda 200000      450
// Venda 100000      250
// Venda 50000       125
// Calculo com da comissão
const calculoAssessor2020 = (transacionado_mes, receita_mes) => {
    const base = receita_mes * 0.1
    if (transacionado_mes >= 400000) return base + 700
    if (transacionado_mes >= 300000) return base + 600
    if (transacionado_mes >= 200000) return base + 450
    if (transacionado_mes >= 100000) return base + 250
    if (transacionado_mes >= 50000) return base + 125
    return base
}

// Agrupamento dos valores necessários para o calculo
const transacoes_e_receitas = (baseComissoes, ano, mes, assessor) => {
    if(baseComissoes){
        const filtradoTransacoes = baseComissoes.filter(item => {
            return item.ano === ano && item.mes === mes && item.assessor.toLowerCase() === assessor.toLowerCase()
        })
        const filtrado = baseComissoes.filter(item => {
            return item.ano >= 2020 && item.mes >= 3 && item.anoBaixa === ano && item.mesBaixa === mes && item.assessor.toLowerCase() === assessor.toLowerCase()
        })
        const receitas = filtrado.map((item) => {
            if(item.receita) return item.receita
            return 0
        })
        const transacoes = filtradoTransacoes.map(item => {
            if(item.valor) return item.valor
            return 0
        })
        console.log(receitas, transacoes)
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
    }else{
        return { receita_mes: [], transacionado_mes: [] }
    }
}
  
// Função "main"
const assessor2020COVID = (baseComissoes, ano, mes, assessor) => {
    const { receita_mes, transacionado_mes } = transacoes_e_receitas(baseComissoes, ano, mes, assessor)
    return calculoAssessor2020(transacionado_mes, receita_mes)
}

module.exports = assessor2020COVID