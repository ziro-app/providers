const rp = require('request-promise-native')
const arrayObject = require('@ziro/array-object')
const optionsBatchGet = require('../apoio/googlesheets/optionsbatchGet')
const main = require('../templates/main')
require('dotenv').config()

const getTeam = async () => {
    try {
        const promiseResults = rp(optionsBatchGet(['Pessoas!A:AA', 'Reajustes!A:G']))
        const [results] = await Promise.all([promiseResults])
        const [dataPessoas,dataReajuste] = results.valueRanges 
        const basePessoas = arrayObject(dataPessoas)
        const baseReajuste = arrayObject(dataReajuste)
        const nomePessoas = basePessoas.map(item => item.apelido)
        const reajustes = nomePessoas.map(pessoa => {
            const listaReajustes = baseReajuste.filter(reajuste => reajuste.apelido === pessoa)
            if(listaReajustes[0]){
                return {apelido:pessoa, reajustes:listaReajustes}
            }
        }).filter(Boolean)
        const resultNewBase = nomePessoas.map(pessoa => {
            const baseFilter = basePessoas.filter(row => row.apelido === pessoa)
            const reajustesFilter = reajustes.filter(row => row.apelido === pessoa)
            if(reajustesFilter[0]){
                const arrayParcela1 = reajustesFilter[0].reajustes.map(reajuste => reajuste.parcela1).filter(item => item !== '-')
                const arrayEscopo = reajustesFilter[0].reajustes.map(reajuste => reajuste.escopo).filter(item => item !== '-')
                const arrayModeloParcela2 = reajustesFilter[0].reajustes.map(reajuste => reajuste.modeloParcela2).filter(item => item !== '-')
                const parcela1 = arrayParcela1[0] ? arrayParcela1[arrayParcela1.length-1] : baseFilter[0].parcela1
                const escopo = arrayEscopo[0] ? arrayEscopo[arrayEscopo.length-1] : baseFilter[0].escopo
                const modeloParcela2 = arrayModeloParcela2[0] ? arrayModeloParcela2[arrayModeloParcela2.length-1] : baseFilter[0].modeloParcela2
                return {...baseFilter[0], parcela1, escopo, modeloParcela2}
            }else{
                return baseFilter[0]
            }
        })
        return {
            statusCode: 200,
            body: JSON.stringify(resultNewBase.map(item => {
                const {cadastro, nome, apelido, dataInicio, dataFim, parcela1, modeloParcela2, escopo } = item
                return {
                    cadastro,
                    nome,
                    apelido,
                    dataInicio,
                    dataFim,
                    parcela1,
                    modeloParcela2,
                    escopo
                }
            }))
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify(error)
        }
    }
}

module.exports = { handler: main(getTeam) }