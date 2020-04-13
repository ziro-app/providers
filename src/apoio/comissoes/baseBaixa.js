const baseNova = baseAntiga => {
    const filtro = baseAntiga.filter(value => {
        return value.status === 'Baixado'
    })
    const newBase = filtro.map(value => {
        return {
            ano: value.anoBaixa,
            mes: value.mesBaixa,
            assessor: value.assessor,
            receita: value.receita,
            valor: value.valor
        }
    })
    return newBase
}
  
const baseGeral = (baseComissoes, mes, ano) => {
    if (mes === 3 && ano === 2020) {
        return baseNova(baseComissoes.filter(value => {
            return value.ano === ano && value.mes >= mes
        }))
    } else {
        return baseComissoes
    }
}

module.exports = baseGeral