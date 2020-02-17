const assessor2020 = require('./comissoes/assessores2020')
const assessor2019 = require('./comissoes/assessores2019')
const logistica2019 = require('./comissoes/logistica2019')
const cobranca2019 = require('./comissoes/cobranca2019')
const vendas2020 = require('./comissoes/vendas2020')

// Condicional de chamada da função de parcela2
const listarParcela2 = (modeloParcela2, baseComissoes, baseAssessor, ano,mes,apelido) => {
    if(modeloParcela2 === '-') return 0
    if(modeloParcela2 === 'assessor2020') return assessor2020(baseComissoes, ano, mes, apelido)
    if(modeloParcela2 === 'assessor2019') return assessor2019(baseAssessor, ano, mes, apelido)
    if(modeloParcela2 === 'cobranca2019') return cobranca2019(baseComissoes, ano, mes)
    if(modeloParcela2 === 'lojistica2019') return logistica2019(baseComissoes, ano, mes)
    if(modeloParcela2 === 'vendas2020') return vendas2020(baseComissoes, ano, mes, apelido)
}

module.exports = listarParcela2