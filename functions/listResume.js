const rp = require('request-promise-native');
const optionsGet = require('./apoio/optionsGetGoogle')
const listarResumo = require('./apoio/listarResumo')
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
                const data = await rp(optionsGet(`'Resumo ${event.queryStringParameters.ano}'!B4:F`))
                const resultado = listarResumo(data,event.queryStringParameters.mes)
                send(resultado)
            } catch (error) {
                send(error)
            }
        }
    if(event.httpMethod == 'GET'){
        getEmployees()
    }
}