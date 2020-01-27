const main = require('./apoio/main')
require('dotenv').config()


exports.handler = function(event, context, callback){
    const send = body => {
        callback(null, {
            statusCode:200,
            body: JSON.stringify(body)
        })
    }
    const getEmployees = async () => {
        if(event.queryStringParameters.mes != undefined || event.queryStringParameters.ano != undefined){
            const resultado = await main(event.queryStringParameters.mes,event.queryStringParameters.ano)
            try {
                send(resultado)
            } catch (error) {
                send(error)
            }
        }else{
            let resultado = "Necessário determinar o mes e o ano por query params para a função funcionar"
            try {
                send(resultado)
            } catch (error) {
                send(error)
            }
        }
    }
    if(event.httpMethod == 'GET' && event.headers.authorization == process.env.basicAuth){
        getEmployees()
    }else{
        send("Erro na autenticação ou no metodo HTTP!")
    }
}