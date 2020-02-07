//Lojistica - começou a ter comissão 09/2019
const calculoLogistica2019 = receita_mes_ziro => receita_mes_ziro * 0.005

// Agrupamento dos valores necessários para o calculo
const reduceBaseBoletos = (baseComissoes, ano, mes) => {
    const filtrado = baseComissoes.filter(item =>
        item.ano === ano && item.mes === mes
    )
    const receitas = filtrado.map(item => item.receita)
    const somaReceitas = receitas.reduce(
        (anterior, proximo) => anterior + proximo
    )
    return somaReceitas
}
  
// Função "main"
const logistica2019 = (baseComissoes, ano, mes) => {
    const receita_mes_ziro = reduceBaseBoletos(baseComissoes, ano, mes)
    return calculoLogistica2019(receita_mes_ziro)
}

module.exports = logistica2019