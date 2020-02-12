const rp = require('request-promise-native')
const arrayObject = require('@ziro/array-object')
const optionsGet = require('./googlesheets/optionsGetGoogle')
require('dotenv').config()

const transData = (dataSheets) => {
    const arrayDate = dataSheets.split('-')
    const data = new Date(arrayDate[0], arrayDate[1], arrayDate[2])
    return data
}

const calculoUltimoDia = (ano,mes) => {
    const finalMes = new Date((new Date(ano, mes))-1)
    return finalMes
}

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