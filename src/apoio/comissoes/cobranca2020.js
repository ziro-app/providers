//Cobranca começou a ter comissão 09/2019
const calculoCobranca2020 = cobrancas_mes => {
    if(cobrancas_mes !== 0 && cobrancas_mes >= 40000){
        return cobrancas_mes * 0.007
    }else{
        return 0
    }
}

const recebimento = (baseComissoes, ano, mes) => {
    if(baseComissoes[0]){
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
const cobranca2020 = (baseComissoes, ano, mes) => {
    try {
        const receita_mes_ziro = recebimento(baseComissoes, ano, mes)
        return calculoCobranca2020(receita_mes_ziro)
    } catch (error) {
        console.log('erro ao tentar calcular cobranca2020')
    }
}

  
module.exports = cobranca2020
  