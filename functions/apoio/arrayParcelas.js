const assessor2020 = require('./comissoes/assessores2020')
const assessor2019 = require('./comissoes/assessores2019')
const logistica2019 = require('./comissoes/logistica2019')
const cobranca2019 = require('./comissoes/cobranca2019')
const vendas2020 = require('./comissoes/vendas2020')

// const transData = (dataSheets) => {
//     const arrayDate = dataSheets.split('-')
//     const data = new Date(arrayDate[0], arrayDate[1], arrayDate[2])
//     return data
// }

// const calculoUltimoDia = (ano,mes) => {
//     const finalMes = new Date((new Date(ano, mes))-1)
//     return finalMes
// }

let listPagamentos = []
const pagamentos = (dataInicio, dataFim, parcela1, modeloParcela2, baseComissoes, baseAssessor,apelido) => {
    for(let i = dataInicio; i <= dataFim; i++){
        if(modeloParcela2 === '-'){
            listPagamentos.push({
                ano:2020,
                mes: i ,
                parcela1:parcela1,
                parcela2:listarParcela2(modeloParcela2, baseComissoes, baseAssessor, 2020, i, apelido)
            })
        }
    }
    return listPagamentos
    
}

const listarPessoas = (basePessoas, baseComissoes, baseAssessor) => {
    const listaPessoas = basePessoas.map(pessoa => {
        const arrayPagamento = pagamentos(new Date(2020,1).getMonth(), new Date().getMonth()+1, pessoa.parcela1, pessoa.modeloParcela2, baseComissoes, baseAssessor, pessoa.apelido)
        return arrayPagamento
    })
    return listaPessoas
}

const listarParcela2 = (modeloParcela2, baseComissoes, baseAssessor, ano,mes,apelido) => {
    if(modeloParcela2 === '-') return 0
    if(modeloParcela2 === 'assessor2020') return assessor2020(baseComissoes, ano, mes, apelido)
    if(modeloParcela2 === 'assessor2019') return assessor2019(baseAssessor, ano, mes, apelido)
    if(modeloParcela2 === 'cobranca2019') return cobranca2019(baseComissoes, ano, mes)
    if(modeloParcela2 === 'lojistica2019') return logistica2019(baseComissoes, ano, mes)
    if(modeloParcela2 === 'vendas2020') return vendas2020(baseComissoes, ano, mes, apelido)
}

module.exports = listarPessoas