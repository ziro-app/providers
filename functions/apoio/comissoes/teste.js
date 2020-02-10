const rp = require('request-promise-native')
const optionsGet = require('../googlesheets/optionsGetGoogle')
const arrayObject = require('@ziro/array-object')
const assessor2020 = require('./assessores2020')
const logistica2019 = require('./logistica2019')
const cobranca2019 = require('./cobranca2019')
require('dotenv').config()

const testeAssessor2020 = async (baseComissoes) => {
    const calculate = assessor2020(baseComissoes, 2020, 1, 'Rubia')
    const expected = 53586.56099999998
    console.log('Teste Assessor 2020')
    console.log('Calculado:', calculate, 'Esperado:', expected)
    console.log('Resultado do teste:', calculate === expected)
}

const testLogistica2019 = async (baseComissoes) => {
    const calculate = logistica2019(baseComissoes, 2020, 1)
    const expected = 243.10709999999992
    console.log('Teste Logistica 2019')
    console.log('Calculado:', calculate, 'Esperado:', expected)
    console.log('Resultado do teste:', calculate === expected)
}

const testeVendas2019 = async (baseComissoes) => {
    const calculate = cobranca2019(baseComissoes, 2020, 1)
    const expected = 277.4078999999999
    console.log('Teste Cobranças 2019')
    console.log('Calculado:', calculate, 'Esperado:', expected)
    console.log('Resultado do teste:', calculate === expected)
}

const teste = async () => {
    try {
        const dataBaseSheets = await rp(optionsGet('\'Base Comissões\'!A:N'))
        const baseComissoes = await arrayObject(dataBaseSheets)
        Promise.all([testeAssessor2020(baseComissoes),testLogistica2019(baseComissoes),testeVendas2019(baseComissoes)])
    } catch (error) {
        console.log(error)
    }
}

teste()