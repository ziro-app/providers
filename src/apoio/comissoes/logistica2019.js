//Lojistica - começou a ter comissão 09/2019
const calculoLogistica2019 = receita_mes_ziro => receita_mes_ziro * 0.005

// Agrupamento dos valores necessários para o calculo
const receitas = (baseComissoes, ano, mes) => {
    if(baseComissoes){
        const filtrado = baseComissoes.filter(item =>
            item.ano === ano && item.mes === mes
        )
        const receitas = filtrado.map(item => item.receita)
        if(receitas[0] != undefined){
            const somaRecebido = receitas.reduce(
                (anterior, proximo) => anterior + proximo
            )
            return somaRecebido
        }else{
            return []
        }
    }else{
        return []
    }
}
  
// Função "main"
const logistica2019 = (baseComissoes, ano, mes) => {
    const receita_mes_ziro = receitas(baseComissoes, ano, mes)
    return Math.round(calculoLogistica2019(receita_mes_ziro) * 100) / 100
}

module.exports = logistica2019