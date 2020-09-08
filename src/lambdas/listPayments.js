const rp = require('request-promise-native')
const arrayObject = require('@ziro/array-object')
const listaParcela = require('../apoio/listarParcelas')
const optionsBatchGet = require('../apoio/googlesheets/optionsbatchGet')
const main = require('../templates/main')
require('dotenv').config()

const getEmployees = async () => {
    try {
        const results = await rp(optionsBatchGet(['Base Comissões!A:U','Apoio Comissões Assessores 2019!A:H','Pessoas!A:V', 'Reajustes!A:G', 'Apoio Comissões Atendimento 2020!A:C']))
        const [dataBaseSheets,dataAssessores,dataBasePessoas, dataBaseReajustes, dataBaseTransacoes] = results.valueRanges 
        const baseComissoes = arrayObject(dataBaseSheets)
        const baseAssessores = arrayObject(dataAssessores)
        const basePessoas = arrayObject(dataBasePessoas)
        const baseReajustes = arrayObject(dataBaseReajustes)
        const baseTransacoes = arrayObject(dataBaseTransacoes)
        const parcelas2 = listaParcela(basePessoas, baseComissoes, baseAssessores, baseReajustes, baseTransacoes)
        return {
            statusCode: 200,
            body: JSON.stringify(parcelas2.flat())
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify(error)
        }
    }
}

module.exports = { handler: main(getEmployees) }