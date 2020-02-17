const rp = require('request-promise-native')
const arrayObject = require('@ziro/array-object')
const listaParcela2 = require('./arrayParcelas')
const optionsBatchGet = require('./googlesheets/optionsbatchGet')
require('dotenv').config()

const testeListarPessoas = async () => {
    try {
        const results = await rp(optionsBatchGet(['Base Comissões!A:Q','Apoio Comissões Assessores 2019!A:H','Pessoas!A:V', 'Reajustes!A:G']))
        const [dataBaseSheets,dataAssessores,dataBasePessoas, dataBaseReajustes] = results.valueRanges 
        const baseComissoes = arrayObject(dataBaseSheets)
        const baseAssessores = arrayObject(dataAssessores)
        const basePessoas = arrayObject(dataBasePessoas)
        const baseReajustes = arrayObject(dataBaseReajustes)
        const parcelas2 = listaParcela2(basePessoas, baseComissoes, baseAssessores,baseReajustes)
        console.log(parcelas2)
    } catch (error) {
        console.log(error)
    }
}

testeListarPessoas()