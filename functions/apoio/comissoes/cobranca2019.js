//Cobranca começou a ter comissão 09/2019
const calculoCobranca2019 = cobrancas_mes => {
    return cobrancas_mes * 0.007
}

const recebimento = (baseComissoes, ano, mes) => {
    const filtrado = baseComissoes.filter(item =>
        item.anoRecebido === ano && item.mesRecebido === mes
    )
    const recebido = filtrado.map(item => item.recebido)
    const somaRecebido = recebido.reduce(
        (anterior, proximo) => anterior + proximo
    )
    return somaRecebido
}
  
// Função "main"
const cobranca2019 = (baseComissoes, ano, mes) => {
    const receita_mes_ziro = recebimento(baseComissoes, ano, mes)
    return calculoCobranca2019(receita_mes_ziro)
}

  
module.exports = cobranca2019
  