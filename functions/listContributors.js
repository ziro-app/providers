const rp = require('request-promise-native');
const optionsGet = require('./apoio/optionsGetGoogle')
const listarApelidos = require('./apoio/listarApelidos')
const listarComissoes = require('./apoio/comissoes/asessores2')
require('dotenv').config()


exports.handler = function(event, context, callback){
    const send = body => {
        callback(null, {
            statusCode:200,
            body: JSON.stringify(body)
        })
    }
    const getEmployees = async () => {
        const optionsGoogle = await optionsGet("'Base Funcionários'!A:V")
        const optionsGoogleBaseAssessores = await optionsGet("'Apoio Comissões Assessores'!A:E")
        const dataBaseAssessores = await rp(optionsGoogleBaseAssessores)
        const data = await rp(optionsGoogle)
        const listaBaseFuncionarios = await listarApelidos(data,event.queryStringParameters.mes,event.queryStringParameters.ano)
        const comissoes = await listarComissoes(listaBaseFuncionarios,dataBaseAssessores,event.queryStringParameters.mes,event.queryStringParameters.ano)
        try {
            console.log(comissoes)
            send(comissoes)
        } catch (error) {
            send(error)
        }
    }
    if(event.httpMethod == 'GET' && event.headers.authorization == process.env.basicAuth){
        getEmployees()
    }else{
        send("Erro na autenticação ou no metodo HTTP!")
    }
}