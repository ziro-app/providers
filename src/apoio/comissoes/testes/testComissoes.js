const rp = require('request-promise-native')
const optionsBatchGet = require('../../googlesheets/optionsbatchGet')
const arrayObject = require('@ziro/array-object')
const assessor2020 = require('../assessores2020')
const logistica2019 = require('../logistica2019')
const cobranca2019 = require('../cobranca2019')
const vendas2019 = require('../vendas2019')
const assessor2019 = require('../assessores2019')
require('dotenv').config()

const testeSheets = (expected, calculate, titulo) => {
    const calculado = calculate
    const esperado = expected
    console.log(titulo)
    console.log('Calculado', calculado, 'Esperado', esperado)
    if(calculado === esperado) console.log('Resultado do teste:', 'PASSOU!!! :)')
    else console.log('Resultado do teste:', 'NÃO PASSOU')
}

const testeAssessor2020 = (baseComissoes) => {
    testeSheets(2053.01, assessor2020(baseComissoes, 2020, 2, 'Rubia'), 'Teste Assessor 2020')
}

const testLogistica2019 = (baseComissoes) => {
    testeSheets(243.2236499999999, logistica2019(baseComissoes, 2020, 1), 'Teste Logistica 2019')
}

const testeCobrancas2019 = (baseComissoes) => {
    testeSheets(280.0378699999999, cobranca2019(baseComissoes, 2020, 1), 'Teste Cobranças 2019')
}

const testeVendas2020 = (baseComissoes) => {
    testeSheets(1708.635, vendas2019(baseComissoes, 2020, 1, 'FRANÇA'), 'Teste Vendas 2020')
}

const testeAssessor2019 = (baseComissoes) => {
    testeSheets(4199.271999999999, assessor2019(baseComissoes, 2019, 11, 'Rubia'), 'Teste Assessor 2019')
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
        testeAssessor2019(baseAssessores)
    } catch (error) {
        console.log(error)
    }
}

teste()