const test = require('ava')
const assessor2020 = require('./functions/apoio/comissoes/asessores2020')
const assessores2019 = require('./functions/apoio/comissoes/assessores2019')
const cobranca2019 = require('./functions/apoio/comissoes/cobranca2019')
const lojistica2019 = require('./functions/apoio/comissoes/lojistica2019')
const prospeccao2019 = require('./functions/apoio/comissoes/prospeccao2020')
const arrayToObject = require('./arrayToObject')

const dados = {
    receita_mes_ziro: 150000,
    receita_mes: 24000,
    transacionado_mes: 300000,
    receitas_mes_novo_cliente:[200,3000,4000],
    receita_mes_novo_afiliado: 15000,
    receita_mes_antigo_afiliado: 25000,
    cobrancas_mes: 100000,
    transacao_mes_afiliado: 200000
}

test('Comissão Assessor 2020', t => {
    const value = assessor2020(dados.transacionado_mes, dados.receita_mes)
    const comissionCalculated = value
    const comissionExpected = 3600
    t.is(comissionCalculated, comissionExpected)
})

test('Comissão Assessores 2019', async t => {
    const value = assessores2019(dados.receitas_mes_novo_cliente,dados.receita_mes_novo_afiliado,dados.receita_mes_antigo_afiliado)
    const comissionCalculated = value
    console.log(value)
    const comissionExpected = 7580
    t.is(comissionCalculated, comissionExpected)
})

test('Comissão Cobranças 2019', async t => {
    const value = cobranca2019(dados.cobrancas_mes)
    const comissionCalculated = value
    const comissionExpected = 700
    t.is(comissionCalculated, comissionExpected)
})


test('Comissão Lojistica 2019', t => {
    const value = lojistica2019(dados.receita_mes_ziro)
    const comissionCalculated = value
    const comissionExpected = 750
    t.is(comissionCalculated, comissionExpected)
})

test('Comissão Prospecção 2020', t => {
    const value = prospeccao2019(dados.transacao_mes_afiliado, dados.receita_mes_novo_afiliado, dados.receita_mes_antigo_afiliado)
    const comissionCalculated = value
    const comissionExpected = 6500
    t.is(comissionCalculated, comissionExpected)
})

const dataSheets = {values:[['nome','sobrenome','idade'],['Ahmad', 'Forhat', '24'],['João', 'Berinjela','70']]}

test('arrayToObject', t => {
    const value = arrayToObject(dataSheets)
    const arrayObjectCalculated = value
    const arrayObjectExpected = [{nome: 'Ahmad', sobrenome : 'Forhat', idade: 24 }, {nome: 'João', sobrenome : 'Berinjela', idade: 70}]
    t.is(arrayObjectCalculated, arrayObjectExpected)
})