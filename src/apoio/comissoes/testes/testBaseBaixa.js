const rp = require('request-promise-native')
const arrayObject = require('@ziro/array-object')
const optionsBatchGet = require('../../googlesheets/optionsbatchGet')
const baseGeral = require('../baseBaixa')
require('dotenv').config()

const getEmployees = async () => {
    const requests = await rp(optionsBatchGet(['Base Comissões!A:Z']))
    const [dataBaseSheets] = requests.valueRanges 
    const baseComissoes = arrayObject(dataBaseSheets)
    const novaBase = baseGeral(baseComissoes,3,2020)
    console.log(novaBase)
}

getEmployees()