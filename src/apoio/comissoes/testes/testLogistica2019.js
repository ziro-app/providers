const logistica2019 = require('../logistica2019')

const base = [{ano:2019,mes:1,assessor:'Rubia',tipoCliente:'Novo',afiliado:'NENHUM',receita:2000,valor:20000},{ano:2019,mes:1,assessor:'Rubia',tipoCliente:'Novo',afiliado:'FRANÇA',receita:2000},{ano:2019,mes:1,assessor:'Rubia',tipoCliente:'Antigo',afiliado:'FRANÇA',receita:1200,valor:20000},{ano:2019,mes:1,assessor:'Rubia',tipoCliente:'Novo',afiliado:'NENHUM',receita:4000,valor:20000}]

const testeLogistica2019 = (titulo,expected, base, ano, mes, assessor) => {
    const calculado = logistica2019(base, ano, mes)
    const esperado = expected
    const diferenca = esperado - calculado
    console.log('\x1b[35m%s\x1b[0m',titulo)
    console.log(`Comissão Logista ${mes}/${ano}`)
    console.log(`Simulado: ${calculado}`)
    console.log(`Pago: ${esperado}`)
    console.log(`Diferença: ${diferenca}`)
    if(diferenca === 0) console.log('\x1b[32m%s\x1b[0m',`Comissão do assessor ${assessor} em ${mes}/${ano} foi simulado corretamente, o valor esperado era ${esperado}}`)
    else console.log('\x1b[31m%s\x1b[0m',`Simulação não está com o mesmo valor do esperado, diferença: ${diferenca}`)
}

testeLogistica2019('Teste de valor',46,base,2019,1)
testeLogistica2019('Teste de data errada', 0,base,2019,22)
testeLogistica2019('Teste de data NaN', 0,base,NaN,NaN)
testeLogistica2019('Teste de data undefined', 0,base,undefined,undefined)
testeLogistica2019('Teste de base empty array',0,[],2019,1)
testeLogistica2019('Teste de base undefined',0,undefined,2019,1)
testeLogistica2019('Teste de base NaN',0,NaN,2019,1)
testeLogistica2019('Teste de base array',0,['a','b'],2019,1)
testeLogistica2019('Teste de base array',0,0,2019,1)