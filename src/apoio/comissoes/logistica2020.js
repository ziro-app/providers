const calculoLogistica2020 = (transacionado_mes) => {
    const base = transacionado_mes * 0.0003
    return base
}

// Agrupamento dos valores necessários para o calculo
const transacoes_e_receitas = (baseComissoes, ano, mes) => {
    if(baseComissoes){
        const filtradoTransacoes = baseComissoes.filter(item => {
            return item.ano >= 2020 && item.mes >= 9 && item.anoBaixa === ano && item.mesBaixa === mes
        })
        const transacoes = filtradoTransacoes.map(item => {
            if(item.valor) return item.valor
            return 0
        })
        if(transacoes[0] != undefined){
            const somaTransacoes = transacoes.reduce(
                (anterior, proximo) => anterior + proximo
            )
            return { transacionado_mes: somaTransacoes }
        }else{
            return { transacionado_mes: [] }
        }
    }else{
        return { transacionado_mes: [] }
    }
}
  
// Função "main"
const logistica2020 = (baseComissoes, ano, mes) => {
    try {
        const {transacionado_mes } = transacoes_e_receitas(baseComissoes, ano, mes)
        return calculoLogistica2020(transacionado_mes)
    } catch (error) {
        console.log('erro no calculo de logistica2020')
    }
}

module.exports = logistica2020