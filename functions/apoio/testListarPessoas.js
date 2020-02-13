const rp = require('request-promise-native')
const arrayObject = require('@ziro/array-object')
const optionsGet = require('./googlesheets/optionsGetGoogle')
const listarApelidos = require('./listarApelidos')
require('dotenv').config()

const testeListarPessoas = async () => {
    try {
        const dataBasePessoas = await rp(optionsGet('Pessoas!A:V'))
        const basePessoas = await arrayObject(dataBasePessoas)
        listarApelidos(basePessoas,2020,1)
        listarApelidos(basePessoas,2020,2)
        listarApelidos(basePessoas,2020,3)
        listarApelidos(basePessoas,2020,4)
        listarApelidos(basePessoas,2020,5)
        listarApelidos(basePessoas,2020,6)
        listarApelidos(basePessoas,2020,7)
        listarApelidos(basePessoas,2020,8)
        listarApelidos(basePessoas,2020,9)
        listarApelidos(basePessoas,2020,10)
        listarApelidos(basePessoas,2020,11)
        console.log(listarApelidos(basePessoas,2020,12))
    } catch (error) {
        console.log(error)
    }
}

testeListarPessoas()