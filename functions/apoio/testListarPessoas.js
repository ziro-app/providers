const rp = require('request-promise-native')
const arrayObject = require('@ziro/array-object')
const optionsGet = require('./googlesheets/optionsGetGoogle')
const listarApelidos = require('./listarApelidos')
require('dotenv').config()

const testeListarPessoas = async () => {
    try {
        const dataBasePessoas = await rp(optionsGet('Pessoas!A:V'))
        const basePessoas = await arrayObject(dataBasePessoas)
        console.log(listarApelidos(basePessoas,2020,1))
    } catch (error) {
        console.log(error)
    }
}

testeListarPessoas()