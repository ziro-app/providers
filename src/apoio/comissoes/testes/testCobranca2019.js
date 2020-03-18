const cobranca2019 = require('../cobranca2019')

const base = [{mesRecebido:2,anoRecebido:2020,recebido:2000},{mesRecebido:3,anoRecebido:2020,recebido:4000},{mesRecebido:1,anoRecebido:2020,recebido:4000}]

const testeCobranca2019 = (titulo,expected, base, ano, mes) => {
    const calculado = cobranca2019(base, ano, mes)
    const esperado = expected
    const diferenca = esperado - calculado
    console.log('\x1b[35m%s\x1b[0m',titulo)
    console.log(`Comissão Logista ${mes}/${ano}`)
    console.log(`Simulado: ${calculado}`)
    console.log(`Pago: ${esperado}`)
    console.log(`Diferença: ${diferenca}`)
    if(diferenca === 0) console.log('\x1b[32m%s\x1b[0m',`Comissão da cobrança em ${mes}/${ano} foi simulado corretamente, o valor esperado era ${esperado}`)
    else console.log('\x1b[31m%s\x1b[0m',`Simulação não está com o mesmo valor do esperado, diferença: ${diferenca}`)
}

testeCobranca2019('Teste de valor',28,base,2020,1)
testeCobranca2019('Teste de data errada', 0,base,2019,22)
testeCobranca2019('Teste de data NaN', 0,base,NaN,NaN)
testeCobranca2019('Teste de data undefined', 0,base,undefined,undefined)
testeCobranca2019('Teste de base empty array',0,[],2019,1)
testeCobranca2019('Teste de base undefined',0,undefined,2019,1)
testeCobranca2019('Teste de base NaN',0,NaN,2019,1)
testeCobranca2019('Teste de base array',0,['a','b'],2019,1)
testeCobranca2019('Teste de base zero',0,0,2019,1)