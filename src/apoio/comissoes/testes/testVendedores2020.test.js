const vendedores2020 = require('../vendedores2020')

const baseTransacoes = [
    {
        Fabricante: 'Closet Deluxe',
        'Data Venda': '02/02/2020 13:08:00',
        transacionado: 100000
    },
    {
        Fabricante: 'Batata',
        'Data Venda': '02/02/2020 13:08:00',
        transacionado: 10000
    },
    {
        Fabricante: 'Batata',
        'Data Venda': '02/02/2020 13:08:00',
        transacionado: 100000
    }
]
const baseVendedores = [
    {
        cadastro: '02/02/2020 13:08:00',
        fabricante: 'CLOSET DELUXE',
        vendedor: 'Ahmad'
    },
    {
        cadastro: '02/02/2020 13:08:00',
        fabricante: 'BATATA',
        vendedor: 'Ahmad'
    }
]

const baseFabricantes = [
    {
        Fabricante: 'Closet Deluxe',
        Data: '02/02/2020 13:08:00',
        Categoria: 'Batata'
    },
    {
        Fabricante: 'BATATA',
        Data: '02/02/2020 13:08:00',
        Categoria: 'Batata'
    }
]

const testeVendedores2020 = (titulo,expected, vendedor, baseTransacoes, baseVendedores, baseFabricantes, mes, ano) => {
    const calculado = vendedores2020(baseTransacoes, baseVendedores, baseFabricantes, mes, ano, vendedor)
    const esperado = expected
    const diferenca = esperado - calculado
    console.log('\x1b[35m%s\x1b[0m',titulo)
    console.log(`Comissão ${vendedor} Vendedores 2020`)
    console.log(`Simulado: ${calculado}`)
    console.log(`Pago: ${esperado}`)
    console.log(`Diferença: ${diferenca}`)
    if(diferenca === 0) console.log('\x1b[32m%s\x1b[0m',`Comissão do vendedor ${vendedor} foi simulado corretamente, o valor esperado era ${esperado}`)
    else console.log('\x1b[31m%s\x1b[0m',`Simulação não está com o mesmo valor do esperado, diferença: ${diferenca}`)
}

testeVendedores2020('Teste de valor',460,'Ahmad',baseTransacoes,baseVendedores,baseFabricantes,2,2020)