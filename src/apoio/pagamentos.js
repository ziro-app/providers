const calcCoeficiente = require('./coeficienteMes')
const listarParcela2 = require('./parcela2')
const searchReajuste = require('./searchReajuste')

// Listagem dos pagamentos efetuados por funcionário
const pagamentos = (mesInicio, mesFim, parcela1, modeloParcela2, baseComissoes, baseAssessor,apelido, dataEntrou, dataSaiu, baseReajuste) => {
    let listPagamentos = []
    for(let i = mesInicio; i <= mesFim; i++){
        const {reajusteParcela1, reajusteModeloParcela2} = searchReajuste(apelido,new Date(new Date().getFullYear(),i), baseReajuste)
        const coeficiente = calcCoeficiente(dataEntrou,dataSaiu,i)
        if(coeficiente){
            const parcela2 = listarParcela2(reajusteModeloParcela2 || modeloParcela2, baseComissoes, baseAssessor, new Date().getFullYear(), i, apelido)
            listPagamentos.push({
                ano:new Date().getFullYear(),
                mes: i ,
                apelido: apelido,
                parcela1: Math.round((reajusteParcela1*coeficiente || parcela1*coeficiente) * 100) / 100,
                parcela2: Math.round(parcela2 * 100) / 100
            })
        }else{
            listPagamentos.push([])
        }
    }
    return listPagamentos
}

module.exports = pagamentos