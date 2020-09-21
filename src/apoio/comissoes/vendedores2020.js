const funcaoData = (data) => {
    const [dia, mes, ano] = data.split(' ')[0].split('/')
    return { dia:Number(dia), mes:Number(mes), ano:Number(ano) }
}

const calculoVendedores2020 = (
    qtd_novos_cadastros_completos,
    qtd_primeira_transacao_quinhentos,
    qtd_primeiros_dezmil,
    qtd_primeiros_cemmil
) => {
    return qtd_novos_cadastros_completos*10 + qtd_primeira_transacao_quinhentos*20 + qtd_primeiros_dezmil*100 + qtd_primeiros_cemmil*100
}

const qtd_primeira_transacao_quinhentos = (baseTransacoesVendedor,fabricantesVendedor,mes,ano) => {
    const result = fabricantesVendedor.map((fabricante) => {
        const primeiraTransacaoQuinhentos = baseTransacoesVendedor.filter((item) => {
            return (item.Fabricante.toUpperCase() === fabricante && item.transacionado >= 500)
        })
        if (primeiraTransacaoQuinhentos[0]) {
            const {mes:mesTransacao, ano:anoTransacao} = funcaoData(primeiraTransacaoQuinhentos[0]['Data Venda'])
            if (mesTransacao === mes && anoTransacao === ano) {
                return primeiraTransacaoQuinhentos[0].transacionado
            } else {
                return 0
            }
        }
    })
    return result.filter((item) => item).length
}

const mesesPrimeiros = (fabricantesVendedor, baseTransacoesVendedor) => {
    const mesesPrimeirosDez = []
    const mesesPrimeirosCem = []
    fabricantesVendedor.map((fabricante) => {
        const auxPrimeirodDez = []
        const auxPrimeirosCem = []
        const arrayFabricante = baseTransacoesVendedor.filter((transacao) => {
            return transacao.Fabricante.toUpperCase() === fabricante
        })
        if (arrayFabricante.length === 1) {
            if (arrayFabricante[0].transacionado >= 10000) {
                const dataVenda = arrayFabricante[0]['Data Venda']
                const { mes, ano } = funcaoData(dataVenda)
                mesesPrimeirosDez.push({
                    mes,
                    ano
                })
            }
            if (arrayFabricante[0].transacionado >= 100000) {
                const dataVenda = arrayFabricante[0]['Data Venda']
                const { mes, ano } = funcaoData(dataVenda)
                mesesPrimeirosCem.push({
                    mes,
                    ano
                })
            }
        }
        if (arrayFabricante.length >= 2) {
            arrayFabricante.reduce((a, b) => {
                if (a.transacionado + b.transacionado >= 10000) {
                    const dataVenda = b ? b['Data Venda'] : a['Data Venda']
                    const { mes, ano } = funcaoData(dataVenda)
                    auxPrimeirodDez.push({
                        mes,
                        ano
                    })
                }
                if (a.transacionado + b.transacionado >= 100000) {
                    const dataVenda = b ? b['Data Venda'] : a['Data Venda']
                    const { mes, ano } = funcaoData(dataVenda)
                    auxPrimeirosCem.push({
                        mes,
                        ano
                    })
                }
                return { x: a['Data Venda'] + b['Data Venda'] }
            })
            if (auxPrimeirodDez[0]) mesesPrimeirosDez.push(auxPrimeirodDez[0])
            if (auxPrimeirosCem[0]) mesesPrimeirosCem.push(auxPrimeirosCem[0])
        }
    })
    return { datasDez: mesesPrimeirosDez, datasCem: mesesPrimeirosCem }
}

const qtd_primeiros_dezmil = (datasDez, mes, ano) => {
    const arrayDatas = datasDez.filter((data) => {
        return data.mes === mes && data.ano === ano
    })
    return arrayDatas.length
}

const qtd_primeiros_cemmil = (datasCem, mes, ano) => {
    const arrayDatas = datasCem.filter((data) => {
        return data.mes === mes && data.ano === ano
    })
    return arrayDatas.length
}

const datas_cadastros_completos = (
    baseFabricantes,
    baseVendedores,
    vendedor
) => {
    const fabricantesVendedor = baseVendedores.filter((fabricante) => fabricante.vendedor === vendedor)
    const arrayFabricantes = fabricantesVendedor.map((item) => item.fabricante)
    const dadosFabricantes = baseFabricantes.filter((fabricante) => {
        return (
            arrayFabricantes.includes(fabricante.Fabricante.toUpperCase()) && fabricante.Categoria)
    })
    const datasCadastroCompleto = dadosFabricantes.map((item) => {
        return {
            mes: funcaoData(item.Data).mes,
            ano: funcaoData(item.Data).ano
        }
    })
    return datasCadastroCompleto
}

const vendedores2020 = (baseTransacoes, baseVendedores, baseFabricantes, mes, ano, vendedor) => {
    const fabricantesVendedor = baseVendedores.filter((cadastro) => cadastro.vendedor === vendedor).map((item) => item.fabricante)
    const baseTransacoesVendedor = baseTransacoes.filter((row) => fabricantesVendedor.includes(row.Fabricante.toUpperCase()))
    const primeirosQuinhentos = qtd_primeira_transacao_quinhentos(baseTransacoesVendedor,fabricantesVendedor,mes,ano)
    const {datasDez, datasCem} = mesesPrimeiros(fabricantesVendedor, baseTransacoesVendedor)
    const primeirosDezMil = qtd_primeiros_dezmil(datasDez, mes, ano)
    const primeirosCemMil = qtd_primeiros_cemmil(datasCem, mes, ano)
    const datasCadastros = datas_cadastros_completos(baseFabricantes, baseVendedores, vendedor)
    const novosCadastros = datasCadastros.filter(data => data.mes === mes && data.ano === ano).length
    return calculoVendedores2020(novosCadastros, primeirosQuinhentos, primeirosDezMil, primeirosCemMil)
}
  
module.exports = vendedores2020