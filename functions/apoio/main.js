const rp = require('request-promise-native');
const optionsGet = require('./optionsGetGoogle')
const listarApelidos = require('./listarApelidos')
const listarComissoesAssessores2 = require('./comissoes/asessores2')
const listarComissoesProspeccao = require('./comissoes/prospeccao1')
const listarCobranca1 = require('./comissoes/cobranca1')
const listarLojista1 = require('./comissoes/lojista1')
require('dotenv').config()

const main = async (mes, ano) => {
    const dataBaseAssessores = await rp(optionsGet("'Apoio Comissões Assessores'!A:E"))
    const dataBaseResto = await rp(optionsGet("'Apoio Comissões'!A:E"))
    const dataBaseFuncionarios = await rp(optionsGet("'Base Funcionários'!A:V"))
    const listaBaseFuncionarios = listarApelidos(dataBaseFuncionarios,mes,ano)
    const comissoesAssessores2 = listarComissoesAssessores2(listaBaseFuncionarios,dataBaseAssessores,mes,ano)
    const comissoesProspeccao1 = listarComissoesProspeccao(comissoesAssessores2,dataBaseResto,mes,ano)
    const comissaoCobranca1 = listarCobranca1(comissoesProspeccao1,dataBaseResto,mes,ano)
    const comissaoLojista1 = listarLojista1(comissaoCobranca1,dataBaseResto,mes,ano)
    try {
        return comissaoLojista1
    } catch (error) {
        return error
    }

}

module.exports = main