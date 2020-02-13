const assessor2020 = require('./comissoes/assessores2020')
const assessor2019 = require('./comissoes/assessores2019')
const logistica2019 = require('./comissoes/logistica2019')
const cobranca2019 = require('./comissoes/cobranca2019')
const vendas2020 = require('./comissoes/vendas2020')

const transData = (dataSheets) => {
    const arrayDate = dataSheets.split('-')
    const data = new Date(arrayDate[0], arrayDate[1], arrayDate[2])
    return data
}

const calculoUltimoDia = (ano,mes) => {
    const finalMes = new Date((new Date(ano, mes))-1)
    return finalMes
}

let result = []
const listarApelidos = (base, ano, mes) => {
    const entrouNesseMes = base.filter(item => transData(item.dataInicio) > new Date(ano,mes))
    entrouNesseMes.map(item => result.push({apelido: item.apelido, escopo:item.escopo, ano:ano, mes:mes, parcela1:item.parcela1*(calculoUltimoDia(ano,mes).getDate() - transData(item.dataInicio).getDate())/calculoUltimoDia(ano,mes).getDate()}))
    const ativoNesseMes = base.filter(item => transData(item.dataInicio) < new Date(ano,mes) && item.dataFim === '-' || transData(item.dataInicio) < new Date(ano,mes) && transData(item.dataFim) < new Date(ano,mes))
    ativoNesseMes.map(item => result.push({apelido:item.apelido, escopo:item.escopo, ano:ano, mes:mes, parcela1:item.parcela1}))
    return result
}

const listarParcela2 = (baseApelidos,baseComissoes, baseAssessor, ano, mes) => {
    let listarParcela2 = listarApelidos(baseApelidos)
    listarParcela2.map(item => {
        if(item.modeloParcela2 === 'assessor2020'){
            item.parcela2 = assessor2020(baseComissoes, ano, mes, item.apelido)
        }
        if(item.modeloParcela === 'assessor2019'){
            item.parcela2 = assessor2019(baseAssessor, ano, mes, item.apelido)
        }
        if(item.modeloParcela === 'cobranca2019'){
            item.parcela2 = cobranca2019(baseComissoes, ano, mes)
        }
        if(item.modeloParcela === 'lojistica2019'){
            item.parcela2 = logistica2019(baseAssessor, ano, mes)
        }
        if(item.modeloParcela === 'vendas2020'){
            item.parcela2 = vendas2020(baseAssessor, ano, mes, item.apelido)
        }
    })
    return listarParcela2
}

module.exports = listarParcela2