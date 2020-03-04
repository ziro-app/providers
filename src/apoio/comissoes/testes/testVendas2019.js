const vendas2019 = require('../vendas2019')

const base = [{ano:2019,mes:1,assessor:'Rubia',tipoCliente:'Novo',afiliado:'NENHUM',receita:2000,valor:20000},{ano:2019,mes:1,assessor:'Rubia',tipoCliente:'Novo',afiliado:'FRANÇA',receita:2000},{ano:2019,mes:1,assessor:'Rubia',tipoCliente:'Antigo',afiliado:'FRANÇA',receita:1200,valor:20000},{ano:2019,mes:1,assessor:'Rubia',tipoCliente:'Novo',afiliado:'NENHUM',receita:4000,valor:20000},{ano:2019,mes:1,assessor:'Rubia',tipoCliente:'Novo',afiliado:'FRANÇA',receita:2000,valor:20000}]

const testeVendas2019 = (titulo,expected, base, ano, mes, afiliado) => {
    const calculado = vendas2019(base, ano, mes, afiliado)
    const esperado = expected
    const diferenca = esperado - calculado
    console.log(titulo)
    console.log(`Comissão ${afiliado} ${mes}/${ano}`)
    console.log(`Simulado: ${calculado}`)
    console.log(`Pago: ${esperado}`)
    console.log(`Diferença: ${diferenca}`)
    if(diferenca === 0) console.log('\x1b[32m%s\x1b[0m',`Comissão do assessor ${afiliado} em ${mes}/${ano} foi simulado corretamente, o valor esperado era ${esperado}}`)
    else console.log('\x1b[31m%s\x1b[0m',`Simulação não está com o mesmo valor do esperado, diferença: ${diferenca}`)
}

testeVendas2019('Teste de valor',120,base,2019,1,'FRANÇA')
testeVendas2019('Teste de data errada', 0,base,2019,22,'FRANÇA')
testeVendas2019('Teste de nome errado', 0,base,2019,2,'AUHdsjand~sa')
testeVendas2019('Teste de nome numerico', 0,base,2019,2,1231)
testeVendas2019('Teste de nome array', 0,base,2019,2,['a','b'])