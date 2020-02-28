const stringDate = require('@ziro/string-to-date')
const listarParcela2 = require('./parcela2')
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
        const entrouEsseMes = (stringDate(dataEntrou)).getFullYear() === new Date().getFullYear() && (stringDate(dataEntrou)).getMonth()+1 === i
        const [reajusteParcela1, reajusteModeloParcela2] = searchReajuste(apelido,new Date(new Date().getFullYear(),i), baseReajuste)
        if(entrouEsseMes){
            const coeficiente = (new Date(calculoUltimoDia(new Date().getFullYear(),i) - stringDate(dataEntrou)).getDate())/(new Date(calculoUltimoDia(new Date().getFullYear(),i))).getDate()
            const parcela2 = listarParcela2(modeloParcela2, baseComissoes, baseAssessor, new Date().getFullYear(), i, apelido)
            listPagamentos.push({
                ano:new Date().getFullYear(),
                mes: i ,
                apelido: apelido,
                parcela1: parcela1*coeficiente,
                parcela2: parcela2
            })
        }
        if(!entrouEsseMes && dataSaiu === '-' && stringDate(dataEntrou) <= new Date(new Date().getFullYear(),i) || !entrouEsseMes && stringDate(dataSaiu) <= new Date(new Date().getFullYear(), i) && stringDate(dataEntrou) >= new Date(new Date().getFullYear(),i)){
            const parcela2 = listarParcela2(reajusteModeloParcela2 || modeloParcela2, baseComissoes, baseAssessor, new Date().getFullYear(), i, apelido)
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