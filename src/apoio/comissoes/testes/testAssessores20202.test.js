const assessor20202 = require('../assessores20202')

const base2020 = [
    {mes:4, ano: 2020, anoBaixa:2020,mesBaixa:9,assessor:'Paulo',tipoCliente:'Novo',afiliado:'NENHUM',receita:2000,valor:20000, status:'Baixado'},
    {mes:4, ano: 2020,anoBaixa:2020,mesBaixa:9,assessor:'Paulo',tipoCliente:'Novo',afiliado:'FRANÇA',receita:2000, valor:0,status:'Baixado'},
    {mes:4, ano: 2020,anoBaixa:2020,mesBaixa:9,assessor:'Paulo',tipoCliente:'Antigo',afiliado:'FRANÇA',receita:1200,valor:20000, status:'Baixado'},
    {mes:4, ano: 2020,anoBaixa:'',mesBaixa:'',assessor:'Paulo',tipoCliente:'Novo',afiliado:'NENHUM',receita:4000,valor:20000, status:'Baixado'},
    {mes:4, ano: 2020,anoBaixa:2020,mesBaixa:9,assessor:'Paulo',tipoCliente:'Antigo',afiliado:'FRANÇA',receita:1200,valor:20000, status:'Baixado'}
]


const testAssessores20202 = (titulo,expected, base, ano, mes, assessor) => {
    const calculado = assessor20202(base, ano, mes, assessor)
    const esperado = expected
    const diferenca = esperado - calculado
    console.log('\x1b[35m%s\x1b[0m',titulo)
    console.log(`Comissão ${assessor} ${mes}/${ano}`)
    console.log(`Simulado: ${calculado}`)
    console.log(`Pago: ${esperado}`)
    console.log(`Diferença: ${diferenca}`)
    if(diferenca === 0) console.log('\x1b[32m%s\x1b[0m',`Comissão do assessor ${assessor} em ${mes}/${ano} foi simulado corretamente, o valor esperado era ${esperado}}`)
    else console.log('\x1b[31m%s\x1b[0m',`Simulação não está com o mesmo valor do esperado, diferença: ${diferenca}`)
}

testAssessores20202('Teste de valor',832,base2020,2020,9,'Paulo')