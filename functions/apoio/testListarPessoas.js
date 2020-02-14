const rp = require('request-promise-native')
const arrayObject = require('@ziro/array-object')
const optionsGet = require('./googlesheets/optionsGetGoogle')
const listaParcela2 = require('./arrayParcelas')
require('dotenv').config()

const testeListarPessoas = async () => {
    try {
        const dataBaseSheetsRequest = await rp(optionsGet('Base Comissões!A:Q'))
        const dataAssessoresRequest = await rp(optionsGet('Apoio Comissões Assessores 2019!A:H'))
        const dataBasePessoasRequest = await rp(optionsGet('Pessoas!A:V'))
        const dataBaseReajusteRequest = await rp(optionsGet('Reajustes!A:G'))
        Promise.all([dataBaseSheetsRequest,dataAssessoresRequest,dataBasePessoasRequest,dataBaseReajusteRequest]).then(results => {
            const [dataBaseSheets,dataAssessores,dataBasePessoas, baseReajuste] = results
            const baseComissoes = arrayObject(dataBaseSheets)
            const baseAssessores = arrayObject(dataAssessores)
            const basePessoas = arrayObject(dataBasePessoas)
            const parcelas2 = listaParcela2(basePessoas, baseComissoes, baseAssessores,baseReajuste)
            console.log(parcelas2)
        })
    } catch (error) {
        console.log(error)
    }
}

testeListarPessoas()