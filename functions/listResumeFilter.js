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
        const resultado = await main(event.queryStringParameters.mes,event.queryStringParameters.ano)
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