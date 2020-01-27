const rp = require('request-promise-native');
const optionsGet = require('./apoio/optionsGetGoogle')
const listarApelidos = require('./apoio/listarApelidos')
const listarComissoesAssessores2 = require('./apoio/comissoes/asessores2')
const listarComissoesProspeccao = require('./apoio/comissoes/prospeccao1')
const listarCobranca1 = require('./apoio/comissoes/cobranca1')
const listarLojista1 = require('./apoio/comissoes/lojista1')
require('dotenv').config()


exports.handler = function(event, context, callback){
    const send = body => {
        callback(null, {
            statusCode:200,
            body: JSON.stringify(body)
        })
    }
    const getEmployees = async () => {
        const dataBaseAssessores = await rp(optionsGet("'Apoio Comissões Assessores'!A:E"))
        const dataBaseResto = await rp(optionsGet("'Apoio Comissões'!A:E"))
        const dataBaseFuncionarios = await rp(optionsGet("'Base Funcionários'!A:V"))
        const listaBaseFuncionarios = await listarApelidos(dataBaseFuncionarios,event.queryStringParameters.mes,event.queryStringParameters.ano)
        const comissoesAssessores2 = await listarComissoesAssessores2(listaBaseFuncionarios,dataBaseAssessores,event.queryStringParameters.mes,event.queryStringParameters.ano)
        const comissoesProspeccao1 = await listarComissoesProspeccao(comissoesAssessores2,dataBaseResto,event.queryStringParameters.mes,event.queryStringParameters.ano)
        const comissaoCobranca1 = await listarCobranca1(comissoesProspeccao1,dataBaseResto,event.queryStringParameters.mes,event.queryStringParameters.ano)
        const comissaoLojista1 = await listarLojista1(comissaoCobranca1,dataBaseResto,event.queryStringParameters.mes,event.queryStringParameters.ano)
        try {
            console.log(comissaoLojista1)
            send(comissaoLojista1)
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