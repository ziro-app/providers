const rp = require('request-promise-native')
const arrayObject = require('@ziro/array-object')
const optionsGet = require('./googlesheets/optionsGetGoogle')
require('dotenv').config()

let result = []
const listarApelidos = (basePessoas) => {
    basePessoas.map(item => {
        for(let i = 1; i<=12; i++){
            result.push({mes:i, ano:2020, apelido: item.Apelido})
        }
    })
    return result
}

const testeListarPessoas = async () => {
    try {
        const dataBasePessoas = await rp(optionsGet('Pessoas!A:V'))
        const basePessoas = await arrayObject(dataBasePessoas)
        console.log(listarApelidos(basePessoas))
    } catch (error) {
        console.log(error)
    }
}

testeListarPessoas()