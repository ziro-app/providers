const rp = require('request-promise-native')
const arrayObject = require('@ziro/array-object')
const listaParcela = require('../listarParcelas')
const optionsBatchGet = require('../googlesheets/optionsbatchGet')
require('dotenv').config()

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
    const arrayResposta = simuladoFlat.map(item =>{
        if(pago.find(correspondente => {return item.mes === correspondente.mes && item.ano === correspondente.ano && item.apelido === correspondente.apelido && item.parcela1 === correspondente.parcela1 && item.parcela2 === correspondente.parcela2})){
            return 'Simulado e pago batem em todos valores'
        }else{
            return item
        }
    })
    console.log(arrayResposta)
}

getEmployees()