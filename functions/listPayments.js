const listPayments = require('./apoio/testListarPessoas')
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
            const listPagamentos = await listPayments()
            send(listPagamentos)
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