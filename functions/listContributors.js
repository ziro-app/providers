const rp = require('request-promise-native');
const optionsGet = require('./apoio/optionsGetGoogle')
const listarApelidos = require('./apoio/listarApelidos')
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
                let resultados = await listarApelidos(data,event.queryStringParameters.mes,event.queryStringParameters.ano)
                try {
                    if(event.headers.authorization == process.env.basicAuth){
                        console.log(event)
                        send(resultados)
                    }else{
                        send("Sem autorização para essa aplicação")
                    }
                } catch (error) {
                    send("Error na função listar apelidos",error)
                }
            } catch (error) {
                console.log("Error na requisição do Sheets", error)
                send(error)
            }
        } catch (error) {
            console.log("Erro no Options do Sheets", error)
            send(error)
        }
    }
    if(event.httpMethod == 'GET'){
        getEmployees()
    }
}