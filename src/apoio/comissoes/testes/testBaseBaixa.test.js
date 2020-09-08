const rp = require('request-promise-native')
const arrayObject = require('@ziro/array-object')
const optionsBatchGet = require('../../googlesheets/optionsbatchGet')
const calculoComissoes = require('../assessores2020')
require('dotenv').config()

const getBaixa = async () => {
    const requests = await rp(optionsBatchGet(['Base Comissões!A:Z']))
    const [dataBaseSheets] = requests.valueRanges 
    const baseComissoes = arrayObject(dataBaseSheets)
    const calculoRubia = calculoComissoes(baseComissoes,2020,3,'Rubia')
    console.log(calculoRubia)
}

getBaixa()