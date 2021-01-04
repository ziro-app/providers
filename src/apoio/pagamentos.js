const calcCoeficiente = require('./coeficienteMes')
const listarParcela2 = require('./parcela2')
const searchReajuste = require('./searchReajuste')

// Lmesstagem dos pagamentos efetuados por funcionário
const pagamentos = (mesInicio, mesFim, parcela1, modeloParcela2, baseComissoes, baseAssessor,apelido, dataEntrou, dataSaiu, baseReajuste, baseTransacoes, baseVendedores, baseFabricantes, escopo) => {
    let listPagamentos = []
    for(let ano = 2020; ano <= new Date().getFullYear(); ano++){
        for(let mes = mesInicio; mes <= mesFim; mes++){
            const {reajusteParcela1, reajusteModeloParcela2, reajusteEscopo} = searchReajuste(apelido, new Date(ano,mes), baseReajuste)
            const coeficiente = calcCoeficiente(dataEntrou,dataSaiu,mes,apelido)
            if(coeficiente){
                const resultParcela1 = Math.round((reajusteParcela1 || parcela1)*coeficiente * 100) / 100
                const resultParcela2 = Math.round(listarParcela2(reajusteModeloParcela2 || modeloParcela2, baseComissoes, baseAssessor, ano, mes, apelido, baseTransacoes, baseVendedores, baseFabricantes)*100)/100
                listPagamentos.push(
                    {
                        ano: ano,
                        mes: mes,
                        apelido: apelido,
                        parcela1: resultParcela1,
                        parcela2: resultParcela2,
                        modeloParcela2: reajusteModeloParcela2 || modeloParcela2,
                        escopo: reajusteEscopo || escopo
                    }
                )
            }else{
                listPagamentos.push([])
            }
        }
    }
    return listPagamentos
}

module.exports = pagamentos