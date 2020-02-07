const test = require('ava')
const assessores2020 = require('./functions/apoio/comissoes/assessores2020')

const dataSheets = [
    { ano: 2020, mes: 12, assessor: 'David', valor: 80000, receita: 2000.12 },
    { ano: 2020, mes: 12, assessor: 'David', valor: 40000, receita: 3000.76 },
    { ano: 2020, mes: 12, assessor: 'David', valor: 50000, receita: 2000.56 },
    { ano: 2020, mes: 12, assessor: 'David', valor: 25000, receita: 4000.0 },
    { ano: 2020, mes: 12, assessor: 'João', valor: 36000, receita: 4000.0 }
]

test('Teste comissão assessor 2020', t => {
    const value = assessores2020(dataSheets,2020,12,'David')
    const arrayObjectCalculated = value
    const arrayObjectExpected = 19500
    t.deepEqual(arrayObjectCalculated, arrayObjectExpected)
})

// const dados = {
//     receita_mes_ziro: 150000,
//     receita_mes: 24000,
//     transacionado_mes: 300000,
//     receitas_mes_novo_cliente:[200,3000,4000],
//     receita_mes_novo_afiliado: 15000,
//     receita_mes_antigo_afiliado: 25000,
//     cobrancas_mes: 100000,
//     transacao_mes_afiliado: 200000
// }

// test('Comissão Assessores 2019', async t => {
//     const value = assessores2019(dados.receitas_mes_novo_cliente,dados.receita_mes_novo_afiliado,dados.receita_mes_antigo_afiliado)
//     const comissionCalculated = value
//     console.log(value)
//     const comissionExpected = 7580
//     t.is(comissionCalculated, comissionExpected)
// })

// test('Comissão Cobranças 2019', async t => {
//     const value = cobranca2019(dados.cobrancas_mes)
//     const comissionCalculated = value
//     const comissionExpected = 700
//     t.is(comissionCalculated, comissionExpected)
// })


// test('Comissão Lojistica 2019', t => {
//     const value = lojistica2019(dados.receita_mes_ziro)
//     const comissionCalculated = value
//     const comissionExpected = 750
//     t.is(comissionCalculated, comissionExpected)
// })

// test('Comissão Prospecção 2020', t => {
//     const value = prospeccao2019(dados.transacao_mes_afiliado, dados.receita_mes_novo_afiliado, dados.receita_mes_antigo_afiliado)
//     const comissionCalculated = value
//     const comissionExpected = 6500
//     t.is(comissionCalculated, comissionExpected)
// })
