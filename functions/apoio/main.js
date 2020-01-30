const rp = require('request-promise-native')
const optionsGet = require('./optionsGetGoogle')
const listarApelidos = require('./listarApelidos')
const listarComissoesAssessores1 = require('./comissoes/assessores2019')
const listarComissoesAssessores2 = require('./comissoes/asessores2020')
// const listarComissoesProspeccao = require('./comissoes/prospeccao1')
// const listarCobranca1 = require('./comissoes/cobranca1')
// const listarLojista1 = require('./comissoes/lojista1')
require('dotenv').config()

const main = async (mes, ano) => {
    // Solicitações de dados google sheets
    const dataBaseFuncionarios = await rp(optionsGet("'Base Funcionários'!A2:V"))
    const dataBaseAssessores2 = await rp(optionsGet("'Apoio Comissões Assessores'!A2:E"))
    const dataBaseApoioAssessores2 = await rp(optionsGet("'Apoio comissões assessores1'!A2:F"))
    // Funções de tratativa de dados
    const listaBaseFuncionarios = listarApelidos(dataBaseFuncionarios,mes,ano)
    const comissoesAssessores1 = listarComissoesAssessores1(listaBaseFuncionarios, dataBaseApoioAssessores2)
    const comissoesAssessores2 = listarComissoesAssessores2(dataBaseAssessores2)
    try {
        return comissoesAssessores1
    } catch (error) {
        return error
    }

}

module.exports = main