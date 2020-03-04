const assessor2020 = require('../assessores2020')

const base = [{ano:2019,mes:1,assessor:'Rubia',tipoCliente:'Novo',afiliado:'NENHUM',receita:2000,valor:20000},{ano:2019,mes:1,assessor:'Rubia',tipoCliente:'Novo',afiliado:'FRANÇA',receita:2000},{ano:2019,mes:1,assessor:'Rubia',tipoCliente:'Antigo',afiliado:'FRANÇA',receita:1200,valor:20000},{ano:2019,mes:1,assessor:'Rubia',tipoCliente:'Novo',afiliado:'NENHUM',receita:4000,valor:20000}]

const testeAssessores2020 = (titulo,expected, base, ano, mes, assessor) => {
    const calculado = assessor2020(base, ano, mes, assessor)
    const esperado = expected
    const diferenca = esperado - calculado
    console.log(titulo)
    console.log(`Comissão ${assessor} ${mes}/${ano}`)
    console.log(`Simulado: ${calculado}`)
    console.log(`Pago: ${esperado}`)
    console.log(`Diferença: ${diferenca}`)
    if(diferenca === 0) console.log('\x1b[32m%s\x1b[0m',`Comissão do assessor ${assessor} em ${mes}/${ano} foi simulado corretamente, o valor esperado era ${esperado}}`)
    else console.log('\x1b[31m%s\x1b[0m',`Simulação não está com o mesmo valor do esperado, diferença: ${diferenca}`)
}

testeAssessores2020('Teste de valor',920,base,2019,1,'Rubia')
testeAssessores2020('Teste de data errada', 0,base,2019,22,'Rubia')
testeAssessores2020('Teste de nome errado', 0,base,2019,2,'AUHdsjand~sa')
testeAssessores2020('Teste de nome numerico', 0,base,2019,2,1231)
testeAssessores2020('Teste de nome array', 0,base,2019,2,['a','b'])