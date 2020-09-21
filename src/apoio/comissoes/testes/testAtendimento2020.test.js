const atendimento2020 = require('../atendimento2020')

const base2020 = [
    {ano:2020, mes:2, transacionado:275},
    {ano:2020, mes:2, transacionado:275},
    {ano:2020, mes:2, transacionado:275},
    {ano:2020, mes:2, transacionado:275},
    {ano:2020, mes:2, transacionado:275},
    {ano:2020, mes:2, transacionado:275},
    {ano:2020, mes:2, transacionado:275},
    {ano:2020, mes:2, transacionado:275},
    {ano:2020, mes:2, transacionado:275},
    {ano:2020, mes:2, transacionado:275},
    {ano:2020, mes:2, transacionado:275},
    {ano:2020, mes:2, transacionado:90028.74},
    {ano:2020, mes:7, transacionado:90028.74}
]


const testeAtendimento2020 = (titulo,expected, base, ano, mes) => {
    const calculado = atendimento2020(base, ano, mes)
    const esperado = expected
    const diferenca = esperado - calculado
    console.log('\x1b[35m%s\x1b[0m',titulo)
    console.log(`Comissão atendimento ${mes}/${ano}`)
    console.log(`Simulado: ${calculado}`)
    console.log(`Pago: ${esperado}`)
    console.log(`Diferença: ${diferenca}`)
    if(diferenca === 0) console.log('\x1b[32m%s\x1b[0m',`Comissão de atendimento em ${mes}/${ano} foi simulado corretamente, o valor esperado era ${esperado}}`)
    else console.log('\x1b[31m%s\x1b[0m',`Simulação não está com o mesmo valor do esperado, diferença: ${diferenca}`)
}

testeAtendimento2020('Teste de valor',139.58061,base2020,2020,2)