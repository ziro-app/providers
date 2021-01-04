//Cobranca começou a ter comissão 09/2019
const calculoCobranca2019 = cobrancas_mes => {
    return cobrancas_mes * 0.007
}

const recebimento = (baseComissoes, ano, mes) => {
    if(baseComissoes){
        const filtrado = baseComissoes.filter(item =>
            item.anoRecebido === ano && item.mesRecebido === mes
        )
        const recebido = filtrado.map(item => item.recebido)
        if(recebido){
            const somaRecebido = recebido.reduce(
                (anterior, proximo) => anterior + proximo
            )
            return somaRecebido
        }else{
            return 0
        }
    }else{
        return 0
    }
}
  
// Função "main"
const cobranca2019 = (baseComissoes, ano, mes) => {
    try {
        const receita_mes_ziro = recebimento(baseComissoes, ano, mes)
        return calculoCobranca2019(receita_mes_ziro)
    } catch (error) {
        console.log('erro no calculo de cobrança 2019')
    }
}

  
module.exports = cobranca2019
  