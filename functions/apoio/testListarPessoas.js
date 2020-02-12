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
const listarApelidos = (base, ano, mes) => {
    const entrouNesseMes = base.filter(item => transData(item.dataInicio) > new Date(ano,mes))
    entrouNesseMes.map(item => result.push({apelido: item.apelido, escopo:item.escopo, ano:ano, mes:mes, parcela1:item.parcela1*(calculoUltimoDia(ano,mes).getDate() - transData(item.dataInicio).getDate())/calculoUltimoDia(ano,mes).getDate()}))
    const ativoNesseMes = base.filter(item => transData(item.dataInicio) < new Date(ano,mes) && item.dataFim === '-' || transData(item.dataInicio) < new Date(ano,mes) && transData(item.dataFim) < new Date(ano,mes))
    ativoNesseMes.map(item => result.push({apelido:item.apelido, escopo:item.escopo, ano:ano, mes:mes, parcela1:item.parcela1}))
    return result
}

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