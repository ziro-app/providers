const assessor2020 = require('../assessores2020')

const base2020 = [{ano:2020,mes:1,assessor:'Rubia',tipoCliente:'Novo',afiliado:'NENHUM',receita:2000,valor:20000},{ano:2020,mes:1,assessor:'Rubia',tipoCliente:'Novo',afiliado:'FRANÇA',receita:2000},{ano:2020,mes:1,assessor:'Rubia',tipoCliente:'Antigo',afiliado:'FRANÇA',receita:1200,valor:20000},{ano:2020,mes:1,assessor:'Rubia',tipoCliente:'Novo',afiliado:'NENHUM',receita:4000,valor:20000}]


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

testeAssessores2020('Teste de valor',920,base2020,2020,1,'Rubia')
testeAssessores2020('Teste de data errada', 0,base2020,2020,22,'Rubia')
testeAssessores2020('Teste de nome errado', 0,base2020,2020,2,'AUHdsjand~sa')
testeAssessores2020('Teste de nome numerico', 0,base2020,2020,2,1231)
testeAssessores2020('Teste de nome array', 0,base2020,2020,2,['a','b'])
testeAssessores2020('Teste de nome NaN', 0,base2020,2020,2,NaN)
testeAssessores2020('Teste de nome undefined', 0,base2020,2020,2,undefined)
testeAssessores2020('Teste de nome object', 0,base2020,2020,2,{})
testeAssessores2020('Teste de nome empty array', 0,base2020,2020,2,[])
testeAssessores2020('Teste de data NaN', 0,base2020,NaN,NaN,'Rubia')
testeAssessores2020('Teste de data undefined', 0,base2020,undefined,undefined,'Rubia')
testeAssessores2020('Teste de base empty array',0,[],2020,1,'Rubia')
testeAssessores2020('Teste de base undefined',0,undefined,2020,1,'Rubia')
testeAssessores2020('Teste de base NaN',0,NaN,2020,1,'Rubia')
testeAssessores2020('Teste de base array',0,['a','b'],2020,1,'Rubia')
testeAssessores2020('Teste de base array',0,0,2020,1,'Rubia')