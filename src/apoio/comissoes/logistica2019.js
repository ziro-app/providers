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
    try {
        const receita_mes_ziro = receitas(baseComissoes, ano, mes)
        return calculoLogistica2019(receita_mes_ziro)
    } catch (error) {
        console.log('erro no calculo de logistica 2019')
    }
}

module.exports = logistica2019