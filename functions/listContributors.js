const rp = require('request-promise-native');
const optionsGet = require('./apoio/optionsGetGoogle')
const listarApelidos = require('./apoio/listarApelidos')
const listarComissoesAssessores2 = require('./apoio/comissoes/asessores2')
const listarComissoesProspeccao = require('./apoio/comissoes/prospeccao1')
require('dotenv').config()


exports.handler = function(event, context, callback){
    const send = body => {
        callback(null, {
            statusCode:200,
            body: JSON.stringify(body)
        })
    }
    const getEmployees = async () => {
        const optionsGoogleBaseFuncionarios = await optionsGet("'Base Funcionários'!A:V")
        const optionsGoogleBaseAssessores = await optionsGet("'Apoio Comissões Assessores'!A:E")
        const optionsGoogleBaseResto = await optionsGet("'Apoio Comissões'!A:E")
        const dataBaseAssessores = await rp(optionsGoogleBaseAssessores)
        const dataBaseResto = await rp(optionsGoogleBaseResto)
        const dataBaseFuncionarios = await rp(optionsGoogleBaseFuncionarios)
        const listaBaseFuncionarios = await listarApelidos(dataBaseFuncionarios,event.queryStringParameters.mes,event.queryStringParameters.ano)
        const comissoesAssessores2 = await listarComissoesAssessores2(listaBaseFuncionarios,dataBaseAssessores,event.queryStringParameters.mes,event.queryStringParameters.ano)
        const comissoesProspeccao = await listarComissoesProspeccao(comissoesAssessores2,dataBaseResto,event.queryStringParameters.mes,event.queryStringParameters.ano)
        try {
            console.log(comissoesProspeccao)
            send(comissoesProspeccao)
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