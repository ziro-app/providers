const rp = require('request-promise-native')
const arrayObject = require('@ziro/array-object')
const optionsGet = require('./googlesheets/optionsGetGoogle')
const listaParcela2 = require('./arrayParcelas')
require('dotenv').config()

const testeListarPessoas = async () => {
    try {
        const dataBaseSheets = await rp(optionsGet('Base Comissões!A:Q'))
        const dataAssessores = await rp(optionsGet('Apoio Comissões Assessores 2019!A:H'))
        const dataBasePessoas = await rp(optionsGet('Pessoas!A:V'))
        const baseComissoes = arrayObject(dataBaseSheets)
        const baseAssessores = arrayObject(dataAssessores)
        const basePessoas = await arrayObject(dataBasePessoas)
        const parcelas2 = listaParcela2(basePessoas, baseComissoes, baseAssessores)
        console.log(parcelas2)
    } catch (error) {
        console.log(error)
    }
}

testeListarPessoas()