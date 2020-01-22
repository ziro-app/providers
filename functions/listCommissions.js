const rp = require('request-promise-native');
const optionsGet = require('./apoio/optionsGetGoogle')
const listarComissoes = require('./apoio/listarComissoes')
require('dotenv').config()


exports.handler = function(event, context, callback){
    const send = body => {
        callback(null, {
            statusCode:200,
            body: JSON.stringify(body)
        })
    }
    const getEmployees = async () => {
        const dataAssessores = await rp(optionsGet("'Apoio Comissões Assessores'!A:G"))
            try {
                const dataResto = await rp(optionsGet("'Apoio Comissões Resto'!A:AV"))
                try {
                    const resultados = await listarComissoes(dataAssessores,dataResto,event.queryStringParameters.mes,event.queryStringParameters.ano)
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