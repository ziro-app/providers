const calculoAtendimento2020 = transacionado_mes => {
    if(transacionado_mes < 1000000) return transacionado_mes*0.0015
    if(transacionado_mes < 2000000) return 1500 + (transacionado_mes-1000000)*0.0010
    if(transacionado_mes < 3000000) return 1500 + 1000 + (transacionado_mes-2000000)*0.0005
}

const recebimento = (baseTransacoes, ano, mes) => {
    if(baseTransacoes){
        const filtrado = baseTransacoes.filter(item =>
            item.ano === ano && item.mes === mes
        )
        const transacionado = filtrado.map(item => item.transacionado)
        if(transacionado){
            const somaTransacionado = transacionado.reduce(
                (anterior, proximo) => anterior + proximo
            )
            return Number(somaTransacionado.replace('.','').replace(',','.'))
        }else{
            return 0
        }
    }else{
        return 0
    }
}
  
// Função "main"
const atendimento2020 = (baseTransacoes, ano, mes) => {
    const transacoes_mes_ziro = recebimento(baseTransacoes, ano, mes)
    return calculoAtendimento2020(transacoes_mes_ziro)
}

  
module.exports = atendimento2020
  