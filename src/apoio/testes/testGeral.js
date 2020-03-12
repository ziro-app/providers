const rp = require('request-promise-native')
const arrayObject = require('@ziro/array-object')
const listaParcela = require('../listarParcelas')
const optionsBatchGet = require('../googlesheets/optionsbatchGet')
require('dotenv').config()

const getAllIndexes = (array, valor) => {
    var indexes = [], i = -1
    while ((i = array.indexOf(valor, i+1)) != -1){
        indexes.push(i)
    }
    return indexes
}

const getEmployees = async () => {
    const requests = await rp(optionsBatchGet(['Base Comissões!A:Q','Apoio Comissões Assessores 2019!A:H','Pessoas!A:V', 'Reajustes!A:G','Valor Pago!A:N']))
    const [dataBaseSheets,dataAssessores,dataBasePessoas, dataBaseReajustes, dataPago] = requests.valueRanges 
    const baseComissoes = arrayObject(dataBaseSheets)
    const baseAssessores = arrayObject(dataAssessores)
    const basePessoas = arrayObject(dataBasePessoas)
    const baseReajustes = arrayObject(dataBaseReajustes)
    const pago = arrayObject(dataPago)
    const simulado = listaParcela(basePessoas, baseComissoes, baseAssessores, baseReajustes)
    const simuladoFlat = simulado.flat()
    const arrayResposta = simuladoFlat.map(item => pago.find(correspondente => {
        return item.mes === correspondente.mes && item.ano === correspondente.ano && item.apelido === correspondente.apelido && item.parcela1 === correspondente.parcela1 && item.parcela2 === correspondente.parcela2
    }))
    const indexErros = getAllIndexes(arrayResposta,undefined)
    const erros = indexErros.map(item => simuladoFlat[item])
    console.log(erros)
}

getEmployees()