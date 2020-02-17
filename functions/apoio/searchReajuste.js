const stringDate = require('@ziro/string-to-date')
const listarParcela2 = require('./listarParcela2')

const searchReajuste = (apelido, dataProcurada, baseReajuste, parametro, descricao, baseComissoes, baseAssessor, i) => {
    const filtrar = baseReajuste.filter(reajusteLine => {
        return (
            dataProcurada >= stringDate(reajusteLine.data) && reajusteLine.apelido === apelido
        )
    })
    if (filtrar[0] !== undefined) {
        const ultimo = filtrar.length - 1
        if (descricao == 'parcela1' && filtrar[ultimo].parcela1 !== '-') return filtrar[ultimo].parcela1
        if (descricao == 'parcela2' && filtrar[ultimo].modeloParcela2 !== '-') return listarParcela2(filtrar[ultimo].modeloParcela2, baseComissoes, baseAssessor, 2020, i, apelido)
        if (descricao == 'escopo' && filtrar[ultimo].escopo !== '-') return filtrar[ultimo].escopo
        return parametro
    }
    return parametro
}

module.exports = searchReajuste