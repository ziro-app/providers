const rp = require('request-promise-native');
const optionsGet = require('./apoio/optionsGetGoogle')
const listarPagamentosBase = require('./apoio/listarPagamentosBase')
require('dotenv').config()


exports.handler = function(event, context, callback){
    const send = body => {
        callback(null, {
            statusCode:200,
            body: JSON.stringify(body)
        })
    }
    const getEmployees = async () => {
        const optionsGoogle = await optionsGet("'Base Funcionários'!A:T")
        try {
            const data = await rp(optionsGoogle)
            try {
                const resultados = await listarPagamentosBase(data,event.queryStringParameters.mes,event.queryStringParameters.ano)
                    try {
                        if(event.headers.authorization == process.env.basicAuth){
                            send(resultados)
                        }else{
                            send("Sem autorização para essa aplicação")
                        }
                    } catch (error) {
                        send(error)
                    }
            } catch (error) {
                send(error)
            }
        } catch (error) {
            send(error)
        }
    }
    if(event.httpMethod == 'GET'){
        getEmployees()
    }
}