const rp = require('request-promise-native')
const arrayObject = require('@ziro/array-object')
const listaParcela = require('../apoio/listarParcelas')
const optionsBatchGet = require('../apoio/googlesheets/optionsbatchGet')
const objectToArray = require('@ziro/object-array')
const main = require('../templates/main')
require('dotenv').config()

const getEmployees = async () => {
    try {
        const results = await rp(optionsBatchGet(['Base Comissões!A:Q','Apoio Comissões Assessores 2019!A:H','Pessoas!A:V', 'Reajustes!A:G']))
        const [dataBaseSheets,dataAssessores,dataBasePessoas, dataBaseReajustes] = results.valueRanges 
        const baseComissoes = arrayObject(dataBaseSheets)
        const baseAssessores = arrayObject(dataAssessores)
        const basePessoas = arrayObject(dataBasePessoas)
        const baseReajustes = arrayObject(dataBaseReajustes)
        const parcelas2 = listaParcela(basePessoas, baseComissoes, baseAssessores, baseReajustes)
        const sheetsData = objectToArray(parcelas2)
        return {
            statusCode: 200,
            body: JSON.stringify(sheetsData)
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify(error)
        }
    }
}

module.exports = { handler: main(getEmployees) }