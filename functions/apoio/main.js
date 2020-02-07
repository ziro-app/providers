const rp = require('request-promise-native');
const optionsGet = require('./googlesheets/optionsGetGoogle')
const arrayObject = require('@ziro/array-object')
const assessor2020 = require('./comissoes/assessores2020')
// const lojistica2019 = require('./comissoes/lojistica2019')

const main = async (ano, mes, assessor) => {
    const dataBaseSheets = await rp(optionsGet("'Base'!A:L"))
    const baseComissoes = await arrayObject(dataBaseSheets)
    const resultAssessor2020 = await assessor2020(baseComissoes,ano,mes,assessor)
    // const resultLojistica2019 = await lojistica2019(baseComissoes,ano,mes)
    try {
        return resultAssessor2020
    } catch (error) {
        return error
    }

}

module.exports = main