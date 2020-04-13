const baseNova = baseAntiga => {
    const filtro = baseAntiga.filter(value => {
        return value.status === 'Baixado'
    })
    return filtro
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