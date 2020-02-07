const rp = require('request-promise-native');
const optionsGet = require('./googlesheets/optionsGetGoogle')
const arrayObject = require('@ziro/array-object')
const assessor2020 = require('./comissoes/assessores2020')

const main = async (ano, mes, assessor) => {
    const dataBaseSheets = await rp(optionsGet("'Base'!A:L"))
    const baseComissoes = await arrayObject(dataBaseSheets)
    const result = await assessor2020(baseComissoes,ano,mes,assessor)
    try {
        return result
    } catch (error) {
        return error
    }

}

module.exports = main