const assessor2020 = require('./comissoes/assessores2020')
const assessor2019 = require('./comissoes/assessores2019')
const logistica2019 = require('./comissoes/logistica2019')
const cobranca2019 = require('./comissoes/cobranca2019')
const vendas2019 = require('./comissoes/vendas2019')
const prospeccao2020 = require('./comissoes/prospeccao2020')
const assessoresCOVID = require('./comissoes/assessoresCOVID')
const atendimento2020 = require('./comissoes/atendimento2020')
const assessor20202 = require('./comissoes/assessores20202')
const logistica2020 = require('./comissoes/logistica2020')
const cobranca2020 = require('./comissoes/cobranca2020')
const vendedores2020 = require('./comissoes/vendedores2020')

// Condicional de chamada da função de parcela2
const listarParcela2 = (modeloParcela2, baseComissoes, baseAssessor, ano,mes,apelido, baseTransacoes, baseVendedores, baseFabricantes) => {
    if(modeloParcela2 === 'nenhum') return 0
    if(modeloParcela2 === 'assessoria2020') return assessor2020(baseComissoes, ano, mes, apelido)
    if(modeloParcela2 === 'assessoria2019') return assessor2019(baseAssessor, ano, mes, apelido)
    if(modeloParcela2 === 'cobranca2019') return cobranca2019(baseComissoes, ano, mes)
    if(modeloParcela2 === 'logistica2019') return logistica2019(baseComissoes, ano, mes)
    if(modeloParcela2 === 'vendas2019') return vendas2019(baseComissoes, ano, mes, apelido)
    if(modeloParcela2 === 'prospeccao2020') return prospeccao2020(baseComissoes, ano, mes)
    if(modeloParcela2 === 'assessoresCOVID') return assessoresCOVID(baseComissoes, ano, mes, apelido)
    if(modeloParcela2 === 'atendimento2020') return atendimento2020(baseTransacoes, ano, mes)
    if(modeloParcela2 === 'assessores20202') return assessor20202(baseComissoes, ano, mes, apelido)
    if(modeloParcela2 === 'logistica2020') return logistica2020(baseComissoes, ano, mes, apelido)
    if(modeloParcela2 === 'cobranca2020') return cobranca2020(baseComissoes, ano, mes)
    if(modeloParcela2 === 'vendedores2020') return vendedores2020(baseTransacoes, baseVendedores, baseFabricantes, mes, ano, apelido)
    return 0
}

module.exports = listarParcela2