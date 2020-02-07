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
        const ano = event.queryStringParameters.ano
        const mes = event.queryStringParameters.mes
        const assessor = event.queryStringParameters.assessor
        const resultado = await main(ano,mes,assessor)
        try {
            send(resultado)
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