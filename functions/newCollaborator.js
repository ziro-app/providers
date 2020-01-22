const rp = require('request-promise-native');
const optionsPost = require('./apoio/optionsPostGoogle')
require('dotenv').config()

exports.handler = function(event, context, callback){
    const send = body => {
        callback(null, {
            statusCode:200,
            body: JSON.stringify(body)
        })
    }
    const getEmployees = async () => {
        const body = [[
            event.queryStringParameters.NomeCompleto,
            event.queryStringParameters.Apelido,
            event.queryStringParameters.Nascimento,
            event.queryStringParameters.EmailPessoal,
            event.queryStringParameters.EmailEmpresa,
            event.queryStringParameters.TelefonePessoal,
            event.queryStringParameters.TelefoneZiro,
            event.queryStringParameters.SalarioBase,
            event.queryStringParameters.Comissionado,
            event.queryStringParameters.Funcao,
            event.queryStringParameters.CPF,
            event.queryStringParameters.RG,
            event.queryStringParameters.OrgaoExp,
            event.queryStringParameters.DataExp,
            event.queryStringParameters.EstadoCivil,
            event.queryStringParameters.Endereco,
            " ",
            `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDay()}`,
            "-",
            event.queryStringParameters.InformacoesAdicionais,
        ]]
        const optionsGoogle = await optionsPost(body)
            try {
                const resultado = await rp(optionsGoogle)
                try {
                    if(event.headers.authorization == process.env.basicAuth){
                        send(resultado)
                    }else{
                        send("Sem autorização para essa aplicação")
                    }
                } catch(error) {
                    send(error)
                }
            } catch (error) {
                send(error)
            }
    }
    if(event.httpMethod == 'POST'){
        getEmployees()
    }
}