const test = require('ava')
const assessoria2020 = require('./functions/apoio/comissoes/assessoria2020')
const logistica2019 = require('./functions/apoio/comissoes/logistica2019')

const dataSheets = [
    { ano: 2020, mes: 12, assessor: 'David', valor: 80000, receita: 2000.12 },
    { ano: 2020, mes: 12, assessor: 'David', valor: 40000, receita: 3000.76 },
    { ano: 2019, mes: 12, assessor: 'David', valor: 50000, receita: 2000.56 },
    { ano: 2020, mes: 11, assessor: 'David', valor: 25000, receita: 4000.0 },
    { ano: 2020, mes: 12, assessor: 'João', valor: 36000, receita: 4000.0 }
]

test('Comissão assessoria 2020', t => {
    const value = assessoria2020(dataSheets,2020,12,'David')
    const arrayObjectCalculated = value
    const arrayObjectExpected = 1000.088
    t.is(arrayObjectCalculated, arrayObjectExpected)
})

test('Comissão logistica 2019', t => {
    const value = logistica2019(dataSheets,2020,12)
    const comissionCalculated = value
    const comissionExpected = 45.004400000000004
    t.is(comissionCalculated, comissionExpected)
})