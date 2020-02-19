const stringDate = require('@ziro/string-to-date')
const listarParcela2 = require('./listarParcela2')
const searchReajuste = require('./searchReajuste')

// Calculo do ultimo dia do mês
const calculoUltimoDia = (ano,mes) => {
    const finalMes = new Date((new Date(ano, mes))-1)
    return finalMes
} 

// Listagem dos pagamentos efetuados por funcionário
const pagamentos = (mesInicio, mesFim, parcela1, modeloParcela2, baseComissoes, baseAssessor,apelido, dataEntrou, dataSaiu, baseReajuste) => {
    let listPagamentos = []
    for(let i = mesInicio; i <= mesFim; i++){
        const [reajusteParcela1, reajusteModeloParcela2] = searchReajuste(apelido,new Date(2020,i), baseReajuste)
        if((stringDate(dataEntrou)).getFullYear() === 2020 && (stringDate(dataEntrou)).getMonth() === i){
            const coeficiente = (calculoUltimoDia(2020,i) - stringDate(dataEntrou)/calculoUltimoDia(2020,i))
            const parcela2 = listarParcela2(modeloParcela2, baseComissoes, baseAssessor, 2020, i, apelido)
            listPagamentos.push({
                ano:new Date().getFullYear(),
                mes: i ,
                apelido: apelido,
                parcela1: parcela1*coeficiente,
                parcela2: parcela2*coeficiente
            })
        }
        if(dataSaiu === '-' && stringDate(dataEntrou) <= new Date(2020,i) || stringDate(dataSaiu) <= new Date(2020, i) && stringDate(dataEntrou) >= new Date(2020,i)){
            const parcela2 = listarParcela2(reajusteModeloParcela2 || modeloParcela2, baseComissoes, baseAssessor, 2020, i, apelido)
            listPagamentos.push({
                ano:new Date().getFullYear(),
                mes: i ,
                apelido: apelido,
                parcela1: reajusteParcela1 || parcela1,
                parcela2: parcela2
            })
        }else{
            listPagamentos.push([])
        }
    }
    return listPagamentos
}

module.exports = pagamentos