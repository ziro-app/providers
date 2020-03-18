const rp = require('request-promise-native')
const optionsBatchGet = require('../../googlesheets/optionsbatchGet')
const arrayObject = require('@ziro/array-object')
const assessor2020 = require('../assessores2020')
const logistica2019 = require('../logistica2019')
const cobranca2019 = require('../cobranca2019')
const vendas2019 = require('../vendas2019')
const assessor2019 = require('../assessores2019')
require('dotenv').config()

const testeSheets = (expected, calculate, titulo,ano,mes) => {
    const calculado = Math.round(calculate * 100) / 100
    const esperado = expected
    const diferenca = esperado - calculado
    console.log('\x1b[35m%s\x1b[0m',titulo)
    console.log(`Simulado: ${calculado}`)
    console.log(`Pago: ${esperado}`)
    console.log(`Diferença: ${diferenca}`)
    if(diferenca === 0) console.log('\x1b[32m%s\x1b[0m',`Comissão solicitada em ${mes}/${ano} foi simulado corretamente, o valor esperado era ${esperado}}`)
    else console.log('\x1b[31m%s\x1b[0m',`Simulação não está com o mesmo valor do esperado, diferença: ${diferenca}`)
}

const testeAssessor2020 = (baseComissoes) => {
    testeSheets(4266.89, assessor2020(baseComissoes, 2020, 1, 'Rubia'), 'Teste Assessor2020 Rubia 01/2020',2020,1)
}

const testLogistica2019 = (baseComissoes) => {
    testeSheets(243.22, logistica2019(baseComissoes, 2020, 1), 'Teste Logistica2019 01/2020',2020,1)
}

const testeCobrancas2019 = (baseComissoes) => {
    testeSheets(279.84, cobranca2019(baseComissoes, 2020, 1), 'Teste Cobranças2019 01/2020',2020,1)
}

const testeVendas2020 = (baseComissoes) => {
    testeSheets(1708.64, vendas2019(baseComissoes, 2020, 1, 'FRANÇA'), 'Teste Vendas2019 Davi 01/2020',2020,1)
}

const testeAssessor20191 = (baseComissoes) => {
    testeSheets(4520.12, assessor2019(baseComissoes, 2019, 10, 'Rubia'), 'Teste Assessor2019 Rubia 10/2019',2019,10)
}

const testeAssessor20192 = (baseComissoes) => {
    testeSheets(3511.88, assessor2019(baseComissoes, 2019, 9, 'Rubia'), 'Teste Assessor2019 Rubia 9/2019',2019,10)
}

const testeAssessor20193 = (baseComissoes) => {
    testeSheets(4413.01, assessor2019(baseComissoes, 2019, 8, 'Rubia'), 'Teste Assessor2019 Rubia 8/2019',2019,10)
}

const teste = async () => {
    try {
        const results = await rp(optionsBatchGet(['Base Comissões!A:Q','Apoio Comissões Assessores 2019!A:H']))
        const [dataBaseSheets,dataAssessores] = results.valueRanges 
        const baseComissoes = arrayObject(dataBaseSheets)
        const baseAssessores = arrayObject(dataAssessores)
        testeAssessor2020(baseComissoes)
        testLogistica2019(baseComissoes)
        testeCobrancas2019(baseComissoes)
        testeVendas2020(baseComissoes)
        testeAssessor20191(baseAssessores)
        testeAssessor20192(baseAssessores)
        testeAssessor20193(baseAssessores)
    } catch (error) {
        console.log(error)
    }
}

teste()