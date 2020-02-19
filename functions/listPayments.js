const rp = require('request-promise-native')
const arrayObject = require('@ziro/array-object')
const listaParcela = require('./apoio/listarParcelas')
const optionsBatchGet = require('./apoio/googlesheets/optionsbatchGet')
require('dotenv').config()


exports.handler = function(event, context, callback){
    const send = body => {
        callback(null, {
            statusCode:200,
            body: JSON.stringify(body)
        })
    }
    const getEmployees = async () => {
        try {
            const results = await rp(optionsBatchGet(['Base Comissões!A:Q','Apoio Comissões Assessores 2019!A:H','Pessoas!A:V', 'Reajustes!A:G']))
            const [dataBaseSheets,dataAssessores,dataBasePessoas, dataBaseReajustes] = results.valueRanges 
            const baseComissoes = arrayObject(dataBaseSheets)
            const baseAssessores = arrayObject(dataAssessores)
            const basePessoas = arrayObject(dataBasePessoas)
            const baseReajustes = arrayObject(dataBaseReajustes)
            const parcelas2 = listaParcela(basePessoas, baseComissoes, baseAssessores, baseReajustes)
            send(parcelas2)
        } catch (error) {
            send(error)
        }
    }
    if(event.httpMethod == 'GET' && event.headers.authorization == process.env.basicAuth){
        getEmployees()
    }else{
        send('Erro na autenticação ou no metodo HTTP!')
    }
}