//Logistica - começou a ter comissão 09/2019
const receitas = (baseComissoes, ano, mes) => {
    const filtrado = baseComissoes.filter(item =>
        item.ano === ano && item.mes === mes
    )
    const receitas = filtrado.map(item => item.receita)
    const somaReceitas = receitas.reduce(
        (anterior, proximo) => anterior + proximo
    )
    return somaReceitas
}

const comissaoLogistica = receita_mes_ziro => receita_mes_ziro * 0.005
  
// Função "main"
const logistica2019 = (baseComissoes, ano, mes) => {
    const receita_mes_ziro = receitas(baseComissoes, ano, mes)
    return comissaoLogistica(receita_mes_ziro)
}

module.exports = logistica2019