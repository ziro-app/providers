//Começou junto coma  entrada do Ronaldo
const calculoProspeccao2020 = receita_mes_ziro => receita_mes_ziro * 0.01

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
const prospeccao2020 = (baseComissoes, ano, mes) => {
    const receita_mes_ziro = receitas(baseComissoes, ano, mes)
    return calculoProspeccao2020(receita_mes_ziro)
}

module.exports = prospeccao2020