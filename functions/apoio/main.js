const rp = require('request-promise-native');
const optionsGet = require('./googlesheets/optionsGetGoogle')
const listarApelidos = require('./listarApelidos')
const listarComissoesAssessores2020 = require('./comissoes/asessores2020')
const listarComissoesAssessores2019 = require('./comissoes/assessores2019')
const listarComissoesLojistica2019 = require('./comissoes/lojistica2019')
const listarComissoesProspeccao2020 = require('./comissoes/prospeccao2020')

const main = async (mes, ano) => {
    // GoogleSheets GET
    // const dataBaseAssessores = await rp(optionsGet("'Apoio Comissões Assessores'!A2:E"))
    // const dataBaseFuncionarios = await rp(optionsGet("'Base Funcionários'!A2:V"))
    // const dataBaseAssessores2019 = await rp(optionsGet("'Apoio Comissão Assessor 2019'!I2:M"))
    // const dataBaseAssessores2019Novo = await rp(optionsGet("'Query Assessores2019'!A2:F"))
    // const dataBaseLojistica2019 = await rp(optionsGet("'Apoio Comissões Lojista 2019'!A2:C"))
    const dataBaseTransacoesProspeccao2020 = await rp(optionsGet("'Apoio transacoes Prospecção 2020'!A2:D"))
    const dataBaseApoioProspeccao2020 = await rp(optionsGet("'Apoio Prospecção 2020'!A2:F"))
    // Funções de calculo de comissões
    // const listaBaseFuncionarios = listarApelidos(dataBaseFuncionarios,mes,ano)
    // const comissoesAssessores2020 = listarComissoesAssessores2020(dataBaseAssessores)
    // const comissoesAssessores2019 = listarComissoesAssessores2019(dataBaseAssessores2019, dataBaseAssessores2019Novo)
    // const comissoesLojistica2019 = listarComissoesLojistica2019(dataBaseLojistica2019)
    const comissoesProspeccao2020 = listarComissoesProspeccao2020(dataBaseTransacoesProspeccao2020,dataBaseApoioProspeccao2020)
    try {
        return comissoesProspeccao2020
    } catch (error) {
        return error
    }

}

module.exports = main