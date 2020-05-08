const assessor2020 = require('../assessoresCOVID')

const base2020 = [
    {mes:3, ano: 2020, anoBaixa:2020,mesBaixa:1,assessor:'Rubia',tipoCliente:'Novo',afiliado:'NENHUM',receita:2000,valor:20000, status:'Baixado'},
    {mes:3, ano: 2020,anoBaixa:2020,mesBaixa:1,assessor:'Rubia',tipoCliente:'Novo',afiliado:'FRANÇA',receita:2000, valor:0,status:'Baixado'},
    {mes:3, ano: 2020,anoBaixa:2020,mesBaixa:1,assessor:'Rubia',tipoCliente:'Antigo',afiliado:'FRANÇA',receita:1200,valor:20000, status:'Baixado'},
    {mes:3, ano: 2020,anoBaixa:'',mesBaixa:'',assessor:'Rubia',tipoCliente:'Novo',afiliado:'NENHUM',receita:4000,valor:20000, status:'Baixado'},
    {mes:2, ano: 2020,anoBaixa:2020,mesBaixa:1,assessor:'Rubia',tipoCliente:'Antigo',afiliado:'FRANÇA',receita:1200,valor:20000, status:'Baixado'}
]


const testeAssessores2020 = (titulo,expected, base, ano, mes, assessor) => {
    const calculado = assessor2020(base, ano, mes, assessor)
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

testeAssessores2020('Teste de valor',520,base2020,2020,1,'Rubia')