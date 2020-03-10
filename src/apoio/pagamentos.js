const stringDate = require('@ziro/string-to-date')
const calcCoeficiente = require('./coeficienteMes')
const calcCoeficienteSaiu = require('./coeficienteSaiu')
const listarParcela2 = require('./parcela2')
const searchReajuste = require('./searchReajuste')

// Listagem dos pagamentos efetuados por funcionário
const pagamentos = (mesInicio, mesFim, parcela1, modeloParcela2, baseComissoes, baseAssessor,apelido, dataEntrou, dataSaiu, baseReajuste) => {
    let listPagamentos = []
    for(let i = mesInicio; i <= mesFim; i++){
        const entrouEsseMes = (stringDate(dataEntrou)).getFullYear() === new Date().getFullYear() && (stringDate(dataEntrou)).getMonth()+1 === i
        const {reajusteParcela1, reajusteModeloParcela2} = searchReajuste(apelido,new Date(new Date().getFullYear(),i), baseReajuste)
        if(entrouEsseMes){
            const coeficiente = calcCoeficiente(dataEntrou)
            const parcela2 = listarParcela2(reajusteModeloParcela2 || modeloParcela2, baseComissoes, baseAssessor, new Date().getFullYear(), i, apelido)
            listPagamentos.push({
                ano:new Date().getFullYear(),
                mes: i ,
                apelido: apelido,
                parcela1: reajusteParcela1 || parcela1*coeficiente,
                parcela2: parcela2
            })
        }
        const saiuEsseMes = (stringDate(dataSaiu)).getFullYear() === new Date().getFullYear() && (stringDate(dataSaiu)).getMonth()+1 === i
        if(saiuEsseMes){
            const coeficiente = calcCoeficienteSaiu(dataSaiu)
            const parcela2 = listarParcela2(reajusteModeloParcela2 || modeloParcela2, baseComissoes, baseAssessor, new Date().getFullYear(), i, apelido)
            listPagamentos.push({
                ano:new Date().getFullYear(),
                mes: i ,
                apelido: apelido,
                parcela1: reajusteParcela1 || parcela1*coeficiente,
                parcela2: parcela2
            })
        }
        const continuaNaZiro =  dataSaiu === '-' && stringDate(dataEntrou) <= new Date(new Date().getFullYear(),i) || dataSaiu !== '-' && stringDate(dataSaiu) >= new Date(new Date().getFullYear(),i) && stringDate(dataEntrou) <= new Date(new Date().getFullYear(),i)
        if(!entrouEsseMes && !saiuEsseMes && continuaNaZiro){
            const parcela2 = listarParcela2(reajusteModeloParcela2 || modeloParcela2 || 'nenhum', baseComissoes, baseAssessor, new Date().getFullYear(), i, apelido)
            listPagamentos.push({
                ano:new Date().getFullYear(),
                mes: i,
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