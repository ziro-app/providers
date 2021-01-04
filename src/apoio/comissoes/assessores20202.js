const calculoAssessor20202 = (receita_mes) => {
    const base = receita_mes * 0.12
    return base
}

// Agrupamento dos valores necessários para o calculo
const transacoes_e_receitas = (baseComissoes, ano, mes, assessor) => {
    if(baseComissoes){
        const filtrado = baseComissoes.filter(item => {
            return item.ano >= 2020 && item.mes >= 3 && item.anoBaixa === ano && item.mesBaixa === mes && item.assessor.toLowerCase() === assessor.toLowerCase()
        })
        const receitas = filtrado.map((item) => {
            if(item.receita) return item.receita
            return 0
        })
        if(receitas[0] != undefined){
            const somaReceitas = receitas.reduce(
                (anterior, proximo) => anterior + proximo
            )
            return { receita_mes: somaReceitas }
        }else{
            return { receita_mes: [] }
        }
    }else{
        return { receita_mes: [] }
    }
}
  
// Função "main"
const assessor20202 = (baseComissoes, ano, mes, assessor) => {
    try {
        const { receita_mes } = transacoes_e_receitas(baseComissoes, ano, mes, assessor)
        return calculoAssessor20202(receita_mes)
    } catch (error) {
        console.log('erro no calculo dos assessores 20202')
    }
}

module.exports = assessor20202