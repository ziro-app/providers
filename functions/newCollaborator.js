const rp = require('request-promise-native')
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
        const reqBodyJson = JSON.parse(event.body)
        const body = [[
            reqBodyJson.NomeCompleto,
            reqBodyJson.Apelido,
            reqBodyJson.Nascimento,
            reqBodyJson.EmailPessoal,
            reqBodyJson.EmailEmpresa,
            reqBodyJson.TelefonePessoal,
            reqBodyJson.TelefoneZiro,
            reqBodyJson.SalarioBase,
            reqBodyJson.Comissionado,
            reqBodyJson.Funcao,
            reqBodyJson.CPF,
            reqBodyJson.RG,
            reqBodyJson.OrgaoExp,
            reqBodyJson.DataExp,
            reqBodyJson.EstadoCivil,
            reqBodyJson.Endereco,
            ' ',
            `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDay()}`,
            '-',
            reqBodyJson.InformacoesAdicionais,
        ]]
        const optionsGoogle = await optionsPost(body)
        try {
            const resultado = await rp(optionsGoogle)
            try {
                if(event.headers.authorization == process.env.basicAuth){
                    send(resultado)
                }else{
                    send('Sem autorização para essa aplicação')
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