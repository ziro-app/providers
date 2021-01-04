const receitasNovoAfiliado = (baseComissoes, ano, mes, assessor) => {
    if(baseComissoes){
        const filtrado = baseComissoes.filter(item =>
            item.ano === ano && item.mes === mes && item.assessor === assessor && item.tipoCliente === 'Novo' && item.afiliado !== 'NENHUM'
        )
        const receitas = filtrado.map(item => item.receita)
        if(receitas[0] != undefined){
            const somaReceitas = receitas.reduce(
                (anterior, proximo) => anterior + proximo
            )
            return somaReceitas
        }else{
            return []
        }
    }else{
        return []
    }
}

const receitasAntigo = (baseComissoes, ano, mes, assessor) => {
    if(baseComissoes){
        const filtrado = baseComissoes.filter(item =>
            item.ano === ano && item.mes === mes && item.assessor.toLowerCase() === assessor.toLowerCase() && item.tipoCliente === 'Antigo'
        )
        const receitas = filtrado.map(item => item.receita)
        if(receitas[0] != undefined){
            const somaReceitas = receitas.reduce(
                (anterior, proximo) => anterior + proximo
            )
            return somaReceitas
        }else{
            return []
        }
    }else{
        return []
    }
}

const receitasNovo = (baseComissoes, ano, mes, assessor) => {
    let arrayNovos = []
    if(baseComissoes){
        const filtrado = baseComissoes.filter(item =>
            item.ano === ano && item.mes === mes && item.assessor.toLowerCase() === assessor.toLowerCase() && item.tipoCliente === 'Novo' && item.afiliado === 'NENHUM'
        )
        filtrado.map(item => arrayNovos.push(item.receita))
        return arrayNovos
    }else{
        []
    }
}

// Função de apoio para o array dado
const limite = (array) =>{
    let soma = 0
    array.map((item) => {
        if(item*0.4 < 1000){
            soma += item*0.4
        }else{
            soma += 1000
        }
    })
    return soma
}
// Função assessores no ano de 2019
// receitas_mes_novo_cliente = [receita_por_boleto]

const calculoAssessor2019 = (
    receitas_mes_novo_cliente,
    receita_mes_novo_afiliado,
    receita_mes_antigo
) => {
    const parte1 = limite(receitas_mes_novo_cliente)
    const parte2 = receita_mes_novo_afiliado * 0.2
    const parte3 = receita_mes_antigo * 0.1
    return parte1 + parte2 + parte3
}

const assessor2019 = (baseComissoes, ano, mes, assessor) => {
    try {
        const receitas_mes_novo_cliente = receitasNovo(baseComissoes, ano, mes, assessor)
        const receita_mes_novo_afiliado = receitasNovoAfiliado(baseComissoes, ano, mes, assessor)
        const receita_mes_antigo = receitasAntigo(baseComissoes, ano, mes, assessor)
        return calculoAssessor2019(receitas_mes_novo_cliente,receita_mes_novo_afiliado,receita_mes_antigo)
    } catch (error) {
        console.log('erro no calculo de assessores2019')
    }
}


module.exports = assessor2019