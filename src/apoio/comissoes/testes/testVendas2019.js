const vendas2019 = require('../vendas2019')

const base = [{ano:2019,mes:1,assessor:'FRANCA',tipoCliente:'Novo',afiliado:'NENHUM',receita:2000,valor:20000},{ano:2019,mes:1,assessor:'FRANCA',tipoCliente:'Novo',afiliado:'FRANÇA',receita:2000},{ano:2019,mes:1,assessor:'FRANCA',tipoCliente:'Antigo',afiliado:'FRANÇA',receita:1200,valor:20000},{ano:2019,mes:1,assessor:'FRANCA',tipoCliente:'Novo',afiliado:'NENHUM',receita:4000,valor:20000},{ano:2019,mes:1,assessor:'FRANCA',tipoCliente:'Novo',afiliado:'FRANCA',receita:2000,valor:20000}]

const testeVendas2019 = (titulo,expected, base, ano, mes, afiliado) => {
    const calculado = vendas2019(base, ano, mes, afiliado)
    const esperado = expected
    const diferenca = esperado - calculado
    console.log('\x1b[35m%s\x1b[0m',titulo)
    console.log(`Comissão ${afiliado} ${mes}/${ano}`)
    console.log(`Simulado: ${calculado}`)
    console.log(`Pago: ${esperado}`)
    console.log(`Diferença: ${diferenca}`)
    if(diferenca === 0) console.log('\x1b[32m%s\x1b[0m',`Comissão do afiliado ${afiliado} em ${mes}/${ano} foi simulado corretamente, o valor esperado era ${esperado}}`)
    else console.log('\x1b[31m%s\x1b[0m',`Simulação não está com o mesmo valor do esperado, diferença: ${diferenca}`)
}

testeVendas2019('Teste de valor',400,base,2019,1,'FRANCA')
testeVendas2019('Teste de data errada', 0,base,2019,22,'FRANCA')
testeVendas2019('Teste de nome errado', 0,base,2019,2,'AUHdsjand~sa')
testeVendas2019('Teste de nome numerico', 0,base,2019,2,1231)
testeVendas2019('Teste de nome array', 0,base,2019,2,['a','b'])
testeVendas2019('Teste de nome NaN', 0,base,2019,2,NaN)
testeVendas2019('Teste de nome undefined', 0,base,2019,2,undefined)
testeVendas2019('Teste de nome object', 0,base,2019,2,{})
testeVendas2019('Teste de nome empty array', 0,base,2019,2,[])
testeVendas2019('Teste de data NaN', 0,base,NaN,NaN,'FRANCA')
testeVendas2019('Teste de data undefined', 0,base,undefined,undefined,'FRANCA')
testeVendas2019('Teste de base empty array',0,[],2019,1,'FRANCA')
testeVendas2019('Teste de base undefined',0,undefined,2019,1,'FRANCA')
testeVendas2019('Teste de base NaN',0,NaN,2019,1,'FRANCA')
testeVendas2019('Teste de base array',0,['a','b'],2019,1,'FRANCA')
testeVendas2019('Teste de base array',0,0,2019,1,'FRANCA')