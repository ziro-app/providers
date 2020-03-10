const rp = require('request-promise-native')
const arrayObject = require('@ziro/array-object')
const listaParcela = require('./listarParcelas')
const optionsBatchGet = require('./googlesheets/optionsbatchGet')
require('dotenv').config()

const getEmployees = async () => {
    const requests = await rp(optionsBatchGet(['Base Comissões!A:Q','Apoio Comissões Assessores 2019!A:H','Pessoas!A:V', 'Reajustes!A:G','Valor Pago!A:N']))
    const [dataBaseSheets,dataAssessores,dataBasePessoas, dataBaseReajustes, dataPago] = requests.valueRanges 
    const basePago = arrayObject(dataPago)
    const baseComissoes = arrayObject(dataBaseSheets)
    const baseAssessores = arrayObject(dataAssessores)
    const basePessoas = arrayObject(dataBasePessoas)
    const baseReajustes = arrayObject(dataBaseReajustes)
    const parcelas2 = listaParcela(basePessoas, baseComissoes, baseAssessores, baseReajustes)
    const arrayParcelas2Simuladas = parcelas2.map(item => item.map(item => item.parcela2))
    const simulados = arrayParcelas2Simuladas.flat()
    console.log('Simulado',simulados)
    console.log('Pago', basePago.map(item => item.parcela2))
    basePago.map(item => {
        if(!simulados.includes(item.parcela2)){
            console.log('\x1b[31m%s\x1b[0m',`O valor ${item.parcela2} pago no dia ${item.mes}/${item.ano} para a pessoa ${item.apelido} não foi simulado corretamente`)
            return `O valor ${item.parcela2} do dia ${item.mes}/${item.ano} não foi simulado corretamente`
        }
    })
}

getEmployees()